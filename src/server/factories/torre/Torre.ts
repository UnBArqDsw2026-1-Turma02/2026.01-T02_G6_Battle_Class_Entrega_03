/** Product abstrato (F1) — Diagrama de Classes E02: Torre. */
export abstract class Torre {
  abstract readonly custo: number;
  abstract readonly dano: number;
  abstract readonly alcance: number;
  abstract atirar(alvo: string): string;

  abstract comCusto(custo: number): Torre;

  calcularDano(): number {
    return this.dano;
  }
}
