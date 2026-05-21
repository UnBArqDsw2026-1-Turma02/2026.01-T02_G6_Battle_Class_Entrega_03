import { EstadoTDTerminal } from './EstadoTDTerminal.js';

/** ConcreteState (F3): TERMINAL (Vitoria), nenhuma ação é válida. */
export class Vitoria extends EstadoTDTerminal {
  override readonly nome = 'Vitoria';
}
