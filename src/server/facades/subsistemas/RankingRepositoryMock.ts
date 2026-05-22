export interface EntradaRanking {
  readonly userId: string;
  readonly moedasQuestao: number;
  readonly atualizadoEm: string;
}

/** Subsystem mock (F2) — cache opcional de snapshots de ranking. */
export class RankingRepositoryMock {
  private ultimoSnapshot: ReadonlyArray<EntradaRanking> = [];

  salvarSnapshot(entradas: ReadonlyArray<EntradaRanking>): void {
    this.ultimoSnapshot = entradas;
  }

  obterUltimoSnapshot(): ReadonlyArray<EntradaRanking> {
    return this.ultimoSnapshot;
  }
}
