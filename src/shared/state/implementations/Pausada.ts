import type { Partida } from '../../../modules/game/Partida.js';
import { EstadoPartidaBase } from '../EstadoPartida.js';
import { EmCombateTD } from './EmCombateTD.js';

/** Pausa entre ondas do TD — retoma combate com tick. */
export class Pausada extends EstadoPartidaBase {
  override readonly nome = 'Pausada';

  override tick(ctx: Partida, dt: number): void {
    void dt;
    ctx.setEstado(new EmCombateTD());
  }
}
