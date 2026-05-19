# Plano de Scaffold + Implementação dos GoFs — Battle Class (Entrega 03)

> Documento de planejamento. Source of truth: **modelagem da Entrega 02** (diagramas
> `docs_entrega_2/assets/diagramas/`). O PDF da Entrega 03 traz esboços ilustrativos
> dos GoFs — quando divergir do modelo, **vale o modelo da Entrega 02**.

---

## 0. Contexto

- O repositório hoje é **somente documentação** (docsify + LaTeX + diagramas). **Não há código.**
- A entrega exige 3 GoFs (**Factory Method**, **Facade**, **State**) com **código rodando**:
  scripts `npm run demo:factory|facade|state` + testes Jest/Vitest (caminho feliz e de erro).
- **Não** é preciso construir o app inteiro (React/Express/Supabase). Basta um **projeto
  TypeScript/Node** focado nos 3 módulos, com estrutura de pastas espelhando a modelagem.
- Regra de sala: todos os 10 membros contribuem nos 3 padrões e nas 3 etapas
  (modelagem, código, execução).

### Stack confirmada (Entrega 02)
- Front: React (SPA, mobile-first) — fora do escopo de código desta entrega.
- Back: **Express + TypeScript** (monólito, Clean/Hexagonal: Interface→Aplicação→Domínio→Infra).
- Persistência: Supabase (Postgres/Auth/Storage) — **mockada** nesta entrega (sem rede real).

---

## 1. Reconciliação modelo × GoF (decisões)

| Item | Decisão |
|---|---|
| `Inimigo*` (Factory) | Entrega 02 não tem classe `Inimigo` (era `Onda.-inimigos: Integer`). Promover a **produto de 1ª classe** — justificativa GoF documentada na wiki §3.1. |
| `Questao*`, `Torre/TorreComum/TorreEspecial`, `Roleta`, `Partida`, `Carteira`, `Onda` | Existem no Diagrama de Classes. Usar **nomes idênticos**. |
| Factory de `Torre` | `Torre` é abstrata com `TorreComum`/`TorreEspecial` no modelo → alvo **natural e prioritário** do Factory Method (melhor que `Inimigo`, que é invenção). |
| Facade subsistemas | Mapear para componentes reais: `MotorRoleta`, `BancoDeQuestoes`, `SistemaEconomia`, `MotorTowerDefense`, `AuthService`, `Ranking` (Diagrama de Componentes). |
| State — nomes | Usar nomes da Máquina de Estados V2, **mas** `Pausada` do PDF não existe → descartar. |
| State — estrutura | ⚠️ **Divergência diagrama × realidade** (ver abaixo): V2 modela Quiz e TD como fluxo **linear acoplado** numa única `Partida`. Na prática são **modos independentes**, ligados só pela `Carteira`. Decisão: **dois contextos State separados** (`SessaoQuiz`, `SessaoTD`). Registrar a correção como sugestão de **Máq. Estados V3** na wiki. |

### Máquina de Estados — DOIS contextos independentes (decisão)

O diagrama V2 desenha um fluxo único `Aguardando início → Fase de quiz → Intervalo →
Fase de tower defense → Vitória/Derrota`. **Isso não reflete o produto**: o jogador pode
responder questões sem jogar o TD, ou jogar o TD sem responder questões (só não progride
sem moedas). O **único acoplamento é a `Carteira`** (quiz credita `MoedaQuestao`; TD gasta).

O estado **`Intervalo`** do V2 (a ponte "exibir saldo" entre quiz e TD) **foi descartado**:
ele só existia para o fluxo linear acoplado; com os contextos separados não há ponte, e
o "gastar moedas entre ondas" já é coberto por `ComprandoTorres`. Registrar a remoção
como parte da sugestão de **Máq. Estados V3** na wiki.

Portanto, **dois `Context` distintos**, cada um com o padrão State:

**Context 1 — `SessaoQuiz`** (modo estudo)
- `ExibindoPergunta` — carrega questão (via `Roleta`)
- `AguardandoResposta` — `onAcerto` credita moeda na `Carteira` + próxima pergunta; `onErro` penaliza + próxima
- `QuizEncerrado` — terminal (sem mais perguntas)

**Context 2 — `SessaoTD`** (modo tower defense)
- `AguardandoInicio` — exibe tela inicial; `iniciar()` → `ComprandoTorres`
- `ComprandoTorres` — `gastarMoedas()` debita `Carteira` (compra/upgrade torre/herói); `pronto()` → `EmBatalha`
- `EmBatalha` — `tick()` spawna inimigos da `Onda`; `ondaVencida` (mais ondas) → `ComprandoTorres`; `todasOndasVencidas` → `Vitoria`; `casteloDestruido` → `Derrota`
- `Vitoria` / `Derrota` — terminais (não transitam)

