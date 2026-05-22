/**
 * Subsystem (F2) — lê flags/parâmetros de ambiente.
 *
 * Compartilhado entre Facades (ex.: AuthFacade e RankingFacade). Cada Facade
 * recebe a MESMA instância por injeção, sem que uma conheça a outra — é assim
 * que o subsistema é reaproveitado sem cair em "Facade chamando Facade".
 *
 * A fonte (`env`) é injetável para permitir testes determinísticos sem mexer
 * em `process.env`.
 */
export class ConfigService {
  private static readonly VERDADEIROS = new Set(['1', 'true', 'on', 'yes', 'sim']);

  constructor(
    private readonly env: Record<string, string | undefined> = process.env,
  ) {}

  /** Lê uma flag booleana; ausente → `padrao`. */
  flag(nome: string, padrao = false): boolean {
    const valor = this.env[nome];
    if (valor === undefined) return padrao;
    return ConfigService.VERDADEIROS.has(valor.trim().toLowerCase());
  }

  /** Lê um valor de texto; ausente → `padrao`. */
  valor(nome: string, padrao = ''): string {
    return this.env[nome] ?? padrao;
  }

  /** Lê um inteiro; ausente/ inválido → `padrao`. */
  numero(nome: string, padrao = 0): number {
    const bruto = this.env[nome];
    if (bruto === undefined) return padrao;
    const n = Number.parseInt(bruto, 10);
    return Number.isNaN(n) ? padrao : n;
  }
}
