# Comprobatórios — Thiago Tonin

## F1 — Factory Method (família Torre)

### Escopo

- `TorreComum` e `TorreEspecial` como ConcreteProducts (custo, dano e alcance distintos).
- `TorreComumCreator` estendendo `TorreCreator` com regra de custo por onda.
- Testes de caminho feliz e onda negativa em `tests/factory.test.ts`.

### Evidências

- Código: `src/server/factories/torre/TorreComum.ts`, `TorreEspecial.ts`, `TorreComumCreator.ts`
- Teste: `tests/factory.test.ts`
- Demo: `npm run demo:factory`

## F2 — Facade (RankingFacade + PartidaFacade)

### Escopo

- Co-implementação de `RankingFacade` (`top`, `posicaoDoUsuario`) com mocks de subsistemas.
- Ranking baseado **somente** em moedas de questão (sem desempenho no TD).
- Teste `finalizarRodada credita moedas` integrando `PartidaFacade` + `EconomiaService`.
- Dados de exemplo nos mocks para o demo.

### Decisões técnicas

- Facades não chamam outras Facades; `UserRepositoryMock` é compartilhado via injeção.
- `CarteiraRepositoryMock` isola moedas de questão do ranking.

### Evidências

- Código: `src/server/facades/RankingFacade.ts`, `subsistemas/*RepositoryMock.ts`
- Teste: `tests/facade.test.ts`
- Demo: `npm run demo:facade`

## F3 — State (Lead UML V3)

### Escopo

- Interfaces `EstadoQuiz` / `EstadoTD` e bases `EstadoQuizBase` / `EstadoTDBase` com `InvalidStateError`.
- Diagramas PlantUML separados para Quiz, TD e visão unificada `Partida`.
- Documentação da remoção do estado **Intervalo** (V3).
- Máquina unificada `Partida` em `src/modules/game/` (complementar aos contextos `SessaoQuiz`/`SessaoTD` do time).
- Transição automática `EmEstudo` → `EmCombateTD` ao atingir 50 moedas na `Carteira`.

### Decisões técnicas

- Dois contextos independentes (`SessaoQuiz`, `SessaoTD`) permanecem como entrega principal do grupo; `Partida` modela o fluxo acoplado do prompt sem quebrar testes existentes.
- Estados terminais (`QuizEncerrado`, `Vitoria`, `Derrota`) herdam comportamento de bloqueio via bases abstratas ou `EstadoTDTerminal`.

### Evidências

- Código: `src/state/quiz/*`, `src/state/td/*`, `src/shared/state/*`, `src/modules/game/Partida.ts`
- Testes: `tests/state.test.ts`, `tests/partida-state.test.ts`
- Diagramas: `docs/PadroesDeProjeto/diagramas/state_sessao_quiz_v3.puml`, `state_sessao_td_v3.puml`, `state_partida_v3.puml`
- Demo: `npm run demo:state`

## Validação local

```bash
npm run typecheck
npm test
npm run demo:factory
npm run demo:facade
npm run demo:state
```

## Prints sugeridos

Salvar nesta pasta:

- `typecheck.png`
- `npm-test.png`
- `demo-factory.png`
- `demo-facade.png`
- `demo-state.png`
