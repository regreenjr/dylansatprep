'use client';

import { useState, useEffect, use } from 'react';
import Link from 'next/link';
import QuestionCard from '@/components/QuestionCard';
import ResultsSummary from '@/components/ResultsSummary';
import { categories } from '@/data/dylanScores';
import { questions, getQuestionsByCategory, shuffleQuestions } from '@/data/questions';
import { Question, Progress } from '@/data/types';

interface PracticePageProps {
  params: Promise<{ category: string }>;
}

export default function PracticePage({ params }: PracticePageProps) {
  const resolvedParams = use(params);
  const categoryId = resolvedParams.category;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [categoryQuestions, setCategoryQuestions] = useState<Question[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const category = categories.find(c => c.id === categoryId);

  useEffect(() => {
    // Get and shuffle questions for this category
    const qs = getQuestionsByCategory(categoryId);
    const shuffled = shuffleQuestions(qs);
    // Limit to 10 questions per session
    const limitedQuestions = shuffled.slice(0, 10);
    setCategoryQuestions(limitedQuestions);
    setIsLoading(false);
  }, [categoryId]);

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setCorrectAnswers(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < categoryQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Save progress to localStorage
      const savedProgress = localStorage.getItem('satPrepProgress');
      const progress: Progress[] = savedProgress ? JSON.parse(savedProgress) : [];

      const existingIndex = progress.findIndex(p => p.category === categoryId);
      const newProgress: Progress = {
        category: categoryId,
        questionsAnswered: (existingIndex >= 0 ? progress[existingIndex].questionsAnswered : 0) + categoryQuestions.length,
        correctAnswers: (existingIndex >= 0 ? progress[existingIndex].correctAnswers : 0) + correctAnswers,
        lastPracticed: new Date().toISOString(),
        streakDays: 1
      };

      if (existingIndex >= 0) {
        progress[existingIndex] = newProgress;
      } else {
        progress.push(newProgress);
      }

      localStorage.setItem('satPrepProgress', JSON.stringify(progress));
      setIsComplete(true);
    }
  };

  const handleRetry = () => {
    const qs = getQuestionsByCategory(categoryId);
    const shuffled = shuffleQuestions(qs);
    // Get a fresh set of 10 random questions
    const limitedQuestions = shuffled.slice(0, 10);
    setCategoryQuestions(limitedQuestions);
    setCurrentQuestionIndex(0);
    setCorrectAnswers(0);
    setIsComplete(false);
  };

  if (!category) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Category not found</h1>
          <Link href="/" className="text-blue-600 hover:underline">
            Return to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading questions...</p>
        </div>
      </div>
    );
  }

  if (categoryQuestions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Coming Soon!</h1>
          <p className="text-gray-600 mb-6">Questions for {category.name} are being prepared.</p>
          <Link
            href="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
          >
            Return to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Dashboard
            </Link>
            <div className="text-center">
              <h1 className="font-bold text-gray-900">{category.name}</h1>
              <p className="text-sm text-gray-500">{category.section === 'reading-writing' ? 'Reading & Writing' : 'Math'}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Score</p>
              <p className="font-semibold text-gray-900">{correctAnswers}/{categoryQuestions.length}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!isComplete ? (
          <>
            {/* Skills being tested */}
            <div className="mb-6 p-4 bg-white rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-700 mb-2">Skills in this section:</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.slice(0, 3).map((skill, index) => (
                  <span key={index} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                    {skill.split(' - ')[0]}
                  </span>
                ))}
              </div>
            </div>

            {/* Question */}
            <QuestionCard
              question={categoryQuestions[currentQuestionIndex]}
              questionNumber={currentQuestionIndex + 1}
              totalQuestions={categoryQuestions.length}
              onAnswer={handleAnswer}
              onNext={handleNext}
            />
          </>
        ) : (
          <ResultsSummary
            categoryName={category.name}
            totalQuestions={categoryQuestions.length}
            correctAnswers={correctAnswers}
            onRetry={handleRetry}
          />
        )}
      </main>
    </div>
  );
}
