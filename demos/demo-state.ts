// npm run demo:state - State (F3), dois contextos independentes
import { SessaoQuiz, SessaoTD } from '../src/state/index.js';

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
td.iniciar();
td.comprar(50);
td.pronto();
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
