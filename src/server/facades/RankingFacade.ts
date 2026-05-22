import { EntradaInvalidaError } from '../../shared/index.js';
import { CarteiraRepositoryMock } from './subsistemas/CarteiraRepositoryMock.js';
import { RankingRepositoryMock } from './subsistemas/RankingRepositoryMock.js';
import { UserRepositoryMock } from './subsistemas/UserRepositoryMock.js';

export interface EntradaRankingPublica {
  readonly posicao: number;
  readonly userId: string;
  readonly nome: string;
  readonly moedasQuestao: number;
}

/** Facade (F2) — ranking baseado apenas em moedas de questão. */
export class RankingFacade {
  constructor(
    private readonly rankingRepo: RankingRepositoryMock = new RankingRepositoryMock(),
    private readonly carteiraRepo: CarteiraRepositoryMock = new CarteiraRepositoryMock(),
    private readonly userRepo: UserRepositoryMock = new UserRepositoryMock(),
  ) {}

  top(n: number): ReadonlyArray<EntradaRankingPublica> {
    if (n <= 0) {
      throw new EntradaInvalidaError('limite do ranking inválido');
    }
    const ordenado = this.carteiraRepo.listarOrdenadoPorMoedasQuestao();
    const entradas = ordenado.slice(0, n).map((e, i) =>
      this.montarEntrada(i + 1, e.userId, e.moedas),
    );
    this.rankingRepo.salvarSnapshot(
      entradas.map((e) => ({
        userId: e.userId,
        moedasQuestao: e.moedasQuestao,
        atualizadoEm: new Date().toISOString(),
      })),
    );
    return entradas;
  }

  posicaoDoUsuario(userId: string): number {
    const ordenado = this.carteiraRepo.listarOrdenadoPorMoedasQuestao();
    const idx = ordenado.findIndex((e) => e.userId === userId);
    return idx < 0 ? ordenado.length + 1 : idx + 1;
  }

  private montarEntrada(
    posicao: number,
    userId: string,
    moedasQuestao: number,
  ): EntradaRankingPublica {
    const usuario = this.userRepo.buscarPorId(userId);
    return {
      posicao,
      userId,
      nome: usuario?.email ?? userId,
      moedasQuestao,
    };
  }
}
