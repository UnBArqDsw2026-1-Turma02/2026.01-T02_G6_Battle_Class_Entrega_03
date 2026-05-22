import { describe, expect, it } from 'vitest';
import { EstadoInvalidoError, SaldoInsuficienteError } from '../src/shared/index.js';
import { SessaoQuiz, SessaoTD } from '../src/state/index.js';

describe('F3 State — Ana Elisa: SessaoQuiz', () => {
  it('estado inicial e ExibindoPergunta antes de avancar', () => {
    const quiz = new SessaoQuiz();
    expect(quiz.estadoAtual).toBe('ExibindoPergunta');
  });

  it('avancar muda estado para AguardandoResposta', () => {
    const quiz = new SessaoQuiz();
    quiz.avancar();
    expect(quiz.estadoAtual).toBe('AguardandoResposta');
  });

  it('acerto apos avancar credita saldo e volta para ExibindoPergunta', () => {
    const quiz = new SessaoQuiz(undefined, 2);
    quiz.avancar();
    quiz.acertar();
    expect(quiz.carteira.obterSaldo()).toBeGreaterThan(0);
    expect(quiz.estadoAtual).toBe('ExibindoPergunta');
  });

  it('erro apos avancar nao credita saldo', () => {
    const quiz = new SessaoQuiz(undefined, 2);
    quiz.avancar();
    quiz.errar();
    expect(quiz.carteira.obterSaldo()).toBe(0);
  });

  it('erro volta para ExibindoPergunta', () => {
    const quiz = new SessaoQuiz(undefined, 2);
    quiz.avancar();
    quiz.errar();
    expect(quiz.estadoAtual).toBe('ExibindoPergunta');
  });

  it('caminho de erro: acertar antes de avancar lanca EstadoInvalidoError', () => {
    expect(() => new SessaoQuiz().acertar()).toThrow(EstadoInvalidoError);
  });

  it('caminho de erro: errar antes de avancar lanca EstadoInvalidoError', () => {
    expect(() => new SessaoQuiz().errar()).toThrow(EstadoInvalidoError);
  });

  it('quiz com 1 pergunta encerra apos acerto', () => {
    const quiz = new SessaoQuiz(undefined, 1);
    quiz.avancar();
    quiz.acertar();
    expect(quiz.estadoAtual).toBe('QuizEncerrado');
  });

  it('caminho de erro: avancar apos QuizEncerrado lanca EstadoInvalidoError', () => {
    const quiz = new SessaoQuiz(undefined, 1);
    quiz.avancar();
    quiz.acertar();
    expect(() => quiz.avancar()).toThrow(EstadoInvalidoError);
  });
});

describe('F3 State — Ana Elisa: SessaoTD', () => {
  it('estado inicial e AguardandoInicio', () => {
    const td = new SessaoTD();
    expect(td.estadoAtual).toBe('AguardandoInicio');
  });

  it('iniciar muda para ComprandoTorres', () => {
    const td = new SessaoTD();
    td.iniciar();
    expect(td.estadoAtual).toBe('ComprandoTorres');
  });

  it('pronto apos comprar muda para EmBatalha', () => {
    const td = new SessaoTD(undefined, 2);
    td.iniciar();
    td.pronto();
    expect(td.estadoAtual).toBe('EmBatalha');
  });

  it('comprar debita da carteira corretamente', () => {
    const td = new SessaoTD();
    td.carteira.creditar(100);
    td.iniciar();
    td.comprar(40);
    expect(td.carteira.obterSaldo()).toBe(60);
  });

  it('caminho de erro: comprar sem saldo lanca SaldoInsuficienteError', () => {
    const td = new SessaoTD();
    td.iniciar();
    expect(() => td.comprar(10)).toThrow(SaldoInsuficienteError);
  });

  it('caminho de erro: iniciar em estado terminal Vitoria lanca EstadoInvalidoError', () => {
    const td = new SessaoTD(undefined, 1);
    td.iniciar();
    td.pronto();
    td.tick(1);
    expect(() => td.iniciar()).toThrow(EstadoInvalidoError);
  });

  it('caminho de erro: comprar em estado terminal Derrota lanca EstadoInvalidoError', () => {
    const td = new SessaoTD(undefined, 1, 0);
    td.iniciar();
    td.pronto();
    td.tick(1);
    expect(() => td.comprar(1)).toThrow(EstadoInvalidoError);
  });

  it('caminho de erro: tick antes de iniciar lanca EstadoInvalidoError', () => {
    const td = new SessaoTD();
    expect(() => td.tick(1)).toThrow(EstadoInvalidoError);
  });
});
