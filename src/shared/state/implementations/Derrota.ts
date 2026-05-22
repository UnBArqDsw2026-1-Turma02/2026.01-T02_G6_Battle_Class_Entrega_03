import { EstadoPartidaBase } from '../EstadoPartida.js';

/** Terminal — derrota no TD. */
export class Derrota extends EstadoPartidaBase {
  override readonly nome = 'Derrota';
}
