import { describe, expect, it } from 'vitest';
import {
    AuthFacade,
    EconomiaService,
    PartidaFacade,
    RankingFacade,
    type EconomiaPort,
    type PartidaRepositoryPort,
    type QuizPort,
    type TowerDefensePort,
} from '../src/server/facades/index.js';
import { QuestaoEnemCreator } from '../src/server/factories/index.js';
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

  it('caminho feliz: obterProximaQuestao usa Roleta -> QuestaoCreator via Facade', async () => {
    const q = await new PartidaFacade().obterProximaQuestao('u1', 'UNB');

    expect(q.banca).toBe('UNB');
    expect(q.enunciado).toContain('[matematica]');
  });

  it('caminho feliz: contrato publico mantem ordem quiz -> economia -> TD -> repo', async () => {
    const ordem: string[] = [];
    const quiz: QuizPort = {
      corrigir: () => {
        ordem.push('quiz.corrigir');
        return { acertos: 2, total: 2 };
      },
      sortearQuestao: () =>
        new QuestaoEnemCreator().criarQuestao('questao fake para contrato'),
    };
    const economia: EconomiaPort = {
      calcularRecompensa: () => {
        ordem.push('economia.calcularRecompensa');
        return 20;
      },
      creditar: () => {
        ordem.push('economia.creditar');
      },
    };
    const td: TowerDefensePort = {
      liberarRecursos: () => {
        ordem.push('td.liberarRecursos');
        return ['torre-comum'];
      },
    };
    const repo: PartidaRepositoryPort = {
      salvar: async () => {
        ordem.push('repo.salvar');
      },
    };

    await new PartidaFacade(quiz, economia, td, repo).finalizarRodada('u1', [
      { questaoId: 'q1', alternativa: 'A' },
    ]);

    expect(ordem).toEqual([
      'quiz.corrigir',
      'economia.calcularRecompensa',
      'economia.creditar',
      'td.liberarRecursos',
      'repo.salvar',
    ]);
  });

  it('caminho de erro: respostas vazias', async () => {
    await expect(
      new PartidaFacade().finalizarRodada('u1', []),
    ).rejects.toBeInstanceOf(EntradaInvalidaError);
  });

  it('caminho de erro: userId vazio no contrato publico', async () => {
    await expect(
      new PartidaFacade().finalizarRodada(' ', [
        { questaoId: 'q1', alternativa: 'A' },
      ]),
    ).rejects.toBeInstanceOf(EntradaInvalidaError);
  });

  it('finalizarRodada credita moedas', async () => {
    const economia = new EconomiaService();
    const facade = new PartidaFacade(undefined, economia);
    await facade.finalizarRodada('player-1', [
      { questaoId: 'q1', alternativa: 'A' },
      { questaoId: 'q2', alternativa: 'B' },
      { questaoId: 'q3', alternativa: 'A' },
    ]);
    expect(economia.obterSaldo('player-1')).toBe(20);
  });
});

describe('F2 Facade — RankingFacade', () => {
  it('caminho feliz: top retorna ranking por moedas de questão', () => {
    const ranking = new RankingFacade();
    const top3 = ranking.top(3);
    expect(top3[0]?.userId).toBe('u2');
    expect(top3[0]?.moedasQuestao).toBe(120);
  });

  it('caminho feliz: posicaoDoUsuario reflete moedas de questão', () => {
    const ranking = new RankingFacade();
    expect(ranking.posicaoDoUsuario('u2')).toBe(1);
    expect(ranking.posicaoDoUsuario('u3')).toBe(3);
  });

  it('caminho de erro: limite inválido no top', () => {
    expect(() => new RankingFacade().top(0)).toThrow(EntradaInvalidaError);
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

  it('caminho de erro: login com email/senha vazios', async () => {
    const auth = new AuthFacade();
    await expect(auth.login(' ', ' ')).rejects.toBeInstanceOf(
      EntradaInvalidaError,
    );
  });

  it('caminho de erro: token inválido', async () => {
    const auth = new AuthFacade();
    await expect(auth.validarToken('token-invalido')).rejects.toBeInstanceOf(
      EntradaInvalidaError,
    );
  });
});
