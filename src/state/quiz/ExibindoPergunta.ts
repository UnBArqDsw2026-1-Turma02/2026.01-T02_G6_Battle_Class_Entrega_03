import type { EstadoQuiz } from './EstadoQuiz.js';
import type { SessaoQuiz } from './SessaoQuiz.js';
import { EstadoInvalidoError } from '../../shared/index.js';
import { AguardandoResposta } from './AguardandoResposta.js';

/** ConcreteState (F3) — questão na tela; só pode avançar p/ resposta. */
export class ExibindoPergunta implements EstadoQuiz {
  readonly nome = 'ExibindoPergunta';
  onAcerto(): void {
    throw new EstadoInvalidoError(this.nome, 'onAcerto');
  }
  onErro(): void {
    throw new EstadoInvalidoError(this.nome, 'onErro');
  }
  proxima(ctx: SessaoQuiz): void {
    ctx.setEstado(new AguardandoResposta());
  }
}