`Carteira` é dependência compartilhada injetada nos dois contextos — **não** há transição
de um contexto para o outro.

---

## 2. Estrutura de pastas a criar (scaffold)

Espelha o Diagrama de Pacotes do backend e os comprobatórios pedidos no PDF (§4.7).

```
/ (raiz)
├── package.json                 # scripts demo:* + test
├── tsconfig.json
├── vitest.config.ts             # (Vitest — mais simples que Jest p/ TS/ESM)
├── .gitignore                   # node_modules, dist, coverage
├── src/
│   ├── shared/                  # Compartilhado (Errors, types comuns)
│   │   ├── errors.ts
│   │   └── types.ts
│   ├── server/
│   │   ├── factories/           # F1 — Factory Method
│   │   │   ├── inimigo/
│   │   │   │   ├── Inimigo.ts            # interface (Product)
│   │   │   │   ├── InimigoMatematica.ts  # ConcreteProduct
│   │   │   │   ├── InimigoHistoria.ts
│   │   │   │   ├── InimigoBiologia.ts
│   │   │   │   ├── InimigoCreator.ts     # Creator abstrato (+spawn(onda))
│   │   │   │   ├── InimigoMatematicaCreator.ts
│   │   │   │   ├── InimigoHistoriaCreator.ts
│   │   │   │   └── InimigoBiologiaCreator.ts
│   │   │   ├── questao/
│   │   │   │   ├── Questao.ts             # interface
│   │   │   │   ├── QuestaoCreator.ts      # Creator abstrato
│   │   │   │   ├── QuestaoEnemCreator.ts
│   │   │   │   ├── QuestaoFuvestCreator.ts
│   │   │   │   └── QuestaoUnbCreator.ts
│   │   │   └── torre/
│   │   │       ├── Torre.ts               # abstrata (modelo E02)
│   │   │       ├── TorreComum.ts
│   │   │       ├── TorreEspecial.ts
│   │   │       ├── TorreCreator.ts
│   │   │       ├── TorreComumCreator.ts
│   │   │       └── TorreEspecialCreator.ts
│   │   ├── facades/             # F2 — Facade
│   │   │   ├── subsistemas/     # mocks dos componentes E02
│   │   │   │   ├── QuizService.ts          # ~MotorRoleta+BancoDeQuestoes
│   │   │   │   ├── EconomiaService.ts      # ~SistemaEconomia
│   │   │   │   ├── TowerDefenseService.ts  # ~MotorTowerDefense
│   │   │   │   └── PartidaRepository.ts    # mock Supabase
│   │   │   ├── PartidaFacade.ts            # facade principal (finalizarRodada)
│   │   │   └── VestibularServiceFacade.ts  # obterQuestoes(filtros)
│   │   └── routes/
│   │       └── partida.ts        # stub Express opcional (mostra uso da facade)
│   └── state/                   # F3 — State (DOIS contextos independentes)
│       ├── Carteira.ts           # dependência compartilhada (acoplamento único)
│       ├── quiz/
│       │   ├── EstadoQuiz.ts          # interface State (onAcerto/onErro/proxima)
│       │   ├── SessaoQuiz.ts          # Context 1
│       │   ├── ExibindoPergunta.ts
│       │   ├── AguardandoResposta.ts
│       │   └── QuizEncerrado.ts       # terminal
│       └── td/
│           ├── EstadoTD.ts            # interface State (tick/iniciar/pronto)
│           ├── SessaoTD.ts            # Context 2
│           ├── AguardandoInicio.ts
│           ├── ComprandoTorres.ts
│           ├── EmBatalha.ts
│           ├── Vitoria.ts             # terminal
│           └── Derrota.ts             # terminal
├── demos/
│   ├── demo-factory.ts          # npm run demo:factory
│   ├── demo-facade.ts           # npm run demo:facade
│   └── demo-state.ts            # npm run demo:state
└── tests/
    ├── factory.test.ts          # caminho feliz + erro
    ├── facade.test.ts
    └── state.test.ts
```

### package.json (scripts-alvo)
```jsonc
{
  "scripts": {
    "demo:factory": "tsx demos/demo-factory.ts",
    "demo:facade":  "tsx demos/demo-facade.ts",
    "demo:state":   "tsx demos/demo-state.ts",
    "test": "vitest run",
    "test:cov": "vitest run --coverage",
    "typecheck": "tsc --noEmit"
  }
}
```
Dependências: `typescript`, `tsx`, `vitest`, `@vitest/coverage-v8`.

---

## 3. Escopo do scaffold (o que NÃO é implementação)

> ⚠️ **O assistente entrega apenas o esqueleto.** A lógica dos 3 GoFs é escrita pelos
> **membros da equipe** (matriz §4). O scaffold cria os *slots*: pastas, assinaturas de
> interface, classes-stub que compilam mas lançam `NotImplementedError`, comentários
> `// TODO(@membro): ...` e testes `it.todo(...)`. Nada de regra de negócio real.

