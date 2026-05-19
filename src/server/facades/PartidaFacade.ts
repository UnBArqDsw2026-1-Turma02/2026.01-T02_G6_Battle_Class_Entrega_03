import type { RespostaDTO } from '../../shared/index.js';
import { QuizService } from './subsistemas/QuizService.js';
import { EconomiaService } from './subsistemas/EconomiaService.js';
import { TowerDefenseService } from './subsistemas/TowerDefenseService.js';
import { PartidaRepository } from './subsistemas/PartidaRepository.js';

export interface ResultadoRodada {
  readonly acertos: number;
  readonly moedas: number;
  readonly desbloqueios: string[];
}

/** Facade (F2) — orquestra quiz→economia→TD→repo num único ponto. */
export class PartidaFacade {
  constructor(
    private readonly quiz: QuizService = new QuizService(),
    private readonly economia: EconomiaService = new EconomiaService(),
    private readonly td: TowerDefenseService = new TowerDefenseService(),
    private readonly repo: PartidaRepository = new PartidaRepository(),
  ) {}

  async finalizarRodada(
    userId: string,
    respostas: ReadonlyArray<RespostaDTO>,
  ): Promise<ResultadoRodada> {
    const resultado = this.quiz.corrigir(respostas);
    const moedas = this.economia.calcularRecompensa(resultado.acertos);
    this.economia.creditar(userId, moedas);
    const desbloqueios = this.td.liberarRecursos(userId, resultado.acertos);
    await this.repo.salvar({ userId, moedas });
    return { acertos: resultado.acertos, moedas, desbloqueios };
  }
}
