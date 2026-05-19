import { describe, it, expect } from 'vitest';
import { PartidaFacade } from '../src/server/facades/index.js';
import { EntradaInvalidaError } from '../src/shared/index.js';

describe('F2 Facade', () => {
  it('caminho feliz: finalizarRodada orquestra os subsistemas', async () => {
    const out = await new PartidaFacade().finalizarRodada('u1', [
      { questaoId: 'q1', alternativa: 'A' },
      { questaoId: 'q2', alternativa: 'A' },
      { questaoId: 'q3', alternativa: 'A' },
    ]);
    expect(out.acertos).toBe(3);
    expect(out.moedas).toBe(30);
    expect(out.desbloqueios).toContain('torre-especial');
  });

  it('caminho de erro: respostas vazias (rejeita)', async () => {
    await expect(
      new PartidaFacade().finalizarRodada('u1', []),
    ).rejects.toBeInstanceOf(EntradaInvalidaError);
  });
});
