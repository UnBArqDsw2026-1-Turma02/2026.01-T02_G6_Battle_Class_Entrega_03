import type { RespostaDTO } from '../../../shared/index.js';
import { NotImplementedError } from '../../../shared/index.js';

export interface ResultadoQuiz {
  readonly acertos: number;
  readonly total: number;
}

/** Subsystem (F2) — ~MotorRoleta+BancoDeQuestoes. Sem rede. */
export class QuizService {
  corrigir(respostas: ReadonlyArray<RespostaDTO>): ResultadoQuiz {
    void respostas; // TODO(@Dannyeclisson)
    throw new NotImplementedError('F2 QuizService.corrigir');
  }
}
