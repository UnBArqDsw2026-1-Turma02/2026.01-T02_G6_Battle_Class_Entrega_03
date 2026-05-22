import { describe, expect, it } from 'vitest';
import {
    QuestaoEnemCreator,
    QuestaoFuvestCreator,
    QuestaoUnbCreator,
    InimigoMatematicaCreator,
    InimigoHistoriaCreator,
    InimigoBiologiaCreator,
} from '../src/server/factories/index.js';
import { EntradaInvalidaError } from '../src/shared/index.js';

describe('F1 Factory Method — Ana Elisa: família Questao', () => {
  it('QuestaoEnemCreator cria questao com banca ENEM e 5 alternativas', () => {
    const q = new QuestaoEnemCreator().criarQuestao('Qual o valor de pi?');
    expect(q.banca).toBe('ENEM');
    expect(q.dificuldade).toBe('medio');
    expect(q.alternativas).toHaveLength(5);
    expect(q.enunciado).toBe('Qual o valor de pi?');
  });

  it('QuestaoFuvestCreator cria questao com banca FUVEST e dificuldade dificil', () => {
    const q = new QuestaoFuvestCreator().criarQuestao('Explique a mitose.');
    expect(q.banca).toBe('FUVEST');
    expect(q.dificuldade).toBe('dificil');
    expect(q.alternativas).toHaveLength(5);
  });

  it('QuestaoUnbCreator cria questao com banca UNB e alternativas Certo/Errado', () => {
    const q = new QuestaoUnbCreator().criarQuestao('A Terra e redonda?');
    expect(q.banca).toBe('UNB');
    expect(q.alternativas).toContain('Certo');
    expect(q.alternativas).toContain('Errado');
    expect(q.alternativas).toHaveLength(2);
  });

  it('caminho de erro: QuestaoEnemCreator rejeita enunciado vazio', () => {
    expect(() => new QuestaoEnemCreator().criarQuestao('   ')).toThrow(
      EntradaInvalidaError,
    );
  });

  it('caminho de erro: QuestaoFuvestCreator rejeita enunciado vazio', () => {
    expect(() => new QuestaoFuvestCreator().criarQuestao('')).toThrow(
      EntradaInvalidaError,
    );
  });

  it('caminho de erro: QuestaoUnbCreator rejeita enunciado vazio', () => {
    expect(() => new QuestaoUnbCreator().criarQuestao('  ')).toThrow(
      EntradaInvalidaError,
    );
  });

  it('cada banca gera id diferente para o mesmo enunciado', () => {
    const texto = 'Questao de teste';
    const enem   = new QuestaoEnemCreator().criarQuestao(texto);
    const fuvest = new QuestaoFuvestCreator().criarQuestao(texto);
    const unb    = new QuestaoUnbCreator().criarQuestao(texto);
    expect(enem.id).not.toBe(fuvest.id);
    expect(enem.id).not.toBe(unb.id);
    expect(fuvest.id).not.toBe(unb.id);
  });
});

describe('F1 Factory Method — Ana Elisa: instanceof dos produtos', () => {
  it('InimigoMatematicaCreator.spawn retorna produto com materia matematica', () => {
    const inimigo = new InimigoMatematicaCreator().spawn(0);
    expect(inimigo.materia).toBe('matematica');
  });

  it('InimigoHistoriaCreator.spawn retorna produto com materia historia', () => {
    const inimigo = new InimigoHistoriaCreator().spawn(0);
    expect(inimigo.materia).toBe('historia');
  });

  it('InimigoBiologiaCreator.spawn retorna produto com materia biologia', () => {
    const inimigo = new InimigoBiologiaCreator().spawn(0);
    expect(inimigo.materia).toBe('biologia');
  });

  it('cada Creator produz inimigo com HP positivo na onda 0', () => {
    expect(new InimigoMatematicaCreator().spawn(0).hp).toBeGreaterThan(0);
    expect(new InimigoHistoriaCreator().spawn(0).hp).toBeGreaterThan(0);
    expect(new InimigoBiologiaCreator().spawn(0).hp).toBeGreaterThan(0);
  });

  it('HP escala com a onda em todas as materias', () => {
    const mat = new InimigoMatematicaCreator();
    const his = new InimigoHistoriaCreator();
    const bio = new InimigoBiologiaCreator();
    expect(mat.spawn(1).hp).toBeGreaterThan(mat.spawn(0).hp);
    expect(his.spawn(1).hp).toBeGreaterThan(his.spawn(0).hp);
    expect(bio.spawn(1).hp).toBeGreaterThan(bio.spawn(0).hp);
  });
});
