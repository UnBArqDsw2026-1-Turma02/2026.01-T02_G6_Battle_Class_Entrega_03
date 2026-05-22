import type { SessaoTD } from './SessaoTD.js';
import { EstadoInvalidoError } from '../../shared/index.js';

/** State (F3) — interface comum dos estados do modo tower defense. */
export interface EstadoTD {
  readonly nome: string;
  tick(ctx: SessaoTD, dt: number): void;
  iniciar(ctx: SessaoTD): void;
  comprar(ctx: SessaoTD, custo: number): void;
  pronto(ctx: SessaoTD): void;
}

/**
 * Base abstrata (F3) — transições não suportadas lançam InvalidStateError
 * (alias de EstadoInvalidoError no domínio compartilhado).
 */
export abstract class EstadoTDBase implements EstadoTD {
  abstract readonly nome: string;

  tick(_ctx: SessaoTD, _dt: number): void {
    throw new EstadoInvalidoError(this.nome, 'tick');
  }

  iniciar(_ctx: SessaoTD): void {
    throw new EstadoInvalidoError(this.nome, 'iniciar');
  }

  comprar(_ctx: SessaoTD, _custo: number): void {
    throw new EstadoInvalidoError(this.nome, 'comprar');
  }

  pronto(_ctx: SessaoTD): void {
    throw new EstadoInvalidoError(this.nome, 'pronto');
  }
}