O que o scaffold **inclui**:
1. **Tooling**: `package.json`, `tsconfig.json` (strict), `.gitignore`, Vitest, scripts.
2. **Contratos compartilhados**: `src/shared/` (tipos + classes de erro) — base comum
   que todos os padrões importam.
3. **Estrutura de pastas** completa (§2) com barrels (`index.ts`) e `.gitkeep`.
4. **Esqueletos dos 3 padrões**: arquivos com **assinaturas** (interfaces, classes,
   métodos) e corpo `throw new NotImplementedError()` + `// TODO(@membro)`.
5. **Placeholders de demo**: `demo-*.ts` que importam o esqueleto e imprimem
   `"TODO: implementar"` (rodam sem erro de compilação).
6. **Harness de teste**: arquivos `*.test.ts` com `it.todo(...)` descrevendo os
   caminhos esperados (feliz + erro) — verde porque `todo` não falha.
7. **Guia de contribuição** (`CONTRIBUTING_GOF.md`): como cada membro preenche seu slot.

O que o scaffold **NÃO inclui** (responsabilidade dos membros, §4):
- Lógica dos Creators / produtos concretos (F1).
- Orquestração da Facade e mocks de subsistema com comportamento (F2).
- Transições reais dos estados / contextos (F3).
- Asserts reais nos testes (membros trocam `it.todo` por `it`).

**Verificação do scaffold:** `npm run typecheck` passa, `npm test` verde (só `todo`),
`npm run demo:*` rodam imprimindo o placeholder. Comprobatórios/wiki (§4.7) ficam fora.

---

## 4. Divisão entre os 10 membros (alinhada à matriz §4.4 do PDF)

Cada pessoa tem 1 tarefa concreta por padrão. Leads coordenam a integração.

| Padrão | Modeling Lead | Code Lead | Demais (código/teste/revisão) |
|---|---|---|---|
| **F1 Factory** | Lucas Oliveira (Diagrama Creator/Product) | João Carlos Lobo (impl. Creators) | Gabriela (revisão + extrai `RoletaCreator`), Thiago (`TorreCreator`), Dannyeclisson (Diag. Componentes), Eric (Diag. Comunicação `spawn`), Marina (Diag. Implantação), Ana (revisão UML+checklist), Otávio (senso crítico+wiki), João Victor (demo:factory) |
| **F2 Facade** | Gabriela Araújo (Diag. Pacotes) | Dannyeclisson (PartidaFacade TS + rotas) | Lucas (revisão multiplicidades), João Lobo (Casos de Uso), Thiago (testes "finalizar rodada"), Marina (AuthFacade variante), Eric (revisão separação camadas), Ana (revisão UML+checklist), Otávio (senso crítico+wiki), João Victor (demo:facade) |
| **F3 State** | Thiago Tonin (Máq. Estados V3 — separa Quiz/TD) | Marina Galdi (`SessaoTD` TS + terminais Vit/Der) | Lucas (co-impl. `SessaoQuiz`), João Lobo (revisão `onAcerto/onErro`), Gabriela (Diag. Sequência Vit/Der), Dannyeclisson (revisão acoplamento via `Carteira`), Eric (transições assíncronas `tick`), Ana (revisão UML+checklist), Otávio (senso crítico+wiki), João Victor (demo:state) |

Mapeamento direto aos arquivos do §2:
- **Lucas/João Lobo** → `src/server/factories/inimigo/*` e `questao/*`.
- **Thiago** → `src/server/factories/torre/*` (+ extra `RoletaCreator` com Gabriela).
- **Gabriela/Dannyeclisson** → `src/server/facades/*` e `subsistemas/*`.
- **Thiago/Marina** → `src/state/*` e `estados/*`.
- **João Victor** → `demos/*`. **Ana** → `tests/*` + checklists. **Otávio** → wiki/histórico.

---

## 5. Cronograma (espelha §4.6 do PDF)

| Sem | Entregável |
|---|---|
| S1 | Scaffold pronto (este plano executado até §3 passo 2-3); branches `feat/factory`, `feat/facade`, `feat/state`; stubs dos 3 `demo:*`. |
| S2 | Modelagem UML V1 dos 3 padrões (Leads); revisão cruzada (Ana). |
| S3 | Código TS dos 3 padrões **rodando** em CI; testes mínimos verdes. |
| S4 | V2 com revisões; integração na `main`; senso crítico (Otávio); checklist. |
| S5 | Vídeo 5 min (João Victor); revisão final; entrega no Moodle. |

---

## 6. Riscos / pontos de atenção

