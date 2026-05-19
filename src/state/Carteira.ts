import { NotImplementedError } from '../shared/index.js';

/** Dependência compartilhada — ÚNICO acoplamento Quiz↔TD (ver §1 do plano). */
export class Carteira {
  obterSaldo(): number {
    throw new NotImplementedError('F3 Carteira.obterSaldo');
  }
  creditar(valor: number): void {
    void valor;
    throw new NotImplementedError('F3 Carteira.creditar');
  }
  debitar(valor: number): void {
    void valor;
    throw new NotImplementedError('F3 Carteira.debitar');
  }
}
