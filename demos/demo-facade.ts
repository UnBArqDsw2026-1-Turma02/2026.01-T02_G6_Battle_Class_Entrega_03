// npm run demo:facade — Facade (F2)
import { PartidaFacade, VestibularServiceFacade } from '../src/server/facades/index.js';

const facade = new PartidaFacade();

console.log('=== F2 Facade — PartidaFacade.finalizarRodada ===');
const out = await facade.finalizarRodada('user-1', [
  { questaoId: 'q1', alternativa: 'A' },
  { questaoId: 'q2', alternativa: 'A' },
  { questaoId: 'q3', alternativa: 'A' },
  { questaoId: 'q4', alternativa: 'C' },
]);
console.log('resultado:', out);

console.log('\n=== VestibularServiceFacade.obterQuestoes ===');
const qs = await new VestibularServiceFacade().obterQuestoes({ materia: 'matematica' });
console.log(qs.map((q) => `${q.banca}/${q.dificuldade}`).join(', '));

console.log('\n--- caminho de erro ---');
try {
  await facade.finalizarRodada('user-1', []);
} catch (e) {
  console.log('OK, erro esperado:', (e as Error).message);
}
