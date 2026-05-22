import type { Partida } from '../../../modules/game/Partida.js';
import { EstadoPartidaBase } from '../EstadoPartida.js';
import { Pausada } from './Pausada.js';
import { Vitoria } from './Vitoria.js';
import { Derrota } from './Derrota.js';

/** Fase tower defense — ticks resolvem ondas; onda avança o combate. */
export class EmCombateTD extends EstadoPartidaBase {
  override readonly nome = 'EmCombateTD';

  override tick(ctx: Partida, dt: number): void {
    void dt;
    if (ctx.hpCastelo <= 0) {
      ctx.setEstado(new Derrota());
      return;
    }
    ctx.ondasRestantes -= 1;
    if (ctx.ondasRestantes <= 0) {
      ctx.setEstado(new Vitoria());
    }
  }

  override onOnda(ctx: Partida): void {
    ctx.setEstado(new Pausada());
  }
}
