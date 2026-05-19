/** Subsystem (F2) — saldo em memória (mock Supabase). */
export class EconomiaService {
  private readonly saldos = new Map<string, number>();

  calcularRecompensa(acertos: number): number {
    return acertos * 10;
  }

  creditar(userId: string, moedas: number): void {
    this.saldos.set(userId, (this.saldos.get(userId) ?? 0) + moedas);
  }

  obterSaldo(userId: string): number {
    return this.saldos.get(userId) ?? 0;
  }
}
