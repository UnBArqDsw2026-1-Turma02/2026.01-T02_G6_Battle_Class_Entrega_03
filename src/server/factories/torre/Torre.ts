/** Product abstrato (F1) — Diagrama de Classes E02: Torre. */
export abstract class Torre {
  abstract readonly custo: number;
  abstract readonly dano: number;
  abstract atirar(alvo: string): string;

  calcularDano(): number {
    return this.dano;
  }
}
