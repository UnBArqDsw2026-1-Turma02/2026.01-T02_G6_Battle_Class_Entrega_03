/** Subsystem (F2) — libera recursos conforme desempenho. */
export class TowerDefenseService {
  liberarRecursos(userId: string, acertos: number): string[] {
    void userId;
    const recursos: string[] = [];
    if (acertos >= 1) recursos.push('torre-comum');
    if (acertos >= 3) recursos.push('torre-especial');
    return recursos;
  }
}
