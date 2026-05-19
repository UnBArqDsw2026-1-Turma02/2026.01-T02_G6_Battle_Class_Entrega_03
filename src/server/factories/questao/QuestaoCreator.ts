import type { Questao } from './Questao.js';
import { NotImplementedError } from '../../../shared/index.js';

/** Creator abstrato (F1). */
export abstract class QuestaoCreator {
  protected abstract factoryMethod(textoBase: string): Questao;

  criarQuestao(textoBase: string): Questao {
    void textoBase; // TODO(@JoaoCarlosLobo): parsing/normalização por banca.
    throw new NotImplementedError('F1 QuestaoCreator.criarQuestao');
  }
}
