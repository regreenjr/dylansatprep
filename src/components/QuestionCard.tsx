'use client';

import { useState } from 'react';
import { Question } from '@/data/types';

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (isCorrect: boolean) => void;
  onNext: () => void;
}

export default function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
  onNext
}: QuestionCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleSelectAnswer = (index: number) => {
    if (selectedAnswer !== null) return; // Already answered
    setSelectedAnswer(index);
    setShowExplanation(true);
    onAnswer(index === question.correctAnswer);
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    setShowExplanation(false);
    onNext();
  };

  const difficultyColors = {
    easy: 'bg-green-100 text-green-700',
    medium: 'bg-amber-100 text-amber-700',
    hard: 'bg-red-100 text-red-700'
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
        <div className="flex items-center justify-between text-white">
          <span className="font-semibold">
            Question {questionNumber} of {totalQuestions}
          </span>
          <div className="flex items-center gap-3">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${difficultyColors[question.difficulty]}`}>
              {question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1)}
            </span>
            <span className="text-blue-100 text-sm">{question.subcategory}</span>
          </div>
        </div>
        {/* Progress bar */}
        <div className="mt-3 w-full h-2 bg-blue-400/30 rounded-full">
          <div
            className="h-full bg-white rounded-full transition-all duration-300"
            style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Passage if exists */}
        {question.passage && (
          <div className="mb-6 p-4 bg-gray-50 rounded-xl border-l-4 border-blue-500">
            <p className="text-gray-700 leading-relaxed italic">{question.passage}</p>
          </div>
        )}

        {/* Question */}
        <h2 className="text-xl font-semibold text-gray-900 mb-6">{question.question}</h2>

        {/* Options */}
        <div className="space-y-3 mb-6">
          {question.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = index === question.correctAnswer;
            const showResult = selectedAnswer !== null;

            let optionClasses = 'w-full p-4 rounded-xl border-2 text-left transition-all flex items-center gap-4 ';

            if (!showResult) {
              optionClasses += 'border-gray-200 hover:border-blue-400 hover:bg-blue-50 cursor-pointer';
            } else if (isCorrect) {
              optionClasses += 'border-green-500 bg-green-50';
            } else if (isSelected && !isCorrect) {
              optionClasses += 'border-red-500 bg-red-50';
            } else {
              optionClasses += 'border-gray-200 opacity-60';
            }

            return (
              <button
                key={index}
                onClick={() => handleSelectAnswer(index)}
                disabled={selectedAnswer !== null}
                className={optionClasses}
              >
                <span className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm ${
                  showResult && isCorrect
                    ? 'bg-green-500 text-white'
                    : showResult && isSelected && !isCorrect
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {String.fromCharCode(65 + index)}
                </span>
                <span className={`flex-1 ${showResult && isCorrect ? 'font-semibold text-green-700' : showResult && isSelected && !isCorrect ? 'text-red-700' : 'text-gray-700'}`}>
                  {option}
                </span>
                {showResult && isCorrect && (
                  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
                {showResult && isSelected && !isCorrect && (
                  <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {showExplanation && (
          <div className={`p-5 rounded-xl mb-6 ${
            selectedAnswer === question.correctAnswer
              ? 'bg-green-50 border border-green-200'
              : 'bg-amber-50 border border-amber-200'
          }`}>
            <div className="flex items-start gap-3">
              <div className={`p-2 rounded-full ${
                selectedAnswer === question.correctAnswer
                  ? 'bg-green-100'
                  : 'bg-amber-100'
              }`}>
                {selectedAnswer === question.correctAnswer ? (
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                )}
              </div>
              <div className="flex-1">
                <h4 className={`font-semibold mb-2 ${
                  selectedAnswer === question.correctAnswer
                    ? 'text-green-800'
                    : 'text-amber-800'
                }`}>
                  {selectedAnswer === question.correctAnswer ? 'Correct!' : 'Not quite - here\'s why:'}
                </h4>
                <p className="text-gray-700 mb-3">{question.explanation}</p>
                {question.tip && (
                  <div className="mt-3 p-3 bg-white/70 rounded-lg">
                    <p className="text-sm">
                      <span className="font-semibold text-blue-600">Pro Tip:</span>{' '}
                      <span className="text-gray-600">{question.tip}</span>
                    </p>
                  </div>
                )}
                <p className="text-sm text-gray-500 mt-2">
                  <span className="font-medium">Skill tested:</span> {question.skill}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Next button */}
        {showExplanation && (
          <button
            onClick={handleNext}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
          >
            {questionNumber < totalQuestions ? (
              <>
                Next Question
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </>
            ) : (
              <>
                See Results
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
