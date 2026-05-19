import { NotImplementedError } from '../../../shared/index.js';

export interface RegistroPartida {
  readonly userId: string;
  readonly moedas: number;
}

/** Subsystem (F2) — mock Supabase (sem rede no scaffold). */
export class PartidaRepository {
  salvar(registro: RegistroPartida): Promise<void> {
    void registro;
    throw new NotImplementedError('F2 PartidaRepository.salvar');
  }
}
