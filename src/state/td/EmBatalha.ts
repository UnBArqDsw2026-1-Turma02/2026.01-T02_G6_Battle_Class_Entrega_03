import type { SessaoTD } from './SessaoTD.js';
import { EstadoTDBase } from './EstadoTD.js';
import { Vitoria } from './Vitoria.js';
import { Derrota } from './Derrota.js';
import { ComprandoTorres } from './ComprandoTorres.js';

/** ConcreteState (F3): cada tick resolve uma onda; transita para terminal. */
export class EmBatalha extends EstadoTDBase {
  override readonly nome = 'EmBatalha';

  override tick(ctx: SessaoTD, dt: number): void {
    void dt;
    if (ctx.hpBase <= 0) {
      ctx.setEstado(new Derrota());
      return;
    }
    ctx.ondasRestantes -= 1;
    if (ctx.ondasRestantes <= 0) {
      ctx.setEstado(new Vitoria());
      return;
    }
    ctx.setEstado(new ComprandoTorres());
  }
}
