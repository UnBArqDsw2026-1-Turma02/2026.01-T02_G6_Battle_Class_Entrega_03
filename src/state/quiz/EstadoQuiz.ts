import type { SessaoQuiz } from './SessaoQuiz.js';

/** State (F3) — interface comum dos estados do modo estudo. */
export interface EstadoQuiz {
  readonly nome: string;
  onAcerto(ctx: SessaoQuiz): void;
  onErro(ctx: SessaoQuiz): void;
  proxima(ctx: SessaoQuiz): void;
}
