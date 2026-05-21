import { EstadoTDTerminal } from './EstadoTDTerminal.js';

/** ConcreteState (F3): TERMINAL (Derrota), nenhuma ação é válida. */
export class Derrota extends EstadoTDTerminal {
  override readonly nome = 'Derrota';
}
