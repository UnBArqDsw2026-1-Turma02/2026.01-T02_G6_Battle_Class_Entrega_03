import type { EstadoQuiz } from './EstadoQuiz.js';
import type { SessaoQuiz } from './SessaoQuiz.js';
import { NotImplementedError } from '../../shared/index.js';

/** ConcreteState (F3). TODO(@LucasOliveira): comportamento + transições. */
export class ExibindoPergunta implements EstadoQuiz {
  readonly nome = 'ExibindoPergunta';
  onAcerto(ctx: SessaoQuiz): void {
    void ctx;
    throw new NotImplementedError('F3 ExibindoPergunta.onAcerto');
  }
  onErro(ctx: SessaoQuiz): void {
    void ctx;
    throw new NotImplementedError('F3 ExibindoPergunta.onErro');
  }
  proxima(ctx: SessaoQuiz): void {
    void ctx;
    throw new NotImplementedError('F3 ExibindoPergunta.proxima');
  }
}
