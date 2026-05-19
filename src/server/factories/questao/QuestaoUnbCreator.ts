import { QuestaoCreator } from './QuestaoCreator.js';
import type { Questao } from './Questao.js';

/** ConcreteCreator (F1) — formato/normalização da banca UNB. */
export class QuestaoUnbCreator extends QuestaoCreator {
  protected override factoryMethod(textoBase: string): Questao {
    return {
      id: `UNB-${textoBase.trim().length}`,
      enunciado: textoBase.trim(),
      banca: 'UNB',
      dificuldade: 'medio',
      alternativas: ['Certo', 'Errado'],
    };
  }
}
