import type { Banca, RespostaDTO } from '../../../shared/index.js';
import { EntradaInvalidaError } from '../../../shared/index.js';
import type { Questao } from '../../factories/questao/Questao.js';
import type { QuestaoCreator } from '../../factories/questao/QuestaoCreator.js';
import { QuestaoEnemCreator } from '../../factories/questao/QuestaoEnemCreator.js';
import { QuestaoFuvestCreator } from '../../factories/questao/QuestaoFuvestCreator.js';
import { QuestaoUnbCreator } from '../../factories/questao/QuestaoUnbCreator.js';
import type { Roleta } from '../../factories/roleta/Roleta.js';
import type { RoletaCreator } from '../../factories/roleta/RoletaCreator.js';
import { RoletaSequencialCreator } from '../../factories/roleta/RoletaSequencialCreator.js';

export interface ResultadoQuiz {
  readonly acertos: number;
  readonly total: number;
}

function criarQuestaoCreatorsPadrao(): Record<Banca, QuestaoCreator> {
  return {
    ENEM: new QuestaoEnemCreator(),
    FUVEST: new QuestaoFuvestCreator(),
    UNB: new QuestaoUnbCreator(),
  };
}

/**
 * Subsystem (F2). Gabarito mock: alternativa 'A' e a correta.
 *
 * A seleção de questão consome a Roleta criada por Factory Method (F1),
 * preservando o fluxo Roleta -> QuestaoCreator -> Questao.
 */
export class QuizService {
  private readonly roleta: Roleta;

  constructor(
    roletaCreator: RoletaCreator = new RoletaSequencialCreator(),
    private readonly questaoCreators: Readonly<Record<Banca, QuestaoCreator>> =
      criarQuestaoCreatorsPadrao(),
  ) {
    this.roleta = roletaCreator.criarRoleta();
  }

  corrigir(respostas: ReadonlyArray<RespostaDTO>): ResultadoQuiz {
    if (respostas.length === 0) {
      throw new EntradaInvalidaError('respostas vazias');
    }
    const acertos = respostas.filter(
      (r) => r.alternativa.toUpperCase() === 'A',
    ).length;
    return { acertos, total: respostas.length };
  }

  sortearQuestao(banca: Banca = 'ENEM'): Questao {
    const materia = this.roleta.proximaMateria();
    const creator = this.questaoCreators[banca];
    return creator.criarQuestao(`[${materia}] questao sorteada para ${banca}`);
  }
}
