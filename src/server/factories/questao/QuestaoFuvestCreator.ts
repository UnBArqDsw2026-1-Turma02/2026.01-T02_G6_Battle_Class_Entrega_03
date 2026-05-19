import { QuestaoCreator } from './QuestaoCreator.js';
import type { Questao } from './Questao.js';
import { NotImplementedError } from '../../../shared/index.js';

/** ConcreteCreator (F1). TODO(@JoaoCarlosLobo): formato/parser da banca Fuvest. */
export class QuestaoFuvestCreator extends QuestaoCreator {
  protected override factoryMethod(textoBase: string): Questao {
    void textoBase;
    throw new NotImplementedError('F1 QuestaoFuvestCreator.factoryMethod');
  }
}
