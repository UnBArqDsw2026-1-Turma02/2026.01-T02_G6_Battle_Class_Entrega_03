import { EstadoInvalidoError } from '../../shared/index.js';
import type { EstadoTD } from './EstadoTD.js';
import type { SessaoTD } from './SessaoTD.js';

/**
 * Base dos estados terminais do TD.
 *
 * Vitoria e Derrota não aceitam novas transições. Centralizar esse
 * comportamento evita divergência entre os finais da máquina de estados.
 */
export abstract class EstadoTDTerminal implements EstadoTD {
  abstract readonly nome: string;

  tick(_ctx: SessaoTD, _dt: number): never {
    return this.invalidar('tick');
  }

  iniciar(_ctx: SessaoTD): never {
    return this.invalidar('iniciar');
  }

  comprar(_ctx: SessaoTD, _custo: number): never {
    return this.invalidar('comprar');
  }

  pronto(_ctx: SessaoTD): never {
    return this.invalidar('pronto');
  }

  protected invalidar(acao: string): never {
    throw new EstadoInvalidoError(this.nome, acao);
  }
}
