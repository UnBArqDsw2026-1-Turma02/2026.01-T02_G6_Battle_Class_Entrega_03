import { describe, expect, it } from 'vitest';
import {
    VestibularServiceFacade,
    RankingFacade,
} from '../src/server/facades/index.js';
import { EntradaInvalidaError } from '../src/shared/index.js';

describe('F2 Facade — Ana Elisa: VestibularServiceFacade', () => {
  it('caminho feliz: retorna questoes das 3 bancas quando nenhuma banca e filtrada', async () => {
    const facade = new VestibularServiceFacade();
    const questoes = await facade.obterQuestoes({ materia: 'matematica' });
    expect(questoes).toHaveLength(3);
    const bancas = questoes.map((q) => q.banca);
    expect(bancas).toContain('ENEM');
    expect(bancas).toContain('FUVEST');
    expect(bancas).toContain('UNB');
  });

  it('caminho feliz: filtra por banca ENEM retorna apenas 1 questao', async () => {
    const facade = new VestibularServiceFacade();
    const questoes = await facade.obterQuestoes({
      materia: 'historia',
      banca: 'ENEM',
    });
    expect(questoes).toHaveLength(1);
    expect(questoes[0]?.banca).toBe('ENEM');
  });

  it('caminho feliz: filtra por banca UNB retorna questao com Certo/Errado', async () => {
    const facade = new VestibularServiceFacade();
    const questoes = await facade.obterQuestoes({
      materia: 'biologia',
      banca: 'UNB',
    });
    expect(questoes[0]?.alternativas).toContain('Certo');
    expect(questoes[0]?.alternativas).toContain('Errado');
  });

  it('caminho feliz: limite restringe quantidade de questoes retornadas', async () => {
    const facade = new VestibularServiceFacade();
    const questoes = await facade.obterQuestoes({
      materia: 'matematica',
      limite: 2,
    });
    expect(questoes).toHaveLength(2);
  });

  it('caminho feliz: filtro por nivel remove questoes que nao batem', async () => {
    const facade = new VestibularServiceFacade();
    const questoes = await facade.obterQuestoes({
      materia: 'matematica',
      nivel: 'dificil',
    });
    for (const q of questoes) {
      expect(q.dificuldade).toBe('dificil');
    }
  });

  it('caminho feliz: enunciado contem a materia informada', async () => {
    const facade = new VestibularServiceFacade();
    const questoes = await facade.obterQuestoes({ materia: 'biologia' });
    for (const q of questoes) {
      expect(q.enunciado).toContain('biologia');
    }
  });
});

describe('F2 Facade — Ana Elisa: RankingFacade', () => {
  it('caminho feliz: top(1) retorna exatamente 1 entrada', () => {
    const ranking = new RankingFacade();
    expect(ranking.top(1)).toHaveLength(1);
  });

  it('caminho feliz: entradas do top tem posicao crescente', () => {
    const ranking = new RankingFacade();
    const top = ranking.top(3);
    expect(top[0]?.posicao).toBe(1);
    expect(top[1]?.posicao).toBe(2);
    expect(top[2]?.posicao).toBe(3);
  });

  it('caminho feliz: moedas do top estao em ordem decrescente', () => {
    const ranking = new RankingFacade();
    const top = ranking.top(3);
    for (let i = 0; i < top.length - 1; i++) {
      expect(top[i]!.moedasQuestao).toBeGreaterThanOrEqual(
        top[i + 1]!.moedasQuestao,
      );
    }
  });

  it('caminho de erro: top(0) lanca EntradaInvalidaError', () => {
    expect(() => new RankingFacade().top(0)).toThrow(EntradaInvalidaError);
  });

  it('caminho de erro: top(-1) lanca EntradaInvalidaError', () => {
    expect(() => new RankingFacade().top(-1)).toThrow(EntradaInvalidaError);
  });
});
