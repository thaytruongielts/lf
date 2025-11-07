export interface Sentence {
  id: string;
  text: string;
}

export interface Paragraph {
  id: string;
  sentences: Sentence[];
}

export interface Question {
  id: number;
  text: string;
  questionText: string; // For display (e.g., "Questions 1-4...")
  correctLocation: string;
}

export interface AnswerState {
  questionId: number;
  userLocation: string;
  isCorrect: boolean;
  timeSpent: number; // in seconds
}

export enum AppState {
  WELCOME = 'WELCOME',
  QUIZ = 'QUIZ',
  SUMMARY = 'SUMMARY',
}