import { NotImplementedError } from '../../../shared/index.js';

/** Subsystem (F2) — ~MotorTowerDefense. */
export class TowerDefenseService {
  liberarRecursos(userId: string, acertos: number): string[] {
    void userId; void acertos;
    throw new NotImplementedError('F2 TowerDefenseService.liberarRecursos');
  }
}
