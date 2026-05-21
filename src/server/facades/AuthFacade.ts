import { EntradaInvalidaError } from '../../shared/index.js';
import { JwtVerifierMock, type JwtPayload } from './subsistemas/JwtVerifierMock.js';
import { SupabaseAuthMock } from './subsistemas/SupabaseAuthMock.js';
import { UserRepositoryMock, type Usuario } from './subsistemas/UserRepositoryMock.js';

export interface RegistroDTO {
  readonly email: string;
  readonly senha: string;
}

export interface SessaoAuth {
  readonly token: string;
  readonly usuario: Pick<Usuario, 'id' | 'email'>;
}

/** Facade (F2) — unifica cadastro/login/validação de token. */
export class AuthFacade {
  constructor(
    private readonly users: UserRepositoryMock = new UserRepositoryMock(),
    private readonly auth: SupabaseAuthMock = new SupabaseAuthMock(users),
    private readonly jwt: JwtVerifierMock = new JwtVerifierMock(),
  ) {}

  async registrar(dto: RegistroDTO): Promise<SessaoAuth> {
    const usuario = this.auth.registrar(dto.email, dto.senha);
    return this.criarSessao(usuario);
  }

  async login(email: string, senha: string): Promise<SessaoAuth> {
    if (!email.trim() || !senha.trim()) {
      throw new EntradaInvalidaError('email/senha obrigatórios');
    }
    const usuario = this.auth.login(email, senha);
    return this.criarSessao(usuario);
  }

  async validarToken(token: string): Promise<JwtPayload> {
    const payload = this.jwt.validar(token);
    const usuario = this.users.buscarPorId(payload.userId);
    if (!usuario) {
      throw new EntradaInvalidaError('usuário do token não existe');
    }
    return payload;
  }

  private criarSessao(usuario: Usuario): SessaoAuth {
    const token = this.jwt.emitir({ userId: usuario.id, email: usuario.email });
    return { token, usuario: { id: usuario.id, email: usuario.email } };
  }
}
