import type { RespostaDTO } from '../../shared/index.js';
import { NotImplementedError } from '../../shared/index.js';
import { QuizService } from './subsistemas/QuizService.js';
import { EconomiaService } from './subsistemas/EconomiaService.js';
import { TowerDefenseService } from './subsistemas/TowerDefenseService.js';
import { PartidaRepository } from './subsistemas/PartidaRepository.js';

export interface ResultadoRodada {
  readonly moedas: number;
  readonly desbloqueios: string[];
}

/** Facade (F2). TODO(@Dannyeclisson): orquestrar quiz→economia→TD→repo. */
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
    void userId; void respostas;
    void this.quiz; void this.economia; void this.td; void this.repo;
    throw new NotImplementedError('F2 PartidaFacade.finalizarRodada');
  }
}
