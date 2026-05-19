import { Torre } from './Torre.js';
import { NotImplementedError } from '../../../shared/index.js';

/** ConcreteProduct (F1). TODO(@ThiagoTonin): custo/dano, atirar() e habilidade. */
export class TorreEspecial extends Torre {
  override readonly custo: number = 0;
  override readonly dano: number = 0;
  override atirar(alvo: string): void {
    void alvo;
    throw new NotImplementedError('F1 TorreEspecial.atirar');
  }
  ativarHabilidade(): void {
    throw new NotImplementedError('F1 TorreEspecial.ativarHabilidade');
  }
}
