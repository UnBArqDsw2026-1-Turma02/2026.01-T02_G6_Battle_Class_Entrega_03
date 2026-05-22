# Projeto

**Battle Class** é uma plataforma web _mobile first_ onde o jogador responde perguntas de múltipla escolha para acumular moedas de estudo e, com elas, enfrenta ondas de inimigos em partidas de _tower defense_.

| Camada         | Tecnologia              |
| -------------- | ----------------------- |
| Frontend       | React (Mobile First)    |
| Backend        | Express + TypeScript    |
| Banco de Dados | PostgreSQL via Supabase |

## Entrega 03 — Padrões de Projeto (GoF)

Nesta entrega, o Battle Class aplica três padrões *Gang of Four*, com modelagem e implementação rodando em TypeScript:

| Categoria | Padrão | Onde aparece |
| --------- | ------ | ------------ |
| Criacional | [Factory Method](PadroesDeProjeto/3.1.GoFsCriacionais.md) | Famílias de `Inimigo`, `Questao` e `Torre` + `CreatorRegistry` |
| Estrutural | [Facade](PadroesDeProjeto/3.2.GoFsEstruturais.md) | `PartidaFacade`, `VestibularServiceFacade`, `AuthFacade`, `RankingFacade` |
| Comportamental | [State](PadroesDeProjeto/3.3.GoFsComportamentais.md) | `Partida`, `SessaoQuiz` e `SessaoTD` (máquina de estados) |

A documentação completa de cada padrão (intenção, senso crítico, rastreabilidade com a Entrega 02, histórico de versões e referências) está no módulo [Padrões de Projeto](PadroesDeProjeto/3.PadroesDeProjeto.md).
