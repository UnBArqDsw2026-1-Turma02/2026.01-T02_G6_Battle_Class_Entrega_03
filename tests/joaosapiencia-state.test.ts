import { describe, expect, it } from 'vitest';
import { EstadoInvalidoError } from '../src/shared/index.js';
import { SessaoQuiz, SessaoTD } from '../src/state/index.js';

describe('F3 State — JoaoSapiencia extras', () => {
  it('onErro nao credita e volta para ExibindoPergunta', () => {
    const quiz = new SessaoQuiz(undefined, 2);
    quiz.avancar();
    quiz.errar();

    expect(quiz.estadoAtual).toBe('ExibindoPergunta');
    expect(quiz.carteira.obterSaldo()).toBe(0);
  });

  it('tick em AguardandoInicio e invalido', () => {
    const td = new SessaoTD();
    expect(() => td.tick(1)).toThrow(EstadoInvalidoError);
  });
});
