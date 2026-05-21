import { EstadoTDTerminal } from './EstadoTDTerminal.js';

/** ConcreteState (F3): TERMINAL (Derrota), nenhuma acao e valida. */
export class Derrota extends EstadoTDTerminal {
  override readonly nome = 'Derrota';
}
