import { Torre } from './Torre.js';

/** ConcreteProduct (F1). */
export class TorreComum extends Torre {
  constructor(
    override readonly custo = 50,
    override readonly dano = 10,
    override readonly alcance = 3,
  ) {
    super();
  }

  override atirar(alvo: string): string {
    return `TorreComum atira em ${alvo} (dano=${this.dano})`;
  }

  override comCusto(custo: number): TorreComum {
    return new TorreComum(custo, this.dano, this.alcance);
  }
}
