# Comprobatórios — João Carlos Lobo

## F1 — Factory Method (família Inimigo)

### Escopo

- Família `Inimigo` completa: ConcreteProducts e ConcreteCreators das variantes **Padrão / Rápido / Tanque** para **Matemática**, **História** e **Biologia** (18 produtos + creators).
- Barrel `src/server/factories/inimigo/index.ts` e testes da família.

### Decisões técnicas

- Cada matéria/dificuldade vira um `ConcreteCreator` próprio, calibrando HP/velocidade sem tocar no *loop* de *spawn*.
- A extensibilidade (adicionar uma nova matéria/variante) não altera o código cliente — demonstra o Aberto/Fechado do Factory Method.
- O HP escala por onda pelo *template method* `InimigoCreator.spawn(onda)`, herdado por todas as variantes.

### Evidências

- Código: `src/server/factories/inimigo/` (variantes `*Padrao`, `*Rapido`, `*Tanque` + creators)
- Commits: [`ae5f5e4`](https://github.com/UnBArqDsw2026-1-Turma02/2026.01-T02_G6_Battle_Class_Entrega_03/commit/ae5f5e4), [`a3e5c8f`](https://github.com/UnBArqDsw2026-1-Turma02/2026.01-T02_G6_Battle_Class_Entrega_03/commit/a3e5c8f)
- Teste: `tests/factory.test.ts`
- Demo: `npm run demo:factory`

## Validação local

```bash
npm run typecheck
npm test
npm run demo:factory
npm run demo:facade
npm run demo:state
```
