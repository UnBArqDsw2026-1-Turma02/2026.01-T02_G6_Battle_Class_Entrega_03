import { Torre } from './Torre.js';

/** ConcreteProduct (F1). */
export class TorreComum extends Torre {
  override readonly custo = 50;
  override readonly dano = 10;
  override atirar(alvo: string): string {
    return `TorreComum atira em ${alvo} (dano=${this.dano})`;
  }
}
