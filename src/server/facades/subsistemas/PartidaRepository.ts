/** Subsystem (F2) — persistência mock (array em memória). */
export interface RegistroPartida {
  readonly userId: string;
  readonly moedas: number;
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
