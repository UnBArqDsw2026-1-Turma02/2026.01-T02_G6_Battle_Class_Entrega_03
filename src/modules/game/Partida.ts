import { Carteira } from '../../state/Carteira.js';
import type { EstadoPartida } from '../../shared/state/EstadoPartida.js';
import { AguardandoInicio } from '../../shared/state/implementations/AguardandoInicio.js';

/**
 * Context (F3 V3) — orquestra quiz e TD numa única máquina de estados.
 *
 * Complementa `SessaoQuiz`/`SessaoTD` (contextos independentes do time).
 * Intervalo foi removido: a transição EmEstudo → EmCombateTD é automática
 * quando a Carteira atinge 50 moedas de questão.
 */
export class Partida {
  private estado: EstadoPartida = new AguardandoInicio();

  constructor(
    readonly carteira: Carteira = new Carteira(),
    public ondasRestantes = 2,
    public hpCastelo = 10,
  ) {}

  setEstado(novoEstado: EstadoPartida): void {
    this.estado = novoEstado;
  }

  get estadoAtual(): string {
    return this.estado.nome;
  }

  tick(dt: number): void {
    this.estado.tick(this, dt);
  }

  onAcerto(): void {
    this.estado.onAcerto(this);
  }

  onErro(): void {
    this.estado.onErro(this);
  }

  onOnda(): void {
    this.estado.onOnda(this);
  }
}
