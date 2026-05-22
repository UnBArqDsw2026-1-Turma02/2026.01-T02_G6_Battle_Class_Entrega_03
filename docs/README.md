# Battle Class

> **Código da Disciplina:** FGA0208 — Arquitetura e Desenho de Software
> **Número do Grupo:** 06
> **Turma:** T02 · 2026.1
> **Entrega:** 03 — Padrões de Projeto (GoF)

---

## Sobre

O **Battle Class** é o projeto do Grupo 6 na disciplina de Arquitetura e Desenho de Software (UnB/FGA · 2026.1) — uma plataforma web *mobile-first* de quiz para vestibulares com mecânica de *Tower Defense*. Esta documentação reúne os artefatos da **Entrega 03**, focada nos **Padrões de Projeto GoF**: um Criacional (**Factory Method**), um Estrutural (**Facade**) e um Comportamental (**State**), com modelagem e implementação rodando.

Use o menu lateral para navegar entre as seções. A barra de busca no topo da sidebar permite encontrar qualquer termo em todas as páginas.

---

## Seções principais

| Seção | Conteúdo |
| ----- | -------- |
| [Projeto](Projeto/Projeto.md) | Visão geral, objetivos e escopo |
| [3. Padrões de Projeto](PadroesDeProjeto/3.PadroesDeProjeto.md) | Visão geral do módulo GoF |
| [3.1. GoFs Criacionais — Factory Method](PadroesDeProjeto/3.1.GoFsCriacionais.md) | Intenção, senso crítico, implementação |
| [3.2. GoFs Estruturais — Facade](PadroesDeProjeto/3.2.GoFsEstruturais.md) | Intenção, senso crítico, implementação |
| [3.3. GoFs Comportamentais — State](PadroesDeProjeto/3.3.GoFsComportamentais.md) | Intenção, senso crítico, implementação |
| [3.4. Participações](PadroesDeProjeto/3.4.ParticipacoesPadroes.md) | Contribuição da equipe + rastreabilidade |
| [3.5. Iniciativas Extras](PadroesDeProjeto/3.5.IniciativasExtras.md) | Trabalhos adicionais |

---

## Equipe

<div class="bc-team-grid">
  <div class="bc-team-card">
    <img src="https://github.com/anaelisaramos.png" alt="Integrante">
    <div>
      <div class="bc-team-name">Ana Elisa Ramos</div>
      <div class="bc-team-role">231011060</div>
      <a href="https://github.com/anaelisaramos" style="font-size:12px; margin-top:-10px; color:#2B6BE6">@anaelisaramos</a>
    </div>
  </div>
  <div class="bc-team-card">
    <img src="https://github.com/Dannyeclisson.png" alt="Integrante">
    <div>
      <div class="bc-team-name">Dannyeclisson Costa</div>
      <div class="bc-team-role">211061592</div>
      <a href="https://github.com/Dannyeclisson" style="font-size:12px; margin-top:-10px; color:#2B6BE6">@Dannyeclisson</a>
    </div>
</div>
  <div class="bc-team-card">
    <img src="https://github.com/eric-kingu.png" alt="Integrante">
    <div>
      <div class="bc-team-name">Eric Akio Nishimura</div>
      <div class="bc-team-role">190105895</div>
      <a href="https://github.com/eric-kingu" style="font-size:12px; margin-top:-10px; color:#2B6BE6">@eric-kingu</a>
    </div>
  </div>
   <div class="bc-team-card">
    <img src="https://github.com/GabrielaTiago.png" alt="Integrante">
    <div>
      <div class="bc-team-name">Gabriela Tiago de Araújo</div>
      <div class="bc-team-role">190028475</div>
      <a href="https://github.com/GabrielaTiago" style="font-size:12px; margin-top:-10px; color:#2B6BE6">@GabrielaTiago</a>
    </div>
  </div>
   <div class="bc-team-card">
    <img src="https://github.com/joaolobo10.png" alt="Integrante">
    <div>
      <div class="bc-team-name">João Carlos Lobo</div>
      <div class="bc-team-role">231012245</div>
      <a href="https://github.com/joaolobo10" style="font-size:12px; margin-top:-10px; color:#2B6BE6">@joaolobo10</a>
    </div>
  </div>
   <div class="bc-team-card">
    <img src="https://github.com/JoaoSapiencia.png" alt="Integrante">
    <div>
      <div class="bc-team-name">João Victor Sapiência</div>
      <div class="bc-team-role">231026400</div>
      <a href="https://github.com/JoaoSapiencia" style="font-size:12px; margin-top:-10px; color:#2B6BE6">@JoaoSapiencia</a>
    </div>
  </div>
   <div class="bc-team-card">
    <img src="https://github.com/LucasOliveiraDiasMarquesFerreira.png" alt="Integrante">
    <div>
      <div class="bc-team-name">Lucas Oliveira Dias Marques Ferreira</div>
      <div class="bc-team-role">211062787</div>
      <a href="https://github.com/LucasOliveiraDiasMarquesFerreira" style="font-size:12px; margin-top:-10px; color:#2B6BE6">@LucasOliveiraDiasMarquesFerreira</a>
    </div>
  </div>
   <div class="bc-team-card">
    <img src="https://github.com/MarinaGaldi.png" alt="Integrante">
    <div>
      <div class="bc-team-name">Marina Agostini Galdi</div>
      <div class="bc-team-role">231035722</div>
      <a href="https://github.com/MarinaGaldi" style="font-size:12px; margin-top:-10px; color:#2B6BE6">@MarinaGaldi</a>
    </div>
  </div>
  <div class="bc-team-card">
    <img src="https://github.com/knz13.png" alt="Integrante">
    <div>
      <div class="bc-team-name">Otávio Oliveira de Maya Viana</div>
      <div class="bc-team-role">211029503</div>
      <a href="https://github.com/knz13" style="font-size:12px; margin-top:-10px; color:#2B6BE6">@knz13</a>
    </div>
  </div>
  <div class="bc-team-card">
    <img src="https://github.com/audittmega.png" alt="Integrante">
    <div>
      <div class="bc-team-name">Thiago Tonin</div>
      <div class="bc-team-role">221022453</div>
      <a href="https://github.com/audittmega" style="font-size:12px; margin-top:-10px; color:#2B6BE6">@audittmega</a>
    </div>
  </div>
</div>

---

## Há algo a ser executado?

(X) SIM &nbsp;&nbsp; ( ) NÃO

O código dos três padrões roda em TypeScript. Na raiz do projeto:

```bash
npm install
npm test            # bateria Vitest dos 3 padrões
npm run demo:factory  # Factory Method
npm run demo:facade   # Facade
npm run demo:state    # State
```
