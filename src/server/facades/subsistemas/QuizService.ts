import type { RespostaDTO } from '../../../shared/index.js';
import { EntradaInvalidaError } from '../../../shared/index.js';

export interface ResultadoQuiz {
  readonly acertos: number;
  readonly total: number;
}

/** Subsystem (F2). Gabarito mock: alternativa 'A' é a correta. */
export class QuizService {
  corrigir(respostas: ReadonlyArray<RespostaDTO>): ResultadoQuiz {
    if (respostas.length === 0) {
      throw new EntradaInvalidaError('respostas vazias');
    }
    const acertos = respostas.filter(
      (r) => r.alternativa.toUpperCase() === 'A',
    ).length;
    return { acertos, total: respostas.length };
  }
}
