import { describe, it, expect } from 'vitest';
import {
  PartidaFacade,
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
});
