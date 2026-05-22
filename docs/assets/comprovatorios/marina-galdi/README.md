# Comprobatórios — Marina Agostini Galdi

## F1 — Factory Method (TorreEspecial)

### Escopo

- Evolução do `TorreEspecialCreator` com parâmetro de *upgrade* (`nivelUpgrade`).
- Regras de custo/dano em `TorreEspecial`; cobertura de testes (caminho feliz e erro).
- Diagrama UML do Factory Method.

### Decisões técnicas

- O `nivelUpgrade` sobrescreve o método de construção para aplicar bônus, mantendo a hierarquia de Creator.
- Validação de entrada impede níveis inválidos (`EntradaInvalidaError`).

### Evidências

- Código: `src/server/factories/torre/TorreEspecialCreator.ts`, `TorreEspecial.ts`
- Commit: [`5e54615`](https://github.com/UnBArqDsw2026-1-Turma02/2026.01-T02_G6_Battle_Class_Entrega_03/commit/5e54615)
- Diagrama: `docs/PadroesDeProjeto/diagramas/f1_factory_torre_especial_uml_marina.png`

## F2 — Facade (AuthFacade)

### Escopo

- `AuthFacade` com `registrar`, `login` e `validarToken`.
- Subsistemas mock: `SupabaseAuthMock`, `JwtVerifierMock`, `UserRepositoryMock`.
- Rota adaptadora de autenticação; testes e demo do fluxo completo.

### Decisões técnicas

- A Facade unifica cadastro/login/validação atrás de uma interface única; o subsistema ignora a fachada.
- `UserRepositoryMock` é compartilhado por injeção (reusado por outras Facades).

### Evidências

- Código: `src/server/facades/AuthFacade.ts`, `subsistemas/*Mock.ts`, `src/server/routes/auth.ts`
- Commit: [`6a05727`](https://github.com/UnBArqDsw2026-1-Turma02/2026.01-T02_G6_Battle_Class_Entrega_03/commit/6a05727)
- Diagrama: `docs/PadroesDeProjeto/diagramas/f2_auth_facade_sequence_uml_marina.png`

## F3 — State (fluxo TD)

### Escopo

- Fluxo do Tower Defense com compra de torres por estado e transições de batalha (`SessaoTD`, `ComprandoTorres`, `EmBatalha`).
- Diagrama de classes do State.

### Decisões técnicas

- A compra/débito da `Carteira` fica encapsulada no estado `ComprandoTorres`.
- As transições de batalha (vitória/derrota) são disparadas pelos próprios estados.

### Evidências

- Código: `src/state/td/SessaoTD.ts`, `ComprandoTorres.ts`, `EmBatalha.ts`
- Commit: [`b7ca6dd`](https://github.com/UnBArqDsw2026-1-Turma02/2026.01-T02_G6_Battle_Class_Entrega_03/commit/b7ca6dd)
- Diagrama: `docs/PadroesDeProjeto/diagramas/f3_state_classes_uml_marina.png`

## Validação local

```bash
npm run typecheck
npm test
npm run demo:factory
npm run demo:facade
npm run demo:state
```
