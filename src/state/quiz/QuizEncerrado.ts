import { EstadoQuizBase } from './EstadoQuiz.js';

/** ConcreteState (F3) — TERMINAL: nenhuma ação é válida. */
export class QuizEncerrado extends EstadoQuizBase {
  override readonly nome = 'QuizEncerrado';
}
