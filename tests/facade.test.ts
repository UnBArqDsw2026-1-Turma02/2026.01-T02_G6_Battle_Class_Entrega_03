import { describe, it, expect } from 'vitest';
import { AuthFacade, PartidaFacade } from '../src/server/facades/index.js';
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

describe('F2 Facade — AuthFacade', () => {
  it('caminho feliz: registrar/login/validarToken', async () => {
    const auth = new AuthFacade();
    const cadastro = await auth.registrar({
      email: 'marina@battleclass.dev',
      senha: 'segredo123',
    });
    const login = await auth.login('marina@battleclass.dev', 'segredo123');
    const payload = await auth.validarToken(login.token);

    expect(cadastro.usuario.email).toBe('marina@battleclass.dev');
    expect(login.usuario.id).toBe(cadastro.usuario.id);
    expect(payload.userId).toBe(cadastro.usuario.id);
  });

  it('caminho de erro: token inválido', async () => {
    const auth = new AuthFacade();
    await expect(auth.validarToken('token-invalido')).rejects.toBeInstanceOf(
      EntradaInvalidaError,
    );
  });
});
