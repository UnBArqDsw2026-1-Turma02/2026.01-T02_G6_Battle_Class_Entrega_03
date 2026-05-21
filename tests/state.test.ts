import { describe, it, expect } from 'vitest';
import { SessaoQuiz, SessaoTD } from '../src/state/index.js';
import { EstadoInvalidoError, SaldoInsuficienteError } from '../src/shared/index.js';

describe('F3 State — SessaoQuiz', () => {
  it('caminho feliz: acerto credita e encerra após N perguntas', () => {
    const q = new SessaoQuiz(undefined, 2);
    q.avancar();
    q.acertar();
    q.avancar();
    q.acertar();
    expect(q.estadoAtual).toBe('QuizEncerrado');
    expect(q.carteira.obterSaldo()).toBe(20);
  });

  it('caminho de erro: responder antes de exibir é inválido', () => {
    expect(() => new SessaoQuiz().acertar()).toThrow(EstadoInvalidoError);
  });
});

describe('F3 State — SessaoTD', () => {
  it('caminho feliz: iniciar→comprar→ticks levam à Vitória', () => {
    const td = new SessaoTD(undefined, 2);
    td.carteira.creditar(20);
    td.iniciar();
    td.comprar(10);
    td.tick(1);
    td.comprar(10);
    td.tick(1);
    expect(td.estadoAtual).toBe('Vitoria');
  });

  it('caminho de erro: ação em estado terminal', () => {
    const td = new SessaoTD(undefined, 1);
    td.carteira.creditar(10);
    td.iniciar();
    td.comprar(10);
    td.tick(1); // -> Vitoria
    expect(() => td.tick(1)).toThrow(EstadoInvalidoError);
  });

  it('caminho de erro: compra acima do saldo da Carteira', () => {
    const td = new SessaoTD();
    td.iniciar();
    expect(() => td.comprar(5)).toThrow(SaldoInsuficienteError);
  });
});
