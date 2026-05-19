import type { EstadoQuiz } from './EstadoQuiz.js';
import type { SessaoQuiz } from './SessaoQuiz.js';
import { NotImplementedError } from '../../shared/index.js';

/** ConcreteState (F3). TODO(@LucasOliveira): comportamento + transições. */
export class AguardandoResposta implements EstadoQuiz {
  readonly nome = 'AguardandoResposta';
  onAcerto(ctx: SessaoQuiz): void {
    void ctx;
    throw new NotImplementedError('F3 AguardandoResposta.onAcerto');
  }
  onErro(ctx: SessaoQuiz): void {
    void ctx;
    throw new NotImplementedError('F3 AguardandoResposta.onErro');
  }
  proxima(ctx: SessaoQuiz): void {
    void ctx;
    throw new NotImplementedError('F3 AguardandoResposta.proxima');
  }
}
