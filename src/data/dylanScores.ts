import { DylanScores, Category } from './types';

export const dylanScores: DylanScores = {
  totalScore: 1360,
  readingWriting: 650,
  math: 710,
  testDate: "December 6, 2025",
  readingWritingBreakdown: {
    informationAndIdeas: "610-670",
    craftAndStructure: "550-600",
    expressionOfIdeas: "610-670",
    standardEnglishConventions: "610-670",
  },
  mathBreakdown: {
    algebra: "680-800",
    advancedMath: "680-800",
    problemSolvingDataAnalysis: "610-670",
    geometryTrigonometry: "680-800",
  },
};

export const categories: Category[] = [
  // Reading & Writing Categories - Prioritized by score
  {
    id: "craft-and-structure",
    name: "Craft and Structure",
    section: "reading-writing",
    description: "Words in context, text structure and purpose, cross-text connections",
    icon: "puzzle",
    currentScore: "550-600",
    targetScore: "700+",
    percentOfTest: "28%",
    questionsCount: "13-15",
    priority: "high",
    color: "red",
    skills: [
      "Words in Context - determining meaning from context clues",
      "Text Structure and Purpose - understanding how texts are organized",
      "Cross-Text Connections - analyzing relationships between paired passages"
    ]
  },
  {
    id: "information-and-ideas",
    name: "Information and Ideas",
    section: "reading-writing",
    description: "Central ideas, command of evidence, inferences",
    icon: "lightbulb",
    currentScore: "610-670",
    targetScore: "700+",
    percentOfTest: "26%",
    questionsCount: "12-14",
    priority: "medium",
    color: "yellow",
    skills: [
      "Central Ideas and Details - identifying main themes",
      "Command of Evidence (Textual) - using text to support answers",
      "Command of Evidence (Quantitative) - interpreting graphs and data",
      "Inferences - drawing logical conclusions"
    ]
  },
  {
    id: "expression-of-ideas",
    name: "Expression of Ideas",
    section: "reading-writing",
    description: "Rhetorical synthesis, transitions",
    icon: "edit",
    currentScore: "610-670",
    targetScore: "700+",
    percentOfTest: "20%",
    questionsCount: "8-12",
    priority: "medium",
    color: "yellow",
    skills: [
      "Rhetorical Synthesis - combining information effectively",
      "Transitions - connecting ideas smoothly"
    ]
  },
  {
    id: "standard-english-conventions",
    name: "Standard English Conventions",
    section: "reading-writing",
    description: "Grammar, punctuation, sentence structure",
    icon: "check",
    currentScore: "610-670",
    targetScore: "700+",
    percentOfTest: "26%",
    questionsCount: "11-15",
    priority: "medium",
    color: "yellow",
    skills: [
      "Boundaries - sentence structure and punctuation",
      "Form, Structure, and Sense - verb tenses, pronoun agreement, modifiers"
    ]
  },
  // Math Categories - Prioritized by score
  {
    id: "problem-solving-data-analysis",
    name: "Problem Solving & Data Analysis",
    section: "math",
    description: "Ratios, percentages, probability, statistics",
    icon: "chart",
    currentScore: "610-670",
    targetScore: "750+",
    percentOfTest: "15%",
    questionsCount: "5-7",
    priority: "high",
    color: "red",
    skills: [
      "Ratios, rates, and proportional relationships",
      "Percentages and percent change",
      "One-variable data distributions",
      "Two-variable data and scatterplots",
      "Probability and conditional probability",
      "Statistical inference and margin of error",
      "Evaluating statistical claims"
    ]
  },
  {
    id: "algebra",
    name: "Algebra",
    section: "math",
    description: "Linear equations, systems, functions",
    icon: "function",
    currentScore: "680-800",
    targetScore: "800",
    percentOfTest: "35%",
    questionsCount: "13-15",
    priority: "low",
    color: "green",
    skills: [
      "Linear equations in one variable",
      "Linear equations in two variables",
      "Linear functions",
      "Systems of two linear equations",
      "Linear inequalities"
    ]
  },
  {
    id: "advanced-math",
    name: "Advanced Math",
    section: "math",
    description: "Quadratics, polynomials, exponentials",
    icon: "calculator",
    currentScore: "680-800",
    targetScore: "800",
    percentOfTest: "35%",
    questionsCount: "13-15",
    priority: "low",
    color: "green",
    skills: [
      "Equivalent expressions",
      "Nonlinear equations in one variable",
      "Systems of equations (one linear, one nonlinear)",
      "Nonlinear functions"
    ]
  },
  {
    id: "geometry-trigonometry",
    name: "Geometry & Trigonometry",
    section: "math",
    description: "Area, volume, triangles, circles, trig",
    icon: "triangle",
    currentScore: "680-800",
    targetScore: "800",
    percentOfTest: "15%",
    questionsCount: "5-7",
    priority: "low",
    color: "green",
    skills: [
      "Area and volume",
      "Lines, angles, and triangles",
      "Right triangles and trigonometry",
      "Circles"
    ]
  }
];
