export interface Question {
  id: string;
  category: string;
  subcategory: string;
  difficulty: 'easy' | 'medium' | 'hard';
  question: string;
  passage?: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  skill: string;
  tip?: string;
}

export interface Category {
  id: string;
  name: string;
  section: 'reading-writing' | 'math';
  description: string;
  icon: string;
  currentScore: string;
  targetScore: string;
  percentOfTest: string;
  questionsCount: string;
  priority: 'high' | 'medium' | 'low';
  skills: string[];
  color: string;
}

export interface Progress {
  category: string;
  questionsAnswered: number;
  correctAnswers: number;
  lastPracticed: string;
  streakDays: number;
}

export interface DylanScores {
  totalScore: number;
  readingWriting: number;
  math: number;
  testDate: string;
  readingWritingBreakdown: {
    informationAndIdeas: string;
    craftAndStructure: string;
    expressionOfIdeas: string;
    standardEnglishConventions: string;
  };
  mathBreakdown: {
    algebra: string;
    advancedMath: string;
    problemSolvingDataAnalysis: string;
    geometryTrigonometry: string;
  };
}
