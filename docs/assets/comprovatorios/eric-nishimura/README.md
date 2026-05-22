# Comprobatórios — Eric Akio Nishimura

## F1 — Factory Method (spawn por onda)

### Escopo

- Corpo do *template method* `InimigoCreator.spawn(onda)`: regra de escalonamento de HP por onda (`hp = round(hp * (1 + onda * 0.15))`).
- Diagrama de comunicação da chamada `spawn(onda)`.

### Decisões técnicas

- A regra de escalonamento vive no `Creator` abstrato e vale para **todas** as 3 famílias de `Inimigo` — reuso de lógica via herança, demonstrando o ponto forte do Factory Method (a lógica de negócio usa o produto pela interface).
- O `factoryMethod()` permanece responsabilidade das subclasses; `spawn` apenas o consome.

### Evidências

- Código: `src/server/factories/inimigo/InimigoCreator.ts`
- Commit: [`91c95d5`](https://github.com/UnBArqDsw2026-1-Turma02/2026.01-T02_G6_Battle_Class_Entrega_03/commit/91c95d5)
- Diagrama: `docs/PadroesDeProjeto/diagramas/f1_factory_spawn_onda_uml_Eric.png`
- Demo: `npm run demo:factory`

## Validação local

```bash
npm run typecheck
npm test
npm run demo:factory
npm run demo:facade
npm run demo:state
```
