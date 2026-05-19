import type { Questao } from './Questao.js';
import { EntradaInvalidaError } from '../../../shared/index.js';

/** Creator abstrato (F1). Valida e delega o parsing por banca. */
export abstract class QuestaoCreator {
  protected abstract factoryMethod(textoBase: string): Questao;

  criarQuestao(textoBase: string): Questao {
    if (textoBase.trim().length === 0) {
      throw new EntradaInvalidaError('textoBase vazio');
    }
    return this.factoryMethod(textoBase);
  }
}
