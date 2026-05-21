# Comprobatórios - Gabriela Tiago de Araújo

## F1 - Factory Method

### Escopo

- Implementação da família `Roleta` em `src/server/factories/roleta/`.
- Integração do fluxo `Roleta -> QuestaoCreator -> Questao` no `QuizService`.
- Exposição do fluxo pelo `PartidaFacade.obterProximaQuestao()`.

### Decisões técnicas

- `RoletaCreator` segue Factory Method para encapsular a criação do produto `Roleta`.
- `RoletaSequencial` foi mantida determinística para facilitar teste, demonstração e reprodutibilidade.
- O `QuizService` depende das abstrações de criação e não de uma regra de sorteio espalhada no código.

### Evidências

- Código: `src/server/factories/roleta/*`
- Teste: `tests/factory.test.ts`
- Demo: `demos/demo-factory.ts`

## F2 - Facade

### Escopo

- Revisão do contrato público de `PartidaFacade`.
- Inclusão das portas `QuizPort`, `EconomiaPort`, `TowerDefensePort` e `PartidaRepositoryPort`.
- Garantia da ordem de orquestração `quiz -> economia -> TD -> repo`.
- Exposição de `obterProximaQuestao()` como ponto simples para o cliente da partida.

### Decisões técnicas

- A Facade coordena os subsistemas sem concentrar as regras de negócio.
- As portas reduzem acoplamento com classes concretas e tornam a ordem do caso de uso testável.
- A validação de `userId` foi mantida na fronteira pública da Facade.

### Evidências

- Código: `src/server/facades/PartidaFacade.ts`
- Teste: `tests/facade.test.ts`
- Demo: `demos/demo-facade.ts`

## F3 - State

### Escopo

- Implementação/refinamento dos estados terminais `Vitoria` e `Derrota`.
- Criação de `EstadoTDTerminal` para centralizar o bloqueio de transições inválidas.
- Inclusão da operação `comprar()` no contrato `EstadoTD`, delegada pelo contexto `SessaoTD`.

### Decisões técnicas

- Estados terminais não aceitam novas transições e lançam `EstadoInvalidoError` de forma uniforme.
- `comprar()` pertence ao contrato do State porque sua validade depende do estado atual.
- A compra fica válida apenas em `ComprandoTorres`, mantendo `SessaoTD` sem condicionais por nome de estado.

### Evidências

- Código: `src/state/td/EstadoTDTerminal.ts`, `src/state/td/Vitoria.ts`, `src/state/td/Derrota.ts`
- Teste: `tests/state.test.ts`
- Demo: `demos/demo-state.ts`

## Validação local

```bash
npm run typecheck
npm test
npm run demo:factory
npm run demo:facade
npm run demo:state
```