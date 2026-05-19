import type { EstadoQuiz } from './EstadoQuiz.js';
import { Carteira } from '../Carteira.js';
import { ExibindoPergunta } from './ExibindoPergunta.js';

/** Context 1 (F3) — modo estudo. Acoplado ao TD só pela Carteira. */
export class SessaoQuiz {
  private estado: EstadoQuiz = new ExibindoPergunta();

  constructor(
    readonly carteira: Carteira = new Carteira(),
    public perguntasRestantes = 3,
  ) {}

  setEstado(e: EstadoQuiz): void {
    this.estado = e;
  }
  get estadoAtual(): string {
    return this.estado.nome;
  }
  acertar(): void {
    this.estado.onAcerto(this);
  }
  errar(): void {
    this.estado.onErro(this);
  }
  avancar(): void {
    this.estado.proxima(this);
  }
}
