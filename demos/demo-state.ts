// npm run demo:state — State (F3), dois contextos independentes
import { SessaoQuiz, SessaoTD } from '../src/state/index.js';

console.log('=== F3 State — SessaoQuiz (modo estudo) ===');
const q = new SessaoQuiz();
for (let i = 0; i < 3; i++) {
  q.avancar(); // ExibindoPergunta -> AguardandoResposta
  q.acertar(); // credita 10 + avança
  console.log(`pergunta ${i + 1}: estado=${q.estadoAtual} saldo=${q.carteira.obterSaldo()}`);
}

console.log('\n=== SessaoTD (modo tower defense) ===');
const td = new SessaoTD();
td.iniciar(); // -> ComprandoTorres
td.carteira.creditar(30);
while (td.estadoAtual !== 'Vitoria' && td.estadoAtual !== 'Derrota') {
  if (td.estadoAtual === 'ComprandoTorres') {
    td.comprar(10); // debita carteira e inicia batalha
  } else if (td.estadoAtual === 'EmBatalha') {
    td.tick(1);
  }
}
console.log('estado final TD:', td.estadoAtual);
console.log('saldo final TD:', td.carteira.obterSaldo());

console.log('\n--- caminho de erro (ação em estado terminal) ---');
try {
  td.tick(1);
} catch (e) {
  console.log('OK, erro esperado:', (e as Error).message);
}
console.log('Contextos independentes — acoplados só pela Carteira.');
