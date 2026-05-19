import { NotImplementedError } from '../../../shared/index.js';

/** Subsystem (F2) — ~SistemaEconomia. */
export class EconomiaService {
  calcularRecompensa(acertos: number): number {
    void acertos;
    throw new NotImplementedError('F2 EconomiaService.calcularRecompensa');
  }
  creditar(userId: string, moedas: number): void {
    void userId; void moedas;
    throw new NotImplementedError('F2 EconomiaService.creditar');
  }
}
