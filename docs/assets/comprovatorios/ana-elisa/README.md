# Comprobatórios — Ana Elisa Ramos

## F1 — Factory Method

### Escopo

- Bateria de testes para a família `Questao`: validação de `banca`, `dificuldade`, `alternativas` e `enunciado` para `QuestaoEnemCreator`, `QuestaoFuvestCreator` e `QuestaoUnbCreator`.
- Testes de `instanceof` e escalonamento de HP para `InimigoMatematicaCreator`, `InimigoHistoriaCreator` e `InimigoBiologiaCreator`.
- Diagrama de classes UML da família `Questao` (Creator abstrato → ConcreteCreators → Product).

### Decisões técnicas

- Cobriu caminho feliz e caminho de erro (enunciado vazio → `EntradaInvalidaError`) para os três `QuestaoCreator`.
- Verificou que cada banca gera `id` distinto para o mesmo enunciado, evidenciando o isolamento entre os `ConcreteCreators`.
- O diagrama retrata fielmente o código: `QuestaoCreator` abstrato com `factoryMethod()` delegado, `criarQuestao()` como template method e `Questao` como Product.

### Evidências

- Teste: [`tests/ana-elisa-factory.test.ts`](https://github.com/UnBArqDsw2026-1-Turma02/2026.01-T02_G6_Battle_Class_Entrega_03/blob/main/tests/ana-elisa-factory.test.ts)
- Diagrama: `docs/PadroesDeProjeto/diagramas/f1_factory_questao_classes_ana.png`
- Commit testes: [`9c5ce68`](https://github.com/UnBArqDsw2026-1-Turma02/2026.01-T02_G6_Battle_Class_Entrega_03/commit/9c5ce68268fb9a72108cf0b843f77c32bc2e07ad)
- Commit diagrama: [`8cdce87`](https://github.com/UnBArqDsw2026-1-Turma02/2026.01-T02_G6_Battle_Class_Entrega_03/commit/8cdce879f0b87971e6900c16c2089516a13e0dbe)

---

## F2 — Facade

### Escopo

- Bateria de testes para a `VestibularServiceFacade` (não havia testes antes): filtragem por banca, por nível, por limite e verificação do enunciado com a matéria informada.
- Testes adicionais para a `RankingFacade`: posições crescentes, moedas em ordem decrescente e caminho de erro (`top(0)` e `top(-1)`).
- Diagrama de pacotes UML das 4 Facades com seus subsistemas internos e clientes externos.

### Decisões técnicas

- A `VestibularServiceFacade` não tinha cobertura de testes no projeto — os casos escritos evidenciam que o cliente só enxerga a Facade, sem contato com os `QuestaoCreator` internos.
- O diagrama de pacotes mostra o `ConfigService` compartilhado entre `AuthFacade` e `RankingFacade` sem que uma Facade conheça a outra, evidenciando a regra de higiene do padrão.

### Evidências

- Teste: [`tests/ana-elisa-facade.test.ts`](https://github.com/UnBArqDsw2026-1-Turma02/2026.01-T02_G6_Battle_Class_Entrega_03/blob/main/tests/ana-elisa-facade.test.ts)
- Diagrama: `docs/PadroesDeProjeto/diagramas/f2_facades_pacotes_ana.png`
- Commit testes: [`9c5ce68`](https://github.com/UnBArqDsw2026-1-Turma02/2026.01-T02_G6_Battle_Class_Entrega_03/commit/9c5ce68268fb9a72108cf0b843f77c32bc2e07ad)
- Commit diagrama: [`8cdce87`](https://github.com/UnBArqDsw2026-1-Turma02/2026.01-T02_G6_Battle_Class_Entrega_03/commit/8cdce879f0b87971e6900c16c2089516a13e0dbe)

---

## F3 — State

### Escopo

- Bateria de testes para `SessaoQuiz`: estado inicial, transições `avancar` → `acertar`/`errar`, encerramento após N perguntas e bloqueio de ações inválidas.
- Bateria de testes para `SessaoTD`: estado inicial, transições `iniciar` → `comprar` → `pronto` → `tick`, débito da `Carteira` e bloqueio em estados terminais.
- Revisão UML das duas máquinas de estados vs. código.

### Decisões técnicas

- Cobriu casos que o `state.test.ts` principal não contemplava individualmente, como verificar o estado após `errar()` e o estado inicial antes de qualquer ação.
- Confirmou que `SaldoInsuficienteError` é lançado ao tentar comprar sem saldo, evidenciando o acoplamento correto entre `ComprandoTorres` e `Carteira`.

### Evidências

- Teste: [`tests/ana-elisa-state.test.ts`](https://github.com/UnBArqDsw2026-1-Turma02/2026.01-T02_G6_Battle_Class_Entrega_03/blob/main/tests/ana-elisa-state.test.ts)
- Commit testes: [`9c5ce68`](https://github.com/UnBArqDsw2026-1-Turma02/2026.01-T02_G6_Battle_Class_Entrega_03/commit/9c5ce68268fb9a72108cf0b843f77c32bc2e07ad)
- Demo: `npm run demo:state` e `npm run demo:factory`
