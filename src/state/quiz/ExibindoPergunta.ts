import type { SessaoQuiz } from './SessaoQuiz.js';
import { EstadoQuizBase } from './EstadoQuiz.js';
import { AguardandoResposta } from './AguardandoResposta.js';

/** ConcreteState (F3) — questão na tela; só pode avançar p/ resposta. */
export class ExibindoPergunta extends EstadoQuizBase {
  override readonly nome = 'ExibindoPergunta';

  override proxima(ctx: SessaoQuiz): void {
    ctx.setEstado(new AguardandoResposta());
  }
}
