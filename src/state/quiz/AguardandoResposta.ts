import type { EstadoQuiz } from './EstadoQuiz.js';
import type { SessaoQuiz } from './SessaoQuiz.js';
import { EstadoInvalidoError } from '../../shared/index.js';
import { ExibindoPergunta } from './ExibindoPergunta.js';
import { QuizEncerrado } from './QuizEncerrado.js';

/** ConcreteState (F3) — aguarda resposta; acerto credita a Carteira. */
export class AguardandoResposta implements EstadoQuiz {
  readonly nome = 'AguardandoResposta';

  onAcerto(ctx: SessaoQuiz): void {
    ctx.carteira.creditar(10);
    this.encerrarOuProxima(ctx);
  }
  onErro(ctx: SessaoQuiz): void {
    this.encerrarOuProxima(ctx);
  }
  proxima(): void {
    throw new EstadoInvalidoError(this.nome, 'proxima');
  }

  private encerrarOuProxima(ctx: SessaoQuiz): void {
    ctx.perguntasRestantes -= 1;
    ctx.setEstado(
      ctx.perguntasRestantes <= 0 ? new QuizEncerrado() : new ExibindoPergunta(),
    );
  }
}
