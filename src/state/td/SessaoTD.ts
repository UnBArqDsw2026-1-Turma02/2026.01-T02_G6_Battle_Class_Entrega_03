import type { EstadoTD } from './EstadoTD.js';
import { Carteira } from '../Carteira.js';
import { AguardandoInicio } from './AguardandoInicio.js';

/** Context 2 (F3) — modo tower defense. Acoplado ao Quiz só pela Carteira. */
export class SessaoTD {
  private estado: EstadoTD = new AguardandoInicio();

  constructor(
    readonly carteira: Carteira = new Carteira(),
    public ondasRestantes = 3,
    public hpBase = 10,
  ) {}

  setEstado(e: EstadoTD): void {
    this.estado = e;
  }
  get estadoAtual(): string {
    return this.estado.nome;
  }
  tick(dt: number): void {
    this.estado.tick(this, dt);
  }
  iniciar(): void {
    this.estado.iniciar(this);
  }
  comprar(custo: number): void {
    this.estado.comprar(this, custo);
  }
}
