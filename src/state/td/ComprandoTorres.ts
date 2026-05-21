import type { EstadoTD } from './EstadoTD.js';
import type { SessaoTD } from './SessaoTD.js';
import { EntradaInvalidaError, EstadoInvalidoError } from '../../shared/index.js';
import { EmBatalha } from './EmBatalha.js';

/** ConcreteState (F3): compra torres; `pronto` inicia a batalha. */
export class ComprandoTorres implements EstadoTD {
  readonly nome = 'ComprandoTorres';

  tick(): void {
    throw new EstadoInvalidoError(this.nome, 'tick');
  }

  iniciar(): void {
    throw new EstadoInvalidoError(this.nome, 'iniciar');
  }

  comprar(ctx: SessaoTD, custo: number): void {
    if (custo < 0) throw new EntradaInvalidaError('custo negativo de compra');
    ctx.carteira.debitar(custo);
  }

  pronto(ctx: SessaoTD): void {
    ctx.setEstado(new EmBatalha());
  }
}
