import { PartidaFacade } from '../facades/PartidaFacade.js';
import type { RespostaDTO } from '../../shared/index.js';

/**
 * Adaptador framework-agnóstico do ponto de entrada (substitui o handler
 * Express no scaffold). Na Parte B vira `router.post('/rodada', ...)`.
 */
export function criarHandlerPartida(facade: PartidaFacade = new PartidaFacade()) {
  return async (userId: string, respostas: ReadonlyArray<RespostaDTO>) => {
    return facade.finalizarRodada(userId, respostas);
  };
}
