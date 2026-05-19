import { PartidaFacade } from '../facades/PartidaFacade.js';
import { NotImplementedError } from '../../shared/index.js';

/**
 * Stub do ponto de entrada (Express). NÃO importa 'express' — fora do scaffold.
 * TODO(@Dannyeclisson): registrar router.post('/rodada', ...).
 */
export function registrarRotaPartida(
  facade: PartidaFacade = new PartidaFacade(),
): void {
  void facade;
  throw new NotImplementedError('F2 routes/partida.registrarRotaPartida');
}
