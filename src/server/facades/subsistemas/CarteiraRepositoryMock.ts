/** Subsystem mock (F2) — moedas obtidas em questões (não inclui TD). */
export class CarteiraRepositoryMock {
  private readonly moedasQuestao = new Map<string, number>([
    ['u1', 80],
    ['u2', 120],
    ['u3', 45],
    ['user-1', 30],
  ]);

  obterMoedasQuestao(userId: string): number {
    return this.moedasQuestao.get(userId) ?? 0;
  }

  creditarQuestao(userId: string, valor: number): void {
    this.moedasQuestao.set(
      userId,
      (this.moedasQuestao.get(userId) ?? 0) + valor,
    );
  }

  listarOrdenadoPorMoedasQuestao(): ReadonlyArray<{
    readonly userId: string;
    readonly moedas: number;
  }> {
    return [...this.moedasQuestao.entries()]
      .map(([userId, moedas]) => ({ userId, moedas }))
      .sort((a, b) => b.moedas - a.moedas);
  }
}
