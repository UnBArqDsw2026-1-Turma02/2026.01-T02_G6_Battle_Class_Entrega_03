import type { EstadoQuiz } from './EstadoQuiz.js';
import { EstadoInvalidoError } from '../../shared/index.js';

/** ConcreteState (F3) — TERMINAL: nenhuma ação é válida. */
export class QuizEncerrado implements EstadoQuiz {
  readonly nome = 'QuizEncerrado';
  onAcerto(): void {
    throw new EstadoInvalidoError(this.nome, 'onAcerto');
  }
  onErro(): void {
    throw new EstadoInvalidoError(this.nome, 'onErro');
  }
  proxima(): void {
    throw new EstadoInvalidoError(this.nome, 'proxima');
  }
}
