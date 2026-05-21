// npm run demo:factory - Factory Method (F1)
import type { Materia } from '../src/shared/index.js';
import {
  InimigoCreator,
  InimigoMatematicaCreator,
  InimigoHistoriaCreator,
  InimigoBiologiaCreator,
  QuestaoEnemCreator,
  QuestaoUnbCreator,
  RoletaSequencialCreator,
  TorreComumCreator,
  TorreEspecialCreator,
} from '../src/server/factories/index.js';

console.log('=== F1 Factory Method - Inimigos por materia/onda ===');
const creators: Record<Materia, InimigoCreator> = {
  matematica: new InimigoMatematicaCreator(),
  historia: new InimigoHistoriaCreator(),
  biologia: new InimigoBiologiaCreator(),
};
for (const onda of [1, 3]) {
  for (const m of Object.keys(creators) as Materia[]) {
    console.log(`onda ${onda}:`, creators[m].spawn(onda).render());
  }
}

console.log('\n=== RoletaCreator: materia sorteada para o Quiz ===');
const roleta = new RoletaSequencialCreator().criarRoleta();
console.log(roleta.render());
console.log('materias:', [
  roleta.proximaMateria(),
  roleta.proximaMateria(),
  roleta.proximaMateria(),
  roleta.proximaMateria(),
].join(', '));

console.log('\n=== Questoes por banca ===');
console.log(new QuestaoEnemCreator().criarQuestao('Funcao do 2o grau...'));
console.log(new QuestaoUnbCreator().criarQuestao('Afirmacao para julgar...'));

console.log('\n=== Torres ===');
const t1 = new TorreComumCreator().construir();
const t2 = new TorreEspecialCreator().construir(2);
console.log(t1.atirar('inimigo#1'), '| custo', t1.custo);
console.log(t2.atirar('inimigo#2'), '| custo', t2.custo);

console.log('\n--- caminho de erro ---');
try {
  new QuestaoEnemCreator().criarQuestao('   ');
} catch (e) {
  console.log('OK, erro esperado:', (e as Error).message);
}
