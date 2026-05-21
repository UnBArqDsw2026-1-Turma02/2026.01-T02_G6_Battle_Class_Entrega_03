import { SaldoInsuficienteError, EntradaInvalidaError } from '../shared/index.js';

export type TipoMovimentoCarteira = 'CREDITO' | 'DEBITO';

export interface MovimentoCarteira {
  readonly tipo: TipoMovimentoCarteira;
  readonly valor: number;
  readonly saldoAposMovimento: number;
  readonly criadoEm: Date;
}

/** Dependência compartilhada — ÚNICO acoplamento Quiz↔TD (ver §1 do plano). */
export class Carteira {
  private saldo = 0;
  private readonly movimentos: MovimentoCarteira[] = [];

  obterSaldo(): number {
    return this.saldo;
  }

  listarMovimentos(): ReadonlyArray<MovimentoCarteira> {
    return this.movimentos;
  }

  creditar(valor: number): void {
    if (valor < 0) throw new EntradaInvalidaError('crédito negativo');

    this.saldo += valor;
    this.registrarMovimento('CREDITO', valor);
  }

  debitar(valor: number): void {
    if (valor < 0) throw new EntradaInvalidaError('débito negativo');
    if (valor > this.saldo) throw new SaldoInsuficienteError(this.saldo, valor);

    this.saldo -= valor;
    this.registrarMovimento('DEBITO', valor);
  }

  private registrarMovimento(tipo: TipoMovimentoCarteira, valor: number): void {
    this.movimentos.push({
      tipo,
      valor,
      saldoAposMovimento: this.saldo,
      criadoEm: new Date(),
    });
  }
}