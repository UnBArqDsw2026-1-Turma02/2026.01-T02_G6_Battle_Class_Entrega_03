import type { SessaoTD } from './SessaoTD.js';
import { EntradaInvalidaError } from '../../shared/index.js';
import { EstadoTDBase } from './EstadoTD.js';
import { EmBatalha } from './EmBatalha.js';

/** ConcreteState (F3): compra torres; `pronto` inicia a batalha. */
export class ComprandoTorres extends EstadoTDBase {
  override readonly nome = 'ComprandoTorres';

  override comprar(ctx: SessaoTD, custo: number): void {
    if (custo < 0) throw new EntradaInvalidaError('custo negativo de compra');
    ctx.carteira.debitar(custo);
  }

  override pronto(ctx: SessaoTD): void {
    ctx.setEstado(new EmBatalha());
  }
}
