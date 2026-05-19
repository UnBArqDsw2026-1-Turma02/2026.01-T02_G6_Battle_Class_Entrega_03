import type { FiltroQuestoes } from '../../shared/index.js';
import type { Questao } from '../factories/questao/Questao.js';
import { QuestaoEnemCreator } from '../factories/questao/QuestaoEnemCreator.js';
import { QuestaoFuvestCreator } from '../factories/questao/QuestaoFuvestCreator.js';
import { QuestaoUnbCreator } from '../factories/questao/QuestaoUnbCreator.js';
import type { QuestaoCreator } from '../factories/questao/QuestaoCreator.js';
import type { Banca } from '../../shared/index.js';

/** Facade (F2) — agrega as bancas atrás de uma interface única. */
export class VestibularServiceFacade {
  private readonly creators: Record<Banca, QuestaoCreator> = {
    ENEM: new QuestaoEnemCreator(),
    FUVEST: new QuestaoFuvestCreator(),
    UNB: new QuestaoUnbCreator(),
  };

  async obterQuestoes(filtros: FiltroQuestoes): Promise<ReadonlyArray<Questao>> {
    const bancas: Banca[] = filtros.banca
      ? [filtros.banca]
      : ['ENEM', 'FUVEST', 'UNB'];
    let questoes = bancas.map((b, i) =>
      this.creators[b].criarQuestao(
        `[${filtros.materia}] questão ${i + 1} (${b})`,
      ),
    );
    if (filtros.nivel) {
      questoes = questoes.filter((q) => q.dificuldade === filtros.nivel);
    }
    return questoes.slice(0, filtros.limite ?? questoes.length);
  }
}
