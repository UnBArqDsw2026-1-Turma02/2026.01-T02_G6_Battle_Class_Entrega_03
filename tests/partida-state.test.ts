import { describe, it, expect } from 'vitest';
import { Partida } from '../src/modules/game/Partida.js';
import { MOEDAS_PARA_COMBATE_TD } from '../src/shared/state/EstadoPartida.js';
import { EstadoInvalidoError } from '../src/shared/index.js';

describe('F3 State — Partida (máquina unificada V3)', () => {
  it('caminho feliz: onOnda inicia estudo e acertos liberam TD ao atingir 50 moedas', () => {
    const partida = new Partida();
    partida.onOnda();
    expect(partida.estadoAtual).toBe('EmEstudo');

    const acertosNecessarios = Math.ceil(MOEDAS_PARA_COMBATE_TD / 10);
    for (let i = 0; i < acertosNecessarios; i++) {
      partida.onAcerto();
    }

    expect(partida.carteira.obterSaldo()).toBeGreaterThanOrEqual(
      MOEDAS_PARA_COMBATE_TD,
    );
    expect(partida.estadoAtual).toBe('EmCombateTD');
  });

  it('caminho feliz: ticks no TD levam a Vitoria', () => {
    const partida = new Partida(undefined, 1);
    partida.onOnda();
    for (let i = 0; i < MOEDAS_PARA_COMBATE_TD / 10; i++) partida.onAcerto();
    expect(partida.estadoAtual).toBe('EmCombateTD');
    partida.tick(1);
    expect(partida.estadoAtual).toBe('Vitoria');
  });

  it('caminho de erro: ação inválida em estado terminal', () => {
    const partida = new Partida(undefined, 1);
    partida.onOnda();
    for (let i = 0; i < MOEDAS_PARA_COMBATE_TD / 10; i++) partida.onAcerto();
    partida.tick(1);
    expect(() => partida.onAcerto()).toThrow(EstadoInvalidoError);
  });
});
