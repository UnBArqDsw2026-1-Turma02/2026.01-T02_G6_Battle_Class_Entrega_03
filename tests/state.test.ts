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
  it('caminho feliz: iniciar→pronto→ticks levam à Vitória', () => {
    const td = new SessaoTD(undefined, 2);
    td.iniciar();
    td.pronto();
    td.tick(1);
    td.tick(1);
    expect(td.estadoAtual).toBe('Vitoria');
  });

  it('caminho de erro: ação em estado terminal', () => {
    const td = new SessaoTD(undefined, 1);
    td.iniciar();
    td.pronto();
    td.tick(1); // -> Vitoria
    expect(() => td.tick(1)).toThrow(EstadoInvalidoError);
  });

  it('caminho de erro: Carteira debita acima do saldo', () => {
    const td = new SessaoTD();
    expect(() => td.carteira.debitar(5)).toThrow(SaldoInsuficienteError);
  });
});
