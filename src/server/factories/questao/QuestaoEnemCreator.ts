import { QuestaoCreator } from './QuestaoCreator.js';
import type { Questao } from './Questao.js';
import { NotImplementedError } from '../../../shared/index.js';

/** ConcreteCreator (F1). TODO(@JoaoCarlosLobo): formato/parser da banca Enem. */
export class QuestaoEnemCreator extends QuestaoCreator {
  protected override factoryMethod(textoBase: string): Questao {
    void textoBase;
    throw new NotImplementedError('F1 QuestaoEnemCreator.factoryMethod');
  }
}
