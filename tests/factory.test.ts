import { describe, it, expect } from 'vitest';
import {
  InimigoMatematicaCreator,
  QuestaoFuvestCreator,
  TorreEspecialCreator,
} from '../src/server/factories/index.js';
import { EntradaInvalidaError } from '../src/shared/index.js';

describe('F1 Factory Method', () => {
  it('caminho feliz: spawn escala HP pela onda', () => {
    const c = new InimigoMatematicaCreator();
    expect(c.spawn(0).hp).toBe(100);
    expect(c.spawn(2).hp).toBe(130); // 100 * (1 + 2*0.15)
  });

  it('caminho feliz: banca define formato da questão', () => {
    const q = new QuestaoFuvestCreator().criarQuestao('enunciado');
    expect(q.banca).toBe('FUVEST');
    expect(q.dificuldade).toBe('dificil');
    expect(q.alternativas).toHaveLength(5);
  });

  it('caminho feliz: TorreEspecial tem habilidade', () => {
    const t = new TorreEspecialCreator().construir();
    expect(t.calcularDano()).toBe(25);
  });

  it('caminho de erro: textoBase vazio', () => {
    expect(() => new QuestaoFuvestCreator().criarQuestao('  ')).toThrow(
      EntradaInvalidaError,
    );
  });
});
