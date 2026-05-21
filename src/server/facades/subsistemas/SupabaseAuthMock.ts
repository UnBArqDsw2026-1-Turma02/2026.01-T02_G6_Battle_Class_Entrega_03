import { EntradaInvalidaError } from '../../../shared/index.js';
import { UserRepositoryMock, type Usuario } from './UserRepositoryMock.js';

/** Subsystem (F2/Auth) — mock do provedor de autenticação. */
export class SupabaseAuthMock {
  constructor(private readonly users: UserRepositoryMock = new UserRepositoryMock()) {}

  registrar(email: string, senha: string): Usuario {
    if (!email.trim() || !senha.trim()) {
      throw new EntradaInvalidaError('email/senha obrigatórios');
    }
    return this.users.criar(email.trim(), senha);
  }

  login(email: string, senha: string): Usuario {
    const usuario = this.users.buscarPorEmail(email.trim());
    if (!usuario || usuario.senha !== senha) {
      throw new EntradaInvalidaError('credenciais inválidas');
    }
    return usuario;
  }
}
