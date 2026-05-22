// Barrel das três famílias de Factory Method (F1) + CreatorRegistry.
export * from './inimigo/index.js';
export * from './questao/index.js';
export * from './roleta/index.js';
export * from './torre/index.js';

import type { Banca, Materia } from '../../shared/index.js';
import { EntradaInvalidaError, MateriaInexistenteError } from '../../shared/index.js';
import { InimigoCreator } from './inimigo/InimigoCreator.js';
import { InimigoMatematicaCreator } from './inimigo/InimigoMatematicaCreator.js';
import { InimigoHistoriaCreator } from './inimigo/InimigoHistoriaCreator.js';
import { InimigoBiologiaCreator } from './inimigo/InimigoBiologiaCreator.js';
import { QuestaoCreator } from './questao/QuestaoCreator.js';
import { QuestaoEnemCreator } from './questao/QuestaoEnemCreator.js';
import { QuestaoFuvestCreator } from './questao/QuestaoFuvestCreator.js';
import { QuestaoUnbCreator } from './questao/QuestaoUnbCreator.js';

/**
 * Registry (F1) — resolve o ConcreteCreator certo a partir do eixo de
 * domínio: `Materia` para Inimigo, `Banca` para Questao.
 *
 * Centraliza o mapeamento para que serviços de aplicação como
 * VestibularServiceFacade e TowerDefenseService não façam `if/else` sobre
 * tipos concretos nem dependam dos ConcreteCreators diretamente. Os mapas
 * são injetáveis (default = famílias padrão) para facilitar testes e troca.
 */
export class CreatorRegistry {
  constructor(
    private readonly inimigos: Record<Materia, InimigoCreator> = {
      matematica: new InimigoMatematicaCreator(),
      historia: new InimigoHistoriaCreator(),
      biologia: new InimigoBiologiaCreator(),
    },
    private readonly questoes: Record<Banca, QuestaoCreator> = {
      ENEM: new QuestaoEnemCreator(),
      FUVEST: new QuestaoFuvestCreator(),
      UNB: new QuestaoUnbCreator(),
    },
  ) {}

  /** Creator de Inimigo para a matéria (caminho de erro: MateriaInexistenteError). */
  inimigoPara(materia: Materia): InimigoCreator {
    const creator = this.inimigos[materia];
    if (!creator) throw new MateriaInexistenteError(materia);
    return creator;
  }

  /** Creator de Questao para a banca (caminho de erro: EntradaInvalidaError). */
  questaoPara(banca: Banca): QuestaoCreator {
    const creator = this.questoes[banca];
    if (!creator) throw new EntradaInvalidaError(`banca sem Creator: "${banca}"`);
    return creator;
  }
}
