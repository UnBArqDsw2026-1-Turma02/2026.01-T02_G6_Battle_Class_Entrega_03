// Tipos comuns compartilhados pelos três padrões. Nomes alinhados ao
// Diagrama de Classes da Entrega 02 onde a entidade já existe.

/** Matéria/tema do vestibular — eixo do Factory de Inimigo/Questao (F1). */
export type Materia = 'matematica' | 'historia' | 'biologia';

/** Banca do vestibular — eixo do QuestaoCreator (F1) e VestibularFacade (F2). */
export type Banca = 'ENEM' | 'FUVEST' | 'UNB';

/** Nível de dificuldade (Diagrama de Classes E02: `Questao.-dificuldade: Nivel`). */
export type Nivel = 'facil' | 'medio' | 'dificil';

/** Resposta de uma questão enviada pelo cliente (usado pela PartidaFacade — F2). */
export interface RespostaDTO {
  readonly questaoId: string;
  /** Letra marcada pelo estudante (A–E). */
  readonly alternativa: string;
}

/** Filtros de busca de questões (VestibularServiceFacade — F2). */
export interface FiltroQuestoes {
  readonly materia: Materia;
  readonly banca?: Banca;
  readonly nivel?: Nivel;
  readonly limite?: number;
}
