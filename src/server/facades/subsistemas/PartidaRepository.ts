/** Subsystem (F2) — persistência mock (array em memória). */
export interface RegistroPartida {
  readonly userId: string;
  readonly acertos: number;
  readonly moedas: number;
  readonly desbloqueios: ReadonlyArray<string>;
  readonly criadoEm: Date;
}

export class PartidaRepository {
  private readonly registros: RegistroPartida[] = [];

  async salvar(registro: RegistroPartida): Promise<void> {
    this.registros.push(registro);
    return Promise.resolve();
  }

  listar(): ReadonlyArray<RegistroPartida> {
    return this.registros;
  }
}
