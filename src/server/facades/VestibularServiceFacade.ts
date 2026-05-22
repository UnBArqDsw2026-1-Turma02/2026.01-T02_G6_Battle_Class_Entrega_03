import type { Banca, FiltroQuestoes } from '../../shared/index.js';
import type { Questao } from '../factories/questao/Questao.js';
import { CreatorRegistry } from '../factories/index.js';

/** Facade (F2) — agrega as bancas atrás de uma interface única. */
export class VestibularServiceFacade {
  constructor(private readonly registry: CreatorRegistry = new CreatorRegistry()) {}

  async obterQuestoes(filtros: FiltroQuestoes): Promise<ReadonlyArray<Questao>> {
    const bancas: Banca[] = filtros.banca
      ? [filtros.banca]
      : ['ENEM', 'FUVEST', 'UNB'];
    let questoes = bancas.map((b, i) =>
      this.registry
        .questaoPara(b)
        .criarQuestao(`[${filtros.materia}] questão ${i + 1} (${b})`),
    );
    if (filtros.nivel) {
      questoes = questoes.filter((q) => q.dificuldade === filtros.nivel);
    }
    return questoes.slice(0, filtros.limite ?? questoes.length);
  }
}
