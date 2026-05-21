import type { Banca, RespostaDTO } from '../../shared/index.js';
import { EntradaInvalidaError } from '../../shared/index.js';
import type { Questao } from '../factories/questao/Questao.js';
import { QuizService, type ResultadoQuiz } from './subsistemas/QuizService.js';
import { EconomiaService } from './subsistemas/EconomiaService.js';
import { TowerDefenseService } from './subsistemas/TowerDefenseService.js';
import {
  PartidaRepository,
  type RegistroPartida,
} from './subsistemas/PartidaRepository.js';

export interface ResultadoRodada {
  readonly acertos: number;
  readonly moedas: number;
  readonly desbloqueios: string[];
}

export interface QuizPort {
  corrigir(respostas: ReadonlyArray<RespostaDTO>): ResultadoQuiz;
  sortearQuestao(banca?: Banca): Questao;
}

export interface EconomiaPort {
  calcularRecompensa(acertos: number): number;
  creditar(userId: string, moedas: number): void;
}

export interface TowerDefensePort {
  liberarRecursos(userId: string, acertos: number): string[];
}

export interface PartidaRepositoryPort {
  salvar(registro: RegistroPartida): Promise<void>;
}

/**
 * Facade (F2): orquestra quiz -> economia -> TD -> repo num único ponto.
 *
 * A regra de domínio fica nos subsistemas; a Facade estabiliza o contrato
 * público e preserva a ordem do caso de uso.
 */
export class PartidaFacade {
  constructor(
    private readonly quiz: QuizPort = new QuizService(),
    private readonly economia: EconomiaPort = new EconomiaService(),
    private readonly td: TowerDefensePort = new TowerDefenseService(),
    private readonly repo: PartidaRepositoryPort = new PartidaRepository(),
  ) {}

  async obterProximaQuestao(
    userId: string,
    banca: Banca = 'ENEM',
  ): Promise<Questao> {
    if (userId.trim().length === 0) {
      throw new EntradaInvalidaError('userId vazio');
    }
    return this.quiz.sortearQuestao(banca);
  }

  async finalizarRodada(
    userId: string,
    respostas: ReadonlyArray<RespostaDTO>,
  ): Promise<ResultadoRodada> {
    if (userId.trim().length === 0) {
      throw new EntradaInvalidaError('userId vazio');
    }

    const resultado = this.quiz.corrigir(respostas);
    const moedas = this.economia.calcularRecompensa(resultado.acertos);
    this.economia.creditar(userId, moedas);
    const desbloqueios = this.td.liberarRecursos(userId, resultado.acertos);
    await this.repo.salvar({ userId, moedas });
    return { acertos: resultado.acertos, moedas, desbloqueios };
  }
}
