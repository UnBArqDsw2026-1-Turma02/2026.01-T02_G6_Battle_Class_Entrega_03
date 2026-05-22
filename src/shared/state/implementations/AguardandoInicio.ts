import type { Partida } from '../../../modules/game/Partida.js';
import { EstadoPartidaBase } from '../EstadoPartida.js';
import { EmEstudo } from './EmEstudo.js';

/** Estado inicial — inicia o modo estudo na primeira onda. */
export class AguardandoInicio extends EstadoPartidaBase {
  override readonly nome = 'AguardandoInicio';

  override onOnda(ctx: Partida): void {
    ctx.setEstado(new EmEstudo());
  }
}
