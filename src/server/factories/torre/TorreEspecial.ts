import { Torre } from './Torre.js';

/** ConcreteProduct (F1) — possui habilidade extra. */
export class TorreEspecial extends Torre {
  override readonly custo = 120;
  override readonly dano = 25;
  override atirar(alvo: string): string {
    return `TorreEspecial atira em ${alvo} (dano=${this.dano})`;
  }
  ativarHabilidade(): string {
    return 'TorreEspecial: habilidade ativada (dano dobrado nesta onda)';
  }
}
