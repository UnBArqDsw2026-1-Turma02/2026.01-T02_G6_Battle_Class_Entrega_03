import type { SessaoQuiz } from './SessaoQuiz.js';
import { EstadoQuizBase } from './EstadoQuiz.js';
import { ExibindoPergunta } from './ExibindoPergunta.js';
import { QuizEncerrado } from './QuizEncerrado.js';

/** ConcreteState (F3) — aguarda resposta; acerto credita a Carteira. */
export class AguardandoResposta extends EstadoQuizBase {
  override readonly nome = 'AguardandoResposta';

  override onAcerto(ctx: SessaoQuiz): void {
    ctx.carteira.creditar(10);
    this.encerrarOuProxima(ctx);
  }

  override onErro(ctx: SessaoQuiz): void {
    this.encerrarOuProxima(ctx);
  }

  private encerrarOuProxima(ctx: SessaoQuiz): void {
    ctx.perguntasRestantes -= 1;
    ctx.setEstado(
      ctx.perguntasRestantes <= 0 ? new QuizEncerrado() : new ExibindoPergunta(),
    );
  }
}
