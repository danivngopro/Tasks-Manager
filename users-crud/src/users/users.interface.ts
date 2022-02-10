export interface User {
  id?: string;
  armyId: string;
  firstName: string;
  lastName: string;
  permissions: PermissionType[];
  validationQuestions: {
    questionId: QuestionType;
    answer: string;
  }[];
}

export enum PermissionType {
  Basic = 'BASIC',
  Mada = 'MADA',
  Segel = 'SEGEL',
}

export enum QuestionType {
  Question1 = 'QUESTION1',
} // TODO: enter all possible question types.
