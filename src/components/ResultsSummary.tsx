'use client';

import Link from 'next/link';

interface ResultsSummaryProps {
  categoryName: string;
  totalQuestions: number;
  correctAnswers: number;
  onRetry: () => void;
}

export default function ResultsSummary({
  categoryName,
  totalQuestions,
  correctAnswers,
  onRetry
}: ResultsSummaryProps) {
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);
  const incorrectAnswers = totalQuestions - correctAnswers;

  const getMessage = () => {
    if (percentage >= 90) return { text: "Outstanding! You've mastered this section!", emoji: "star", color: "green" };
    if (percentage >= 70) return { text: "Great job! Keep practicing to reach perfection!", emoji: "thumbsup", color: "blue" };
    if (percentage >= 50) return { text: "Good effort! More practice will help you improve.", emoji: "muscle", color: "amber" };
    return { text: "Keep going! Every practice session makes you stronger.", emoji: "rocket", color: "red" };
  };

  const message = getMessage();

  const colorClasses = {
    green: { bg: 'bg-green-50', text: 'text-green-700', ring: 'ring-green-500', progress: 'bg-green-500' },
    blue: { bg: 'bg-blue-50', text: 'text-blue-700', ring: 'ring-blue-500', progress: 'bg-blue-500' },
    amber: { bg: 'bg-amber-50', text: 'text-amber-700', ring: 'ring-amber-500', progress: 'bg-amber-500' },
    red: { bg: 'bg-red-50', text: 'text-red-700', ring: 'ring-red-500', progress: 'bg-red-500' }
  };

  const colors = colorClasses[message.color as keyof typeof colorClasses];

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className={`${colors.bg} px-6 py-8 text-center`}>
        <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full ${colors.bg} ring-4 ${colors.ring} mb-4`}>
          <span className="text-5xl font-bold ${colors.text}">{percentage}%</span>
        </div>
        <h2 className={`text-2xl font-bold ${colors.text} mb-2`}>{message.text}</h2>
        <p className="text-gray-600">{categoryName} Practice Complete</p>
      </div>

      {/* Stats */}
      <div className="p-6">
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center p-4 bg-gray-50 rounded-xl">
            <div className="text-3xl font-bold text-gray-900">{totalQuestions}</div>
            <div className="text-sm text-gray-500">Questions</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-xl">
            <div className="text-3xl font-bold text-green-600">{correctAnswers}</div>
            <div className="text-sm text-gray-500">Correct</div>
          </div>
          <div className="text-center p-4 bg-red-50 rounded-xl">
            <div className="text-3xl font-bold text-red-600">{incorrectAnswers}</div>
            <div className="text-sm text-gray-500">Incorrect</div>
          </div>
        </div>

        {/* Progress visualization */}
        <div className="mb-6">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-600">Accuracy</span>
            <span className="font-semibold">{percentage}%</span>
          </div>
          <div className="w-full h-4 bg-gray-100 rounded-full overflow-hidden">
            <div
              className={`h-full ${colors.progress} rounded-full transition-all duration-1000`}
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>

        {/* Tips based on performance */}
        <div className="bg-blue-50 p-4 rounded-xl mb-6">
          <h3 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            Next Steps
          </h3>
          <ul className="text-sm text-blue-700 space-y-1">
            {percentage < 70 && (
              <li>• Review the explanations for questions you missed</li>
            )}
            {percentage < 90 && (
              <li>• Practice this section daily for best results</li>
            )}
            <li>• Focus on understanding the reasoning, not just memorizing answers</li>
            <li>• Take notes on patterns you notice in the questions</li>
          </ul>
        </div>

        {/* Action buttons */}
        <div className="flex gap-3">
          <button
            onClick={onRetry}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Practice More Questions
          </button>
          <Link
            href="/"
            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
