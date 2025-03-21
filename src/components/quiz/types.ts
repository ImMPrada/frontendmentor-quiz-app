export interface OptionProps {
  literal: string;
  content: string;
  onClick: (content: string) => void;
  isSelected: boolean;
  isTheAnswer: boolean;
  isCorrect?: boolean;
  disabled: boolean;
}

export interface ProgressBarProps {
  progress: number;
}

export interface QuestionProps {
  question: string;
  number: number;
  total: number;
  progress: number;
}
