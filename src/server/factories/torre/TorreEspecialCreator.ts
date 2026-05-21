import { EntradaInvalidaError } from '../../../shared/index.js';
import { TorreCreator } from './TorreCreator.js';
import { TorreEspecial } from './TorreEspecial.js';

/** ConcreteCreator (F1) — permite upgrade por nível. */
export class TorreEspecialCreator extends TorreCreator {
  protected override factoryMethod(): TorreEspecial {
    return new TorreEspecial();
  }

  construir(nivelUpgrade = 0): TorreEspecial {
    if (!Number.isInteger(nivelUpgrade) || nivelUpgrade < 0) {
      throw new EntradaInvalidaError('nivelUpgrade deve ser inteiro >= 0');
    }
    return new TorreEspecial(nivelUpgrade);
  }
}
