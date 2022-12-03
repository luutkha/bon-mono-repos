import { Word } from '../../../../types/common.type';

export interface SplashCardProps {
  data: Word;
  type: 'En' | 'Vi';
  isSelected: boolean;
  otherSideId: number;
  isMatched: boolean | undefined;
}

export interface SplashCardSettings {
  target: number;
}

export interface SplashCardAnalysis {
  wrong: number;
  streak: number;
  bestStreak: number;
}
