import { EstadoTDTerminal } from './EstadoTDTerminal.js';

/** ConcreteState (F3): TERMINAL (Vitoria), nenhuma acao e valida. */
export class Vitoria extends EstadoTDTerminal {
  override readonly nome = 'Vitoria';
}
