import { Torre } from './Torre.js';
import { EntradaInvalidaError } from '../../../shared/index.js';

/** ConcreteProduct (F1) — possui habilidade extra. */
export class TorreEspecial extends Torre {
  constructor(
    private readonly nivelUpgrade = 0,
    override readonly custo = 120 + nivelUpgrade * 20,
    override readonly dano = 25 + nivelUpgrade * 8,
    override readonly alcance = 5,
  ) {
    super();
    if (!Number.isInteger(nivelUpgrade) || nivelUpgrade < 0) {
      throw new EntradaInvalidaError('nivelUpgrade deve ser inteiro >= 0');
    }
  }

  override atirar(alvo: string): string {
    return `TorreEspecial atira em ${alvo} (dano=${this.dano})`;
  }
  ativarHabilidade(): string {
    return 'TorreEspecial: habilidade ativada (dano dobrado nesta onda)';
  }

  override comCusto(custo: number): TorreEspecial {
    return new TorreEspecial(
      this.nivelUpgrade,
      custo,
      this.dano,
      this.alcance,
    );
  }
}
