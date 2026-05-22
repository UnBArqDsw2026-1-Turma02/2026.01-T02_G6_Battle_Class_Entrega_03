import { PartidaFacade } from '../facades/PartidaFacade.js';
import type { RespostaDTO } from '../../shared/index.js';

/**
 * Stub de rota da PartidaFacade.
 *
 * Representa o cliente externo da Facade, equivalente a uma rota
 * Express `POST /rodada`, mas mantido framework-agnostico no scaffold.
 */
export function criarHandlerPartida(
  facade: PartidaFacade = new PartidaFacade(),
) {
  return async (
    userId: string,
    respostas: ReadonlyArray<RespostaDTO>,
  ) => {
    return facade.finalizarRodada(userId, respostas);
  };
}
