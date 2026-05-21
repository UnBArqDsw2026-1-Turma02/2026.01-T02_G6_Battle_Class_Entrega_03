import { EntradaInvalidaError } from '../../../shared/index.js';
import type { Torre } from './Torre.js';

/** Creator abstrato (F1). */
export abstract class TorreCreator {
  protected abstract factoryMethod(): Torre;

  construir(onda: number): Torre {
    if (!Number.isInteger(onda) || onda < 0) {
      throw new EntradaInvalidaError('onda deve ser inteiro >= 0');
    }

    const torre = this.factoryMethod();
    const custoAjustado = this.calcularCustoPorOnda(torre.custo, onda);

    return torre.comCusto(custoAjustado);
  }

  protected calcularCustoPorOnda(custoBase: number, onda: number): number {
    return Math.round(custoBase * (1 + onda * 0.1));
  }
}
