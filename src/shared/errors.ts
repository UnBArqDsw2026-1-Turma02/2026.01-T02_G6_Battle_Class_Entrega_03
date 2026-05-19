// Erros comuns compartilhados pelos três padrões (F1/F2/F3).
// `NotImplementedError` é lançado por TODOS os stubs do esqueleto: enquanto
// um slot não for preenchido pelo membro responsável (ver §4 do plano), o
// método sinaliza claramente que ainda não foi implementado.

/** Classe base para erros de domínio do Battle Class. */
export abstract class BattleClassError extends Error {
  constructor(message: string) {
    super(message);
    this.name = new.target.name;
  }
}

/**
 * Lançado pelos stubs do scaffold. O membro responsável remove o `throw`
 * ao implementar o slot. Inclui a referência do slot para rastreabilidade.
 */
export class NotImplementedError extends BattleClassError {
  constructor(slot: string) {
    super(`Slot "${slot}" ainda não implementado — ver plans/00_scaffold_e_gofs.md §4`);
  }
}

/** F1 — matéria/tema sem Creator registrado (caminho de erro do Factory). */
export class MateriaInexistenteError extends BattleClassError {
  constructor(materia: string) {
    super(`Nenhum Creator registrado para a matéria "${materia}"`);
  }
}

/** F2/F3 — débito acima do saldo da Carteira (caminho de erro). */
export class SaldoInsuficienteError extends BattleClassError {
  constructor(saldo: number, debito: number) {
    super(`Saldo insuficiente: saldo=${saldo}, débito solicitado=${debito}`);
  }
}

/** Entrada inválida em qualquer camada (ex.: lista de respostas vazia). */
export class EntradaInvalidaError extends BattleClassError {
  constructor(detalhe: string) {
    super(`Entrada inválida: ${detalhe}`);
  }
}

/** F3 — transição inválida ou ação sobre estado terminal. */
export class EstadoInvalidoError extends BattleClassError {
  constructor(estado: string, acao: string) {
    super(`Ação "${acao}" inválida no estado "${estado}"`);
  }
}
