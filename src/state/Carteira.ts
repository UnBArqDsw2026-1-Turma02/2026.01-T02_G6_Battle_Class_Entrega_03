import { SaldoInsuficienteError, EntradaInvalidaError } from '../shared/index.js';

/** Dependência compartilhada — ÚNICO acoplamento Quiz↔TD (ver §1 do plano). */
export class Carteira {
  private saldo = 0;

  obterSaldo(): number {
    return this.saldo;
  }

  creditar(valor: number): void {
    if (valor < 0) throw new EntradaInvalidaError('crédito negativo');
    this.saldo += valor;
  }

  debitar(valor: number): void {
    if (valor < 0) throw new EntradaInvalidaError('débito negativo');
    if (valor > this.saldo) throw new SaldoInsuficienteError(this.saldo, valor);
    this.saldo -= valor;
  }
}
