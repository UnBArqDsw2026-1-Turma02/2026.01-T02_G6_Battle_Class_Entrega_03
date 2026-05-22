import type { Partida } from '../../modules/game/Partida.js';
import { EstadoInvalidoError } from '../errors.js';

/** State (F3 V3) — interface unificada da sessão de jogo (Partida). */
export interface EstadoPartida {
  readonly nome: string;
  tick(ctx: Partida, dt: number): void;
  onAcerto(ctx: Partida): void;
  onErro(ctx: Partida): void;
  onOnda(ctx: Partida): void;
}

/** Base com comportamento padrão de erro (InvalidStateError). */
export abstract class EstadoPartidaBase implements EstadoPartida {
  abstract readonly nome: string;

  tick(_ctx: Partida, _dt: number): void {
    throw new EstadoInvalidoError(this.nome, 'tick');
  }

  onAcerto(_ctx: Partida): void {
    throw new EstadoInvalidoError(this.nome, 'onAcerto');
  }

  onErro(_ctx: Partida): void {
    throw new EstadoInvalidoError(this.nome, 'onErro');
  }

  onOnda(_ctx: Partida): void {
    throw new EstadoInvalidoError(this.nome, 'onOnda');
  }
}

/** Moedas de questão necessárias para liberar o TD automaticamente (V3). */
export const MOEDAS_PARA_COMBATE_TD = 50;
