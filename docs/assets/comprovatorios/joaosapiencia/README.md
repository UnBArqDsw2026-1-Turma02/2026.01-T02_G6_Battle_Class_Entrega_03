# Comprobatorios - Joao Sapiencia

## F1 - Factory Method

### Escopo

- Demo proprio: `demos/demo-joaosapiencia-factory.ts` (CreatorRegistry, roleta customizada e erro de banca).
- Testes adicionais do `CreatorRegistry` (banca valida e banca desconhecida).

### Decisoes tecnicas

- Usei a roleta sequencial por ser deterministica e facilitar reproducao nos demos.
- Mostrei caminho de erro com banca desconhecida para evidenciar validacao do registry.

### Evidencias

- Demo: `npm run demo:joaosapiencia:factory`
- Teste: `tests/joaosapiencia-factory.test.ts`
- Codigo: `demos/demo-joaosapiencia-factory.ts`

## F2 - Facade

### Escopo

- Demo proprio: `demos/demo-joaosapiencia-facade.ts` (PartidaFacade, RankingFacade, VestibularServiceFacade, erro em AuthFacade).
- Teste de erro: login com email/senha vazios em `AuthFacade`.

### Decisoes tecnicas

- Usei cenarios curtos para exercitar varias facades sem depender de estado externo.
- Inclui erro de login para comprovar validacao na borda publica da facade.

### Evidencias

- Demo: `npm run demo:joaosapiencia:facade`
- Teste: `tests/joaosapiencia-facade.test.ts`
- Codigo: `demos/demo-joaosapiencia-facade.ts`

## F3 - State

### Escopo

- Demo proprio: `demos/demo-joaosapiencia-state.ts` (SessaoQuiz encerrada, SessaoTD com compra invalida e estado terminal).
- Testes: acao apos `QuizEncerrado` e cenarios da Partida V3 (Pausada/Derrota).

### Decisoes tecnicas

- Cobri estados terminais com acao invalida para reforcar a regra de bloqueio.
- Usei a Partida V3 para validar a pausa entre ondas e a transicao para derrota.

### Evidencias

- Demo: `npm run demo:joaosapiencia:state`
- Testes: `tests/joaosapiencia-state.test.ts`, `tests/joaosapiencia-partida.test.ts`
- Codigo: `demos/demo-joaosapiencia-state.ts`

## Validacao local

```bash
npm run typecheck
npm test
npm run demo:joaosapiencia:factory
npm run demo:joaosapiencia:facade
npm run demo:joaosapiencia:state
```

## Prints sugeridos

Salvar nesta pasta:

- `typecheck.png`
- `npm-test.png`
- `demo-joaosapiencia-factory.png`
- `demo-joaosapiencia-facade.png`
- `demo-joaosapiencia-state.png`