- **Não usar git/remover arquivos sem pedido explícito** (preferência global do usuário).
- Facade **não pode virar God Object** (antipadrão citado no PDF §2.3) — manter
  orquestração fina, lógica nos subsistemas.
- State: estados **terminais** (`Vitoria`/`Derrota`) não devem transitar — testar isso
  como caminho de erro.
- Manter nomes **idênticos** aos do Diagrama de Classes E02 onde a classe existe;
  documentar na wiki toda abstração nova (`Inimigo`) e todo achatamento de composto.
- Supabase **mockado** — nenhuma chamada de rede real nos testes/demos.

---

## 7. Próximo passo imediato

Executar as fases **S0–S1** da §8 (tooling base). O assistente entrega só o esqueleto
(S0–S9); a implementação dos GoFs é dos membros (§4). Pedir confirmação antes de
`npm install` e antes de **qualquer operação git** (preferência global — nenhum
commit/branch feito pelo assistente sem pedido explícito).

---

## 8. Fases do scaffold (commits discretos — SÓ esqueleto)

Cada item é **um commit atômico** que deixa o repo **verde** (`npm run typecheck` +
`npm test`). Nenhum commit contém lógica de GoF — só assinaturas, stubs
`throw new NotImplementedError()`, `// TODO(@membro)` e `it.todo(...)`.
Conventional Commits. Tudo na `main` (o scaffold é base comum); as branches
`feat/factory|facade|state` são criadas **depois**, pelos membros, para preencher.

### Fase 0 — Tooling (base do projeto)

| # | Commit | Conteúdo | Verde após |
|---|---|---|---|
| **S0** | `chore: init node + typescript project` | `package.json`, `tsconfig.json` (strict), `.gitignore` | `npm run typecheck` (vazio → ok) |
| **S1** | `chore: add vitest + npm scripts` | `vitest.config.ts`, scripts `typecheck/test/test:cov/demo:*`, devDeps (`typescript tsx vitest @vitest/coverage-v8`) | `npm test` (0 testes → ok) |

### Fase 1 — Contratos + estrutura

| # | Commit | Conteúdo | Verde após |
|---|---|---|---|
| **S2** | `feat(shared): tipos e erros comuns` | `src/shared/types.ts` (`Materia`, `Banca`, `RespostaDTO`), `src/shared/errors.ts` incl. **`NotImplementedError`** usado por todos os stubs | typecheck |
| **S3** | `chore: estrutura de pastas + barrels` | todas as pastas da §2 com `index.ts` (barrel vazio) e `.gitkeep` | typecheck |

### Fase 2 — Esqueleto dos 3 padrões (assinaturas + stubs)

| # | Commit | Conteúdo (só assinatura + `throw NotImplementedError` + TODO) | Verde após |
|---|---|---|---|
| **S4** | `feat(factory): esqueleto Factory Method` | `inimigo/`, `questao/`, `torre/`: interfaces, Creators abstratos e ConcreteProducts/Creators **vazios** (métodos lançam `NotImplementedError`) | typecheck |
| **S5** | `feat(facade): esqueleto Facade` | interfaces dos subsistemas + `PartidaFacade`/`VestibularServiceFacade` com métodos stub; `routes/partida.ts` stub | typecheck |
| **S6** | `feat(state): esqueleto dos 2 contextos` | `Carteira` (assinatura), `quiz/` e `td/`: interfaces `EstadoQuiz`/`EstadoTD`, Contexts e estados como classes stub | typecheck |

### Fase 3 — Harness de demo e teste (placeholders)

| # | Commit | Conteúdo | Verde após |
|---|---|---|---|
| **S7** | `chore: demos placeholder` | `demos/demo-factory|facade|state.ts` importam o esqueleto e imprimem `"TODO: implementar — ver §4"` | `npm run demo:*` rodam |
| **S8** | `test: harness com it.todo` | `tests/{factory,facade,state}.test.ts` com `describe` + `it.todo(...)` listando caminho feliz e de erro esperados | `npm test` verde (todos `todo`) |

### Fase 4 — Onboarding

| # | Commit | Conteúdo |
|---|---|---|
| **S9** | `docs: guia de contribuição dos GoFs` | `CONTRIBUTING_GOF.md`: mapa slot→membro (§4), como remover `NotImplementedError`/`it.todo`, padrão de branch/commit, critério de "rodando" |

**Após S9 o scaffold está completo.** Os membros então: criam `feat/factory|facade|state`,
removem os `NotImplementedError`, trocam `it.todo`→`it` com asserts, e fazem os commits
de **implementação** (fora deste plano — cada um responsável pelo seu slot da §4).

**Atomicidade:** S0→S1→S2→S3 são sequenciais (base). S4, S5, S6 são **independentes**
entre si (esqueletos não se importam). S7/S8 dependem de S4–S6. Total: **10 commits**
de scaffold, todos verdes.
