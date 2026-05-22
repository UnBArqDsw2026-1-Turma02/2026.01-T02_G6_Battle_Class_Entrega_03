import type { Partida } from '../../../modules/game/Partida.js';
import {
  EstadoPartidaBase,
  MOEDAS_PARA_COMBATE_TD,
} from '../EstadoPartida.js';
import { EmCombateTD } from './EmCombateTD.js';

/** Fase de quiz — acertos creditam moedas; saldo >= 50 libera TD (sem Intervalo). */
export class EmEstudo extends EstadoPartidaBase {
  override readonly nome = 'EmEstudo';

  override onAcerto(ctx: Partida): void {
    ctx.carteira.creditar(10);
    if (ctx.carteira.obterSaldo() >= MOEDAS_PARA_COMBATE_TD) {
      ctx.setEstado(new EmCombateTD());
    }
  }

  override onErro(ctx: Partida): void {
    void ctx;
    // penalidade leve opcional: não credita; permanece em estudo
  }
}
