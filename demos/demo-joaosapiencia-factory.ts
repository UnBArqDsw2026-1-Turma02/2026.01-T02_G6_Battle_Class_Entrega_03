// npm run demo:joaosapiencia:factory - Factory Method (F1)
import {
    CreatorRegistry,
    RoletaSequencialCreator,
    TorreEspecialCreator,
} from '../src/server/factories/index.js';
import type { Banca } from '../src/shared/index.js';

console.log('=== F1 (JoaoSapiencia) - CreatorRegistry ===');
const registry = new CreatorRegistry();
const inimigo = registry.inimigoPara('matematica').spawn(2);
console.log('inimigo:', inimigo.render(), 'hp=', inimigo.hp);

console.log('\n=== F1 (JoaoSapiencia) - RoletaSequencial custom ===');
const roleta = new RoletaSequencialCreator(['biologia']).criarRoleta();
console.log(roleta.render());
console.log('materias:', [roleta.proximaMateria(), roleta.proximaMateria()].join(', '));

console.log('\n=== F1 (JoaoSapiencia) - TorreEspecial ===');
const torre = new TorreEspecialCreator().construir(1, 1);
console.log(torre.atirar('inimigo#7'), '| custo', torre.custo);

console.log('\n--- caminho de erro ---');
try {
  registry.questaoPara('IME' as unknown as Banca);
} catch (e) {
  console.log('OK, erro esperado:', (e as Error).message);
}
