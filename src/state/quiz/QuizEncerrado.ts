import type { EstadoQuiz } from './EstadoQuiz.js';
import type { SessaoQuiz } from './SessaoQuiz.js';
import { NotImplementedError } from '../../shared/index.js';

/** ConcreteState (F3) TERMINAL —. TODO(@LucasOliveira): comportamento + transições. */
export class QuizEncerrado implements EstadoQuiz {
  readonly nome = 'QuizEncerrado';
  onAcerto(ctx: SessaoQuiz): void {
    void ctx;
    throw new NotImplementedError('F3 QuizEncerrado.onAcerto');
  }
  onErro(ctx: SessaoQuiz): void {
    void ctx;
    throw new NotImplementedError('F3 QuizEncerrado.onErro');
  }
  proxima(ctx: SessaoQuiz): void {
    void ctx;
    throw new NotImplementedError('F3 QuizEncerrado.proxima');
  }
}
