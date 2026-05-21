import { AuthFacade, type RegistroDTO } from '../facades/AuthFacade.js';

/**
 * Adaptador framework-agnóstico para rotas de autenticação.
 * Na Parte B vira controller/middleware Express.
 */
export function criarHandlersAuth(facade: AuthFacade = new AuthFacade()) {
  return {
    registrar: async (dto: RegistroDTO) => facade.registrar(dto),
    login: async (email: string, senha: string) => facade.login(email, senha),
    validarToken: async (token: string) => facade.validarToken(token),
  };
}
