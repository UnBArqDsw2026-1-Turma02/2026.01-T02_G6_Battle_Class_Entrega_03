import { QuestaoCreator } from './QuestaoCreator.js';
import type { Questao } from './Questao.js';

/** ConcreteCreator (F1) — formato/normalização da banca ENEM. */
export class QuestaoEnemCreator extends QuestaoCreator {
  protected override factoryMethod(textoBase: string): Questao {
    return {
      id: `ENEM-${textoBase.trim().length}`,
      enunciado: textoBase.trim(),
      banca: 'ENEM',
      dificuldade: 'medio',
      alternativas: ['A', 'B', 'C', 'D', 'E'],
    };
  }
}
