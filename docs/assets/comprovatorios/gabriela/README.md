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
