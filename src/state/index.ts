// Barrel do padrão State (F3) + factories de sessão.
export * from './Carteira.js';
export * from './quiz/index.js';
export * from './td/index.js';

import { Carteira } from './Carteira.js';
import { SessaoQuiz } from './quiz/SessaoQuiz.js';
import { SessaoTD } from './td/SessaoTD.js';

/**
 * Factory de Context do modo estudo: cria a `SessaoQuiz` já no estado de
 * entrada (`ExibindoPergunta`) com a `Carteira` injetada.
 *
 * Ponto único de construção usado por demos e PartidaFacade — esconde de
 * quem consome qual é o estado inicial concreto.
 */
export function criarSessaoQuiz(
  carteira: Carteira = new Carteira(),
  perguntas = 3,
): SessaoQuiz {
  return new SessaoQuiz(carteira, perguntas);
}

/**
 * Factory de Context do modo tower defense: cria a `SessaoTD` já no estado de
 * entrada (`AguardandoInicio`) com a `Carteira` injetada.
 *
 * Passar a MESMA `Carteira` para `criarSessaoQuiz` e `criarSessaoTD` é o único
 * acoplamento entre os dois Contexts (ver §1 do plano).
 */
export function criarSessaoTD(
  carteira: Carteira = new Carteira(),
  ondas = 3,
  hpBase = 10,
): SessaoTD {
  return new SessaoTD(carteira, ondas, hpBase);
}
