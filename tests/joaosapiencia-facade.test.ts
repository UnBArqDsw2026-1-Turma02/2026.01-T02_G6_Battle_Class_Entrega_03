import { describe, expect, it } from 'vitest';
import { AuthFacade, PartidaFacade } from '../src/server/facades/index.js';
import { EntradaInvalidaError } from '../src/shared/index.js';

describe('F2 Facade — JoaoSapiencia extras', () => {
  it('obterProximaQuestao exige userId', async () => {
    await expect(
      new PartidaFacade().obterProximaQuestao(' ', 'ENEM'),
    ).rejects.toBeInstanceOf(EntradaInvalidaError);
  });

  it('registrar rejeita email duplicado', async () => {
    const auth = new AuthFacade();
    await auth.registrar({ email: 'joao@battle.class', senha: 'abc123' });
    await expect(
      auth.registrar({ email: 'joao@battle.class', senha: 'abc123' }),
    ).rejects.toBeInstanceOf(EntradaInvalidaError);
  });
});
