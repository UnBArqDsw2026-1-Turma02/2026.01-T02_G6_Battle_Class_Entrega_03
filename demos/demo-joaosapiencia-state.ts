// npm run demo:joaosapiencia:state - State (F3)
import { SessaoQuiz, SessaoTD } from '../src/state/index.js';

console.log('=== F3 (JoaoSapiencia) - SessaoQuiz ===');
const quiz = new SessaoQuiz(undefined, 1);
quiz.avancar();
quiz.errar();
console.log('estado quiz:', quiz.estadoAtual, '| saldo', quiz.carteira.obterSaldo());

console.log('\n--- caminho de erro (acao apos encerrar) ---');
try {
  quiz.avancar();
} catch (e) {
  console.log('OK, erro esperado:', (e as Error).message);
}

console.log('\n=== F3 (JoaoSapiencia) - SessaoTD ===');
const td = new SessaoTD();
td.carteira.creditar(100);
td.iniciar();
try {
  td.comprar(-5);
} catch (e) {
  console.log('OK, erro esperado:', (e as Error).message);
}

// compra valida antes da primeira batalha
const custoCompra = 40;
td.comprar(custoCompra);

td.pronto();
while (td.estadoAtual !== 'Vitoria' && td.estadoAtual !== 'Derrota') {
  if (td.estadoAtual === 'EmBatalha') {
    td.tick(1);
  } else if (td.estadoAtual === 'ComprandoTorres') {
    td.pronto();
  }
}
console.log('estado final TD:', td.estadoAtual);

console.log('\n--- caminho de erro (acao em estado terminal) ---');
try {
  td.tick(1);
} catch (e) {
  console.log('OK, erro esperado:', (e as Error).message);
}
