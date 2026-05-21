import { EntradaInvalidaError } from '../../../shared/index.js';

export interface JwtPayload {
  readonly userId: string;
  readonly email: string;
}

/** Subsystem (F2/Auth) — mock de geração e verificação de JWT. */
export class JwtVerifierMock {
  emitir(payload: JwtPayload): string {
    return Buffer.from(JSON.stringify(payload), 'utf-8').toString('base64url');
  }

  validar(token: string): JwtPayload {
    try {
      const json = Buffer.from(token, 'base64url').toString('utf-8');
      const payload = JSON.parse(json) as JwtPayload;
      if (!payload.userId || !payload.email) {
        throw new Error('payload incompleto');
      }
      return payload;
    } catch {
      throw new EntradaInvalidaError('token inválido');
    }
  }
}
