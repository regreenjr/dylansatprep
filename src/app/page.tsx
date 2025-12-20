'use client';

import { useState, useEffect } from 'react';
import ScoreCard from '@/components/ScoreCard';
import CategoryCard from '@/components/CategoryCard';
import { dylanScores, categories } from '@/data/dylanScores';
import { Progress } from '@/data/types';

export default function Home() {
  const [progress, setProgress] = useState<Progress[]>([]);
  const [activeSection, setActiveSection] = useState<'all' | 'reading-writing' | 'math'>('all');

  useEffect(() => {
    // Load progress from localStorage
    const savedProgress = localStorage.getItem('satPrepProgress');
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }
  }, []);

  const getProgressForCategory = (categoryId: string) => {
    const categoryProgress = progress.find(p => p.category === categoryId);
    return {
      questionsAnswered: categoryProgress?.questionsAnswered || 0,
      correctAnswers: categoryProgress?.correctAnswers || 0
    };
  };

  const filteredCategories = categories.filter(cat =>
    activeSection === 'all' || cat.section === activeSection
  );

  const highPriorityCategories = filteredCategories.filter(c => c.priority === 'high');
  const mediumPriorityCategories = filteredCategories.filter(c => c.priority === 'medium');
  const lowPriorityCategories = filteredCategories.filter(c => c.priority === 'low');

  const totalPracticed = progress.reduce((sum, p) => sum + p.questionsAnswered, 0);
  const totalCorrect = progress.reduce((sum, p) => sum + p.correctAnswers, 0);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dylan&apos;s SAT Prep</h1>
              <p className="text-sm text-gray-500">Personalized practice based on your Dec 6, 2025 results</p>
            </div>
            <div className="flex items-center gap-4">
              {totalPracticed > 0 && (
                <div className="text-right">
                  <p className="text-sm text-gray-500">Practice Stats</p>
                  <p className="font-semibold text-gray-900">
                    {totalCorrect}/{totalPracticed} ({totalPracticed > 0 ? Math.round((totalCorrect/totalPracticed)*100) : 0}%)
                  </p>
                </div>
              )}
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Score Overview */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Your SAT Scores</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScoreCard
              title="Total Score"
              score={dylanScores.totalScore}
              maxScore={1600}
              subtitle="Great foundation to build on!"
              color="blue"
            />
            <ScoreCard
              title="Reading & Writing"
              score={dylanScores.readingWriting}
              maxScore={800}
              subtitle="Focus area: Craft & Structure"
              color="purple"
            />
            <ScoreCard
              title="Math"
              score={dylanScores.math}
              maxScore={800}
              subtitle="Focus area: Data Analysis"
              color="green"
            />
          </div>
        </section>

        {/* Quick Stats */}
        <section className="mb-10 p-6 bg-white rounded-2xl shadow-lg">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Score Improvement Potential</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-red-50 rounded-xl">
              <p className="text-3xl font-bold text-red-600">+100</p>
              <p className="text-sm text-gray-600">R&W Potential</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-xl">
              <p className="text-3xl font-bold text-blue-600">+50</p>
              <p className="text-sm text-gray-600">Math Potential</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-xl">
              <p className="text-3xl font-bold text-purple-600">1510</p>
              <p className="text-sm text-gray-600">Target Score</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-xl">
              <p className="text-3xl font-bold text-green-600">98%</p>
              <p className="text-sm text-gray-600">Percentile Goal</p>
            </div>
          </div>
        </section>

        {/* Section Filter */}
        <section className="mb-6">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveSection('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeSection === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              All Sections
            </button>
            <button
              onClick={() => setActiveSection('reading-writing')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeSection === 'reading-writing'
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              Reading & Writing
            </button>
            <button
              onClick={() => setActiveSection('math')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeSection === 'math'
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              Math
            </button>
          </div>
        </section>

        {/* High Priority */}
        {highPriorityCategories.length > 0 && (
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
              <h2 className="text-xl font-bold text-gray-900">Focus Areas (Highest Impact)</h2>
            </div>
            <p className="text-gray-600 mb-4">These areas have the most room for improvement and will give you the biggest score boost.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {highPriorityCategories.map(category => {
                const { questionsAnswered, correctAnswers } = getProgressForCategory(category.id);
                return (
                  <CategoryCard
                    key={category.id}
                    category={category}
                    questionsAnswered={questionsAnswered}
                    correctAnswers={correctAnswers}
                  />
                );
              })}
            </div>
          </section>
        )}

        {/* Medium Priority */}
        {mediumPriorityCategories.length > 0 && (
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-amber-500 rounded-full" />
              <h2 className="text-xl font-bold text-gray-900">Building Blocks (Good Progress Needed)</h2>
            </div>
            <p className="text-gray-600 mb-4">You&apos;re doing well here, but consistent practice will help you reach excellence.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mediumPriorityCategories.map(category => {
                const { questionsAnswered, correctAnswers } = getProgressForCategory(category.id);
                return (
                  <CategoryCard
                    key={category.id}
                    category={category}
                    questionsAnswered={questionsAnswered}
                    correctAnswers={correctAnswers}
                  />
                );
              })}
            </div>
          </section>
        )}

        {/* Low Priority */}
        {lowPriorityCategories.length > 0 && (
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-green-500 rounded-full" />
              <h2 className="text-xl font-bold text-gray-900">Strengths (Maintain Excellence)</h2>
            </div>
            <p className="text-gray-600 mb-4">You&apos;re already strong in these areas! Keep them sharp with occasional practice.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lowPriorityCategories.map(category => {
                const { questionsAnswered, correctAnswers } = getProgressForCategory(category.id);
                return (
                  <CategoryCard
                    key={category.id}
                    category={category}
                    questionsAnswered={questionsAnswered}
                    correctAnswers={correctAnswers}
                  />
                );
              })}
            </div>
          </section>
        )}

        {/* Study Tips */}
        <section className="bg-white rounded-2xl shadow-lg p-6 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Study Tips for Dylan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-red-50 rounded-xl">
              <h3 className="font-semibold text-red-800 mb-2">Craft & Structure Tips</h3>
              <ul className="text-sm text-red-700 space-y-2">
                <li>• Read the context carefully before looking at answer choices</li>
                <li>• Look for contrast words (but, however, despite) as clues</li>
                <li>• Practice identifying the author&apos;s tone and purpose</li>
                <li>• Build vocabulary by reading challenging texts daily</li>
              </ul>
            </div>
            <div className="p-4 bg-blue-50 rounded-xl">
              <h3 className="font-semibold text-blue-800 mb-2">Problem Solving & Data Tips</h3>
              <ul className="text-sm text-blue-700 space-y-2">
                <li>• Always find the unit rate first for proportion problems</li>
                <li>• Remember: percent change = (change/original) × 100</li>
                <li>• Median is the middle value - always sort data first</li>
                <li>• For probability, identify total outcomes clearly</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm py-8">
          <p>Built with love to help Dylan reach her SAT goals</p>
          <p className="mt-1">Current Score: {dylanScores.totalScore} → Target: 1510+</p>
        </footer>
      </div>
    </main>
  );
}
