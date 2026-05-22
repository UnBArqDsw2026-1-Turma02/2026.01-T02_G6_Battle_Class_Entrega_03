import { EntradaInvalidaError } from '../../../shared/index.js';

export interface Usuario {
  readonly id: string;
  readonly email: string;
  readonly senha: string;
}

/** Subsystem (F2/Auth) — mock de repositório de usuários em memória. */
export class UserRepositoryMock {
  private readonly usuarios = new Map<string, Usuario>([
    ['u1', { id: 'u1', email: 'ana@battle.class', senha: 'seed' }],
    ['u2', { id: 'u2', email: 'bruno@battle.class', senha: 'seed' }],
    ['u3', { id: 'u3', email: 'carla@battle.class', senha: 'seed' }],
    ['user-1', { id: 'user-1', email: 'demo@battle.class', senha: 'seed' }],
  ]);
  private idCounter = 1;

  criar(email: string, senha: string): Usuario {
    if (this.buscarPorEmail(email)) {
      throw new EntradaInvalidaError('email já cadastrado');
    }
    const usuario: Usuario = {
      id: `u-${this.idCounter++}`,
      email,
      senha,
    };
    this.usuarios.set(usuario.id, usuario);
    return usuario;
  }

  buscarPorId(id: string): Usuario | undefined {
    return this.usuarios.get(id);
  }

  buscarPorEmail(email: string): Usuario | undefined {
    for (const usuario of this.usuarios.values()) {
      if (usuario.email.toLowerCase() === email.toLowerCase()) return usuario;
    }
    return undefined;
  }
}
