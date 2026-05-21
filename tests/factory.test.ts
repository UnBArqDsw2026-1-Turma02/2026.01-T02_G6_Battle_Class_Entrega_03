import { describe, it, expect } from 'vitest';
import {
  InimigoMatematicaCreator,
  InimigoMatematicaTanqueCreator,
  InimigoMatematicaPadraoCreator,
  InimigoMatematicaRapidoCreator,
  InimigoBiologiaCreator,
  InimigoBiologiaTanqueCreator,
  InimigoBiologiaPadraoCreator,
  InimigoBiologiaRapidoCreator,
  InimigoHistoriaCreator,
  InimigoHistoriaTanqueCreator,
  InimigoHistoriaPadraoCreator,
  InimigoHistoriaRapidoCreator,
  QuestaoFuvestCreator,
  TorreEspecialCreator,
} from '../src/server/factories/index.js';
import { EntradaInvalidaError } from '../src/shared/index.js';

describe('F1 Factory Method', () => {
  // --- testes existentes ---
  it('caminho feliz: spawn escala HP pela onda', () => {
    const c = new InimigoMatematicaCreator();
    expect(c.spawn(0).hp).toBe(100);
    expect(c.spawn(2).hp).toBe(130);
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

  it('caminho feliz: TorreEspecialCreator aplica bônus por nível', () => {
    const t = new TorreEspecialCreator().construir(2);
    expect(t.calcularDano()).toBe(41);
    expect(t.custo).toBe(160);
  });

  it('caminho de erro: TorreEspecialCreator rejeita nível negativo', () => {
    expect(() => new TorreEspecialCreator().construir(-1)).toThrow(
      EntradaInvalidaError,
    );
  });

  it('caminho de erro: textoBase vazio', () => {
    expect(() => new QuestaoFuvestCreator().criarQuestao('  ')).toThrow(
      EntradaInvalidaError,
    );
  });

  it('caminho feliz: Biologia escala HP pela onda', () => {
    const c = new InimigoBiologiaCreator();
    expect(c.spawn(0).hp).toBe(120);
    expect(c.spawn(2).hp).toBe(156);
  });

  it('caminho feliz: Historia escala HP pela onda', () => {
    const c = new InimigoHistoriaCreator();
    expect(c.spawn(0).hp).toBe(140);
    expect(c.spawn(2).hp).toBe(182);
  });

  // --- família Matemática ---
  it('caminho feliz: MatematicaTanque escala HP pela onda', () => {
    const c = new InimigoMatematicaTanqueCreator();
    expect(c.spawn(0).hp).toBe(300);
    expect(c.spawn(2).hp).toBe(390); // Math.round(300 * 1.30)
  });

  it('caminho feliz: MatematicaPadrao escala HP pela onda', () => {
    const c = new InimigoMatematicaPadraoCreator();
    expect(c.spawn(0).hp).toBe(130);
    expect(c.spawn(2).hp).toBe(169); // Math.round(130 * 1.30)
  });

  it('caminho feliz: MatematicaRapido escala HP pela onda', () => {
    const c = new InimigoMatematicaRapidoCreator();
    expect(c.spawn(0).hp).toBe(50);
    expect(c.spawn(2).hp).toBe(65); // Math.round(50 * 1.30)
  });

  // --- família Biologia ---
  it('caminho feliz: BiologiaTanque escala HP pela onda', () => {
    const c = new InimigoBiologiaTanqueCreator();
    expect(c.spawn(0).hp).toBe(280);
    expect(c.spawn(2).hp).toBe(364); // Math.round(280 * 1.30)
  });

  it('caminho feliz: BiologiaPadrao escala HP pela onda', () => {
    const c = new InimigoBiologiaPadraoCreator();
    expect(c.spawn(0).hp).toBe(150);
    expect(c.spawn(2).hp).toBe(195); // Math.round(150 * 1.30)
  });

  it('caminho feliz: BiologiaRapido escala HP pela onda', () => {
    const c = new InimigoBiologiaRapidoCreator();
    expect(c.spawn(0).hp).toBe(60);
    expect(c.spawn(2).hp).toBe(78); // Math.round(60 * 1.30)
  });

  // --- família História ---
  it('caminho feliz: HistoriaTanque escala HP pela onda', () => {
    const c = new InimigoHistoriaTanqueCreator();
    expect(c.spawn(0).hp).toBe(320);
    expect(c.spawn(2).hp).toBe(416); // Math.round(320 * 1.30)
  });

  it('caminho feliz: HistoriaPadrao escala HP pela onda', () => {
    const c = new InimigoHistoriaPadraoCreator();
    expect(c.spawn(0).hp).toBe(170);
    expect(c.spawn(2).hp).toBe(221); // Math.round(170 * 1.30)
  });

  it('caminho feliz: HistoriaRapido escala HP pela onda', () => {
    const c = new InimigoHistoriaRapidoCreator();
    expect(c.spawn(0).hp).toBe(70);
    expect(c.spawn(2).hp).toBe(91); // Math.round(70 * 1.30)
  });
});
