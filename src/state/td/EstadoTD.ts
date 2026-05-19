import type { SessaoTD } from './SessaoTD.js';

/** State (F3) — interface comum dos estados do modo tower defense. */
export interface EstadoTD {
  readonly nome: string;
  tick(ctx: SessaoTD, dt: number): void;
  iniciar(ctx: SessaoTD): void;
  pronto(ctx: SessaoTD): void;
}
