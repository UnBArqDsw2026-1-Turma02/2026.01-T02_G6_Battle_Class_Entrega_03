import type { EstadoTD } from './EstadoTD.js';
import type { SessaoTD } from './SessaoTD.js';
import { EntradaInvalidaError, EstadoInvalidoError } from '../../shared/index.js';
import { EmBatalha } from './EmBatalha.js';

/** ConcreteState (F3) — compra/upgrade debita Carteira e inicia batalha. */
export class ComprandoTorres implements EstadoTD {
  readonly nome = 'ComprandoTorres';
  tick(_ctx: SessaoTD, _dt: number): void {
    throw new EstadoInvalidoError(this.nome, 'tick');
  }
  iniciar(_ctx: SessaoTD): void {
    throw new EstadoInvalidoError(this.nome, 'iniciar');
  }
  comprar(ctx: SessaoTD, custo: number): void {
    if (custo < 0) throw new EntradaInvalidaError('custo negativo de compra');
    ctx.carteira.debitar(custo);
    ctx.setEstado(new EmBatalha());
  }
}
