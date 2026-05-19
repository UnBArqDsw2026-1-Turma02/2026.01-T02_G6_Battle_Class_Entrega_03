import type { FiltroQuestoes } from '../../shared/index.js';
import type { Questao } from '../factories/questao/Questao.js';
import { NotImplementedError } from '../../shared/index.js';

/** Facade (F2). TODO(@Gabriela): agregar ENEM/FUVEST/UnB + cache. */
export class VestibularServiceFacade {
  async obterQuestoes(filtros: FiltroQuestoes): Promise<ReadonlyArray<Questao>> {
    void filtros;
    throw new NotImplementedError('F2 VestibularServiceFacade.obterQuestoes');
  }
}
