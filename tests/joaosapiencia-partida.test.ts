import { describe, expect, it } from 'vitest';
import { Partida } from '../src/modules/game/Partida.js';
import { MOEDAS_PARA_COMBATE_TD } from '../src/shared/state/EstadoPartida.js';

describe('F3 State — Partida (V3) JoaoSapiencia extras', () => {
  it('onOnda em combate pausa e tick retoma', () => {
    const partida = new Partida(undefined, 2);
    partida.onOnda();

    const acertos = Math.ceil(MOEDAS_PARA_COMBATE_TD / 10);
    for (let i = 0; i < acertos; i++) partida.onAcerto();

    expect(partida.estadoAtual).toBe('EmCombateTD');
    partida.onOnda();
    expect(partida.estadoAtual).toBe('Pausada');

    partida.tick(1);
    expect(partida.estadoAtual).toBe('EmCombateTD');
  });

  it('hpCastelo <= 0 leva a Derrota', () => {
    const partida = new Partida(undefined, 1, 0);
    partida.onOnda();

    const acertos = Math.ceil(MOEDAS_PARA_COMBATE_TD / 10);
    for (let i = 0; i < acertos; i++) partida.onAcerto();

    partida.tick(1);
    expect(partida.estadoAtual).toBe('Derrota');
  });
});
