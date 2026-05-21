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
