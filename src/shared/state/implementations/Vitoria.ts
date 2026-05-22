import { EstadoPartidaBase } from '../EstadoPartida.js';

/** Terminal — vitória no TD. */
export class Vitoria extends EstadoPartidaBase {
  override readonly nome = 'Vitoria';
}
