import { describe, expect, it } from 'vitest';
import {
    CreatorRegistry,
    RoletaSequencial,
} from '../src/server/factories/index.js';
import type { Materia } from '../src/shared/index.js';
import { MateriaInexistenteError } from '../src/shared/index.js';

describe('F1 Factory Method — JoaoSapiencia extras', () => {
  it('RoletaSequencial cicla materias padrao', () => {
    const roleta = new RoletaSequencial();
    expect(roleta.proximaMateria()).toBe('matematica');
    expect(roleta.proximaMateria()).toBe('historia');
    expect(roleta.proximaMateria()).toBe('biologia');
    expect(roleta.proximaMateria()).toBe('matematica');
  });

  it('CreatorRegistry rejeita materia desconhecida', () => {
    const registry = new CreatorRegistry();
    expect(() => registry.inimigoPara('geografia' as Materia)).toThrow(
      MateriaInexistenteError,
    );
  });
});
