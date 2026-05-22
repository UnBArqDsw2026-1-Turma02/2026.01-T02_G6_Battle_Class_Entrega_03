# Comprobatórios — Dannyeclisson Costa

## F1 — Factory Method (base Torre)

### Escopo

- Classe abstrata `Torre` (Product) e `TorreCreator` abstrato com regra-template de **custo por onda**.
- `TorreComum` como ConcreteProduct.

### Decisões técnicas

- O método-template em `TorreCreator` aplica a regra comum de custo (análogo a `InimigoCreator.spawn`), demonstrando reuso de lógica via herança — ponto forte do Factory Method.
- Subclasses (`TorreComum`, `TorreEspecial`) só decidem o produto concreto.

### Evidências

- Código: `src/server/factories/torre/Torre.ts`, `TorreCreator.ts`, `TorreComum.ts`
- Commit: [`b8ad82e`](https://github.com/UnBArqDsw2026-1-Turma02/2026.01-T02_G6_Battle_Class_Entrega_03/commit/b8ad82e)
- Demo: `npm run demo:factory`

## F2 — Facade (PartidaFacade + persistência)

### Escopo

- `PartidaFacade` registrando os dados completos da rodada.
- `PartidaRepository` (persistência mock) e adaptador de rota `partida`.

### Decisões técnicas

- O registro completo (acertos, moedas, desbloqueios, data) é montado pela Facade e delegado ao repositório.
- A rota Express demonstra que a Facade tem cliente real.

### Evidências

- Código: `src/server/facades/PartidaFacade.ts`, `subsistemas/PartidaRepository.ts`, `src/server/routes/partida.ts`
- Commit: [`498d1ad`](https://github.com/UnBArqDsw2026-1-Turma02/2026.01-T02_G6_Battle_Class_Entrega_03/commit/498d1ad)
- Demo: `npm run demo:facade`

## F3 — State (Carteira)

### Escopo

- `Carteira` com saldo, `creditar`/`debitar` e **auditoria de movimentos**; exceção em saldo insuficiente.

### Decisões técnicas

- A `Carteira` é a única dependência compartilhada entre `SessaoQuiz` e `SessaoTD` — não há transição direta de um Context para o outro.
- `debitar` lança `SaldoInsuficienteError`, mantendo a regra de economia na própria entidade.

### Evidências

- Código: `src/state/Carteira.ts`
- Commit: [`2175723`](https://github.com/UnBArqDsw2026-1-Turma02/2026.01-T02_G6_Battle_Class_Entrega_03/commit/2175723)
- Demo: `npm run demo:state`

## Transversais

- Configuração do projeto (Node + TypeScript + Vitest) — scaffold Fase 0: [`60f58d9`](https://github.com/UnBArqDsw2026-1-Turma02/2026.01-T02_G6_Battle_Class_Entrega_03/commit/60f58d9).

## Validação local

```bash
npm run typecheck
npm test
npm run demo:factory
npm run demo:facade
npm run demo:state
```
