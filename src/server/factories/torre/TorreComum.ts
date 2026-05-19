import { Torre } from './Torre.js';
import { NotImplementedError } from '../../../shared/index.js';

/** ConcreteProduct (F1). TODO(@ThiagoTonin): custo/dano e atirar(). */
export class TorreComum extends Torre {
  override readonly custo: number = 0;
  override readonly dano: number = 0;
  override atirar(alvo: string): void {
    void alvo;
    throw new NotImplementedError('F1 TorreComum.atirar');
  }
}
