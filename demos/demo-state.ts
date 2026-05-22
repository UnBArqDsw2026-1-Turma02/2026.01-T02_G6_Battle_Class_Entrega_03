// npm run demo:state - State (F3), dois contextos independentes
import { SessaoQuiz, SessaoTD } from '../src/state/index.js';
import { Partida } from '../src/modules/game/Partida.js';
import { MOEDAS_PARA_COMBATE_TD } from '../src/shared/state/EstadoPartida.js';

console.log('=== F3 State - SessaoQuiz (modo estudo) ===');
const q = new SessaoQuiz();
for (let i = 0; i < 3; i++) {
  q.avancar();
  q.acertar();
  console.log(`pergunta ${i + 1}: estado=${q.estadoAtual} saldo=${q.carteira.obterSaldo()}`);
}

console.log('\n=== SessaoTD (modo tower defense) ===');
const td = new SessaoTD();
td.carteira.creditar(100);
td.iniciar(); // -> ComprandoTorres
td.comprar(50); // debita a carteira; permanece em ComprandoTorres
td.pronto(); // -> EmBatalha
while (td.estadoAtual === 'EmBatalha') td.tick(1);
console.log('estado final TD:', td.estadoAtual);
console.log('saldo apos compra:', td.carteira.obterSaldo());

console.log('\n--- caminho de erro (acao em estado terminal) ---');
try {
  td.tick(1);
} catch (e) {
  console.log('OK, erro esperado:', (e as Error).message);
}
console.log('Contextos independentes - acoplados so pela Carteira.');

console.log('\n=== Partida (maquina unificada V3) ===');
const partida = new Partida(undefined, 1);
partida.onOnda();
for (let i = 0; i < MOEDAS_PARA_COMBATE_TD / 10; i++) partida.onAcerto();
console.log(`estado=${partida.estadoAtual} saldo=${partida.carteira.obterSaldo()}`);
partida.tick(1);
console.log('estado final Partida:', partida.estadoAtual);
