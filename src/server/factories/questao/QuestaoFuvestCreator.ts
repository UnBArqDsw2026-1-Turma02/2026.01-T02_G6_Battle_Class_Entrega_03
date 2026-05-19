import { QuestaoCreator } from './QuestaoCreator.js';
import type { Questao } from './Questao.js';

/** ConcreteCreator (F1) — formato/normalização da banca FUVEST. */
export class QuestaoFuvestCreator extends QuestaoCreator {
  protected override factoryMethod(textoBase: string): Questao {
    return {
      id: `FUVEST-${textoBase.trim().length}`,
      enunciado: textoBase.trim(),
      banca: 'FUVEST',
      dificuldade: 'dificil',
      alternativas: ['A', 'B', 'C', 'D', 'E'],
    };
  }
}
