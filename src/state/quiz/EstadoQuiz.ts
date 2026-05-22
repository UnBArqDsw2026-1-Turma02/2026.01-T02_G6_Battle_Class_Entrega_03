import type { SessaoQuiz } from './SessaoQuiz.js';
import { EstadoInvalidoError } from '../../shared/index.js';

/** State (F3) — interface comum dos estados do modo estudo. */
export interface EstadoQuiz {
  readonly nome: string;
  onAcerto(ctx: SessaoQuiz): void;
  onErro(ctx: SessaoQuiz): void;
  proxima(ctx: SessaoQuiz): void;
}

/**
 * Base abstrata (F3) — transições não suportadas lançam InvalidStateError
 * (alias de EstadoInvalidoError no domínio compartilhado).
 */
export abstract class EstadoQuizBase implements EstadoQuiz {
  abstract readonly nome: string;

  onAcerto(_ctx: SessaoQuiz): void {
    throw new EstadoInvalidoError(this.nome, 'onAcerto');
  }

  onErro(_ctx: SessaoQuiz): void {
    throw new EstadoInvalidoError(this.nome, 'onErro');
  }

  proxima(_ctx: SessaoQuiz): void {
    throw new EstadoInvalidoError(this.nome, 'proxima');
  }
}
