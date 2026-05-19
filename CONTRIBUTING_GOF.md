# Guia de Contribuição — GoFs (Entrega 03)

> Parte A do plano (`plans/00_scaffold_e_gofs.md`) está **completa e rodando**:
> os 3 GoFs implementados, demos executáveis e 11 testes verdes. Este guia explica
> a estrutura para quem for **revisar, estender ou documentar** sua contribuição.

## Como rodar

```bash
npm install
npm run typecheck     # tsc --noEmit
npm test              # 11 testes (Vitest) — caminho feliz + erro
npm run demo:factory  # F1 — inimigos/questões/torres
npm run demo:facade   # F2 — PartidaFacade + VestibularServiceFacade
npm run demo:state    # F3 — SessaoQuiz + SessaoTD
```

## Onde está cada padrão

| GoF | Pasta | Pontos-chave |
|---|---|---|
| **F1 Factory Method** | `src/server/factories/` | `inimigo/` (Creator abstrato `spawn` escala HP por onda), `questao/` (Creator por banca), `torre/` (modelo E02) |
| **F2 Facade** | `src/server/facades/` | `PartidaFacade.finalizarRodada` orquestra 4 subsistemas (`subsistemas/`); `VestibularServiceFacade` agrega bancas |
| **F3 State** | `src/state/` | **2 contextos independentes**: `quiz/SessaoQuiz`, `td/SessaoTD`; acoplados só por `Carteira` |

## Regras para contribuir

1. **Branch por padrão**: `feat/factory`, `feat/facade`, `feat/state` (a partir de `main`).
2. **Conventional Commits** em PT: `feat(factory): ...`, `test(state): ...`.
   Rodapé obrigatório `Co-Authored-By:` conforme os comprovatórios da §4 do plano.
3. **Nunca quebre o verde**: todo PR roda `npm run typecheck && npm test`.
4. **Caminho feliz + caminho de erro** para qualquer lógica nova (padrão dos testes
   atuais em `tests/`). Stubs async (Facade) usam `await expect(...).rejects`.
5. **Domínio = nomes da Entrega 02**. Abstração nova (`Inimigo`) e a separação
   Quiz/TD (Máq. Estados V3) precisam de nota na wiki — ver §1 do plano.
6. **Não** adicionar dependência de React/Express aqui: este código é o
   `@battle/core` puro que a Parte B (produto) vai consumir.

## Mapa slot → responsável (matriz §4 do plano)

- **F1**: Lucas O. (modelagem Creator/Product), João Lobo (impl. Creators),
  Thiago (`torre/`), Gabriela (revisão + `Roleta` extra).
- **F2**: Gabriela (modelagem pacotes), Dannyeclisson (`PartidaFacade` + rotas),
  Thiago (testes "finalizar rodada"), Marina (`AuthFacade` extra).
- **F3**: Thiago (Máq. Estados V3), Marina (`SessaoTD` + terminais),
  Lucas (`SessaoQuiz`), Dannyeclisson (revisão acoplamento via `Carteira`).
- **Transversais**: Ana (revisão UML + checklist), João Victor (demos + vídeo),
  Otávio (wiki + senso crítico + histórico).

## Próximo (Parte B)

Produto jogável no navegador — só inicia após esta Parte A estar mergeada.
Ver `plans/00_scaffold_e_gofs.md` §§9–14.
