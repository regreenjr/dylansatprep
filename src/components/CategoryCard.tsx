'use client';

import Link from 'next/link';
import { Category } from '@/data/types';
import { ReactElement } from 'react';

interface CategoryCardProps {
  category: Category;
  questionsAnswered?: number;
  correctAnswers?: number;
}

const icons: Record<string, ReactElement> = {
  puzzle: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
    </svg>
  ),
  lightbulb: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  edit: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
  ),
  check: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  chart: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  function: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
    </svg>
  ),
  calculator: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  triangle: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4l8 16H4l8-16z" />
    </svg>
  )
};

const priorityColors = {
  high: {
    bg: 'bg-red-50',
    border: 'border-red-200',
    badge: 'bg-red-100 text-red-700',
    icon: 'bg-red-100 text-red-600',
    button: 'bg-red-600 hover:bg-red-700'
  },
  medium: {
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    badge: 'bg-amber-100 text-amber-700',
    icon: 'bg-amber-100 text-amber-600',
    button: 'bg-amber-600 hover:bg-amber-700'
  },
  low: {
    bg: 'bg-green-50',
    border: 'border-green-200',
    badge: 'bg-green-100 text-green-700',
    icon: 'bg-green-100 text-green-600',
    button: 'bg-green-600 hover:bg-green-700'
  }
};

export default function CategoryCard({ category, questionsAnswered = 0, correctAnswers = 0 }: CategoryCardProps) {
  const colors = priorityColors[category.priority];
  const accuracy = questionsAnswered > 0 ? Math.round((correctAnswers / questionsAnswered) * 100) : 0;

  return (
    <div className={`${colors.bg} ${colors.border} border-2 rounded-2xl p-6 card-hover`}>
      <div className="flex items-start justify-between mb-4">
        <div className={`${colors.icon} p-3 rounded-xl`}>
          {icons[category.icon]}
        </div>
        <span className={`${colors.badge} px-3 py-1 rounded-full text-xs font-semibold uppercase`}>
          {category.priority} Priority
        </span>
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-2">{category.name}</h3>
      <p className="text-gray-600 text-sm mb-4">{category.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        <span className="bg-white/70 px-2 py-1 rounded text-xs text-gray-600">
          {category.percentOfTest} of test
        </span>
        <span className="bg-white/70 px-2 py-1 rounded text-xs text-gray-600">
          {category.questionsCount} questions
        </span>
      </div>

      <div className="mb-4">
        <div className="flex justify-between text-sm mb-1">
          <span className="text-gray-600">Current: {category.currentScore}</span>
          <span className="text-gray-600">Target: {category.targetScore}</span>
        </div>
        <div className="w-full h-2 bg-white/50 rounded-full">
          <div
            className={`h-full rounded-full ${category.priority === 'high' ? 'bg-red-400' : category.priority === 'medium' ? 'bg-amber-400' : 'bg-green-400'}`}
            style={{ width: `${category.priority === 'high' ? '40%' : category.priority === 'medium' ? '60%' : '85%'}` }}
          />
        </div>
      </div>

      {questionsAnswered > 0 && (
        <div className="mb-4 p-3 bg-white/50 rounded-lg">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Practice Progress</span>
            <span className="font-semibold">{correctAnswers}/{questionsAnswered} ({accuracy}%)</span>
          </div>
        </div>
      )}

      <Link
        href={`/practice/${category.id}`}
        className={`block w-full ${colors.button} text-white text-center py-3 rounded-xl font-semibold transition-colors`}
      >
        Start Practice
      </Link>
    </div>
  );
}
