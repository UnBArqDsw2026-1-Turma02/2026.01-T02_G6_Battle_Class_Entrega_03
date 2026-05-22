// npm run demo:joaosapiencia:facade - Facade (F2)
import {
    AuthFacade,
    PartidaFacade,
    RankingFacade,
    VestibularServiceFacade,
} from '../src/server/facades/index.js';

console.log('=== F2 (JoaoSapiencia) - PartidaFacade.finalizarRodada ===');
const partida = new PartidaFacade();
const rodada = await partida.finalizarRodada('user-1', [
  { questaoId: 'q1', alternativa: 'A' },
  { questaoId: 'q2', alternativa: 'B' },
]);
console.log('rodada:', rodada);

console.log('\n=== F2 (JoaoSapiencia) - RankingFacade ===');
const ranking = new RankingFacade();
console.log('top 2:', ranking.top(2));
console.log('posicao visitante:', ranking.posicaoDoUsuario('visitante'));

console.log('\n=== F2 (JoaoSapiencia) - VestibularServiceFacade (filtros) ===');
const vestibular = new VestibularServiceFacade();
const questoes = await vestibular.obterQuestoes({
  materia: 'biologia',
  banca: 'FUVEST',
  nivel: 'dificil',
  limite: 2,
});
console.log(questoes.map((q) => `${q.banca}/${q.dificuldade}`).join(', '));

console.log('\n--- caminho de erro ---');
try {
  await new AuthFacade().login(' ', ' ');
} catch (e) {
  console.log('OK, erro esperado:', (e as Error).message);
}
