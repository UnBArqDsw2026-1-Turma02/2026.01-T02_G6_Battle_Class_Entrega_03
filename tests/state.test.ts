import { describe, it, expect } from 'vitest';
import { SessaoQuiz, SessaoTD } from '../src/state/index.js';
import { EstadoInvalidoError, SaldoInsuficienteError } from '../src/shared/index.js';

describe('F3 State - SessaoQuiz', () => {
  it('caminho feliz: acerto credita e encerra apos N perguntas', () => {
    const q = new SessaoQuiz(undefined, 2);
    q.avancar();
    q.acertar();
    q.avancar();
    q.acertar();
    expect(q.estadoAtual).toBe('QuizEncerrado');
    expect(q.carteira.obterSaldo()).toBe(20);
  });

  it('caminho de erro: responder antes de exibir e invalido', () => {
    expect(() => new SessaoQuiz().acertar()).toThrow(EstadoInvalidoError);
  });
});

describe('F3 State - SessaoTD', () => {
  it('caminho feliz: iniciar, comprar, pronto e ticks levam a Vitoria', () => {
    const td = new SessaoTD(undefined, 2);
    td.carteira.creditar(100);
    td.iniciar();
    td.comprar(40);
    expect(td.carteira.obterSaldo()).toBe(60);
    td.pronto();
    td.tick(1);
    td.tick(1);
    expect(td.estadoAtual).toBe('Vitoria');
  });

  it('caminho feliz: castelo destruido leva a Derrota', () => {
    const td = new SessaoTD(undefined, 2, 0);
    td.iniciar();
    td.pronto();
    td.tick(1);
    expect(td.estadoAtual).toBe('Derrota');
  });

  it('caminho de erro: acao em estado terminal Vitoria', () => {
    const td = new SessaoTD(undefined, 1);
    td.iniciar();
    td.pronto();
    td.tick(1);
    expect(() => td.tick(1)).toThrow(EstadoInvalidoError);
    expect(() => td.comprar(1)).toThrow(EstadoInvalidoError);
  });

  it('caminho de erro: acao em estado terminal Derrota', () => {
    const td = new SessaoTD(undefined, 1, 0);
    td.iniciar();
    td.pronto();
    td.tick(1);
    expect(() => td.iniciar()).toThrow(EstadoInvalidoError);
    expect(() => td.pronto()).toThrow(EstadoInvalidoError);
  });

  it('caminho de erro: Carteira debita acima do saldo', () => {
    const td = new SessaoTD();
    expect(() => td.carteira.debitar(5)).toThrow(SaldoInsuficienteError);
  });
});
