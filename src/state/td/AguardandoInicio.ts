import type { SessaoTD } from './SessaoTD.js';
import { EstadoTDBase } from './EstadoTD.js';
import { ComprandoTorres } from './ComprandoTorres.js';

/** ConcreteState (F3) — tela inicial; só `iniciar` é válido. */
export class AguardandoInicio extends EstadoTDBase {
  override readonly nome = 'AguardandoInicio';

  override iniciar(ctx: SessaoTD): void {
    ctx.setEstado(new ComprandoTorres());
  }
}
