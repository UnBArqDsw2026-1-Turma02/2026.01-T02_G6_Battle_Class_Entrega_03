import type { Materia } from '../../../shared/index.js';
import type { Inimigo } from '../../factories/inimigo/Inimigo.js';
import { CreatorRegistry } from '../../factories/index.js';

/** Subsystem (F2) — libera recursos conforme desempenho. */
export class TowerDefenseService {
  constructor(private readonly registry: CreatorRegistry = new CreatorRegistry()) {}

  liberarRecursos(userId: string, acertos: number): string[] {
    void userId;
    const recursos: string[] = [];
    if (acertos >= 1) recursos.push('torre-comum');
    if (acertos >= 3) recursos.push('torre-especial');
    return recursos;
  }

  /**
   * Gera o inimigo da onda para a matéria escolhida. O InimigoCreator certo é
   * resolvido pelo CreatorRegistry — sem `if/else` por matéria nem dependência
   * dos ConcreteCreators aqui dentro.
   */
  gerarInimigo(materia: Materia, onda: number): Inimigo {
    return this.registry.inimigoPara(materia).spawn(onda);
  }
}
