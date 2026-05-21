import { Torre } from './Torre.js';
import { EntradaInvalidaError } from '../../../shared/index.js';

/** ConcreteProduct (F1) — possui habilidade extra. */
export class TorreEspecial extends Torre {
  override readonly custo: number;
  override readonly dano: number;

  constructor(nivelUpgrade = 0) {
    super();
    if (!Number.isInteger(nivelUpgrade) || nivelUpgrade < 0) {
      throw new EntradaInvalidaError('nivelUpgrade deve ser inteiro >= 0');
    }
    this.custo = 120 + nivelUpgrade * 20;
    this.dano = 25 + nivelUpgrade * 8;
  }

  override atirar(alvo: string): string {
    return `TorreEspecial atira em ${alvo} (dano=${this.dano})`;
  }
  ativarHabilidade(): string {
    return 'TorreEspecial: habilidade ativada (dano dobrado nesta onda)';
  }
}
