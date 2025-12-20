'use client';

interface ScoreCardProps {
  title: string;
  score: number;
  maxScore: number;
  subtitle?: string;
  color?: 'blue' | 'purple' | 'green';
}

export default function ScoreCard({ title, score, maxScore, subtitle, color = 'blue' }: ScoreCardProps) {
  const percentage = (score / maxScore) * 100;

  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    purple: 'from-purple-500 to-purple-600',
    green: 'from-green-500 to-green-600'
  };

  const bgColorClasses = {
    blue: 'bg-blue-100',
    purple: 'bg-purple-100',
    green: 'bg-green-100'
  };

  const barColorClasses = {
    blue: 'bg-blue-500',
    purple: 'bg-purple-500',
    green: 'bg-green-500'
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 card-hover">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${colorClasses[color]} flex items-center justify-center`}>
          <span className="text-white text-xs font-bold">{Math.round(percentage)}%</span>
        </div>
      </div>

      <div className="mb-2">
        <span className="text-4xl font-bold text-gray-900">{score}</span>
        <span className="text-gray-500 text-lg">/{maxScore}</span>
      </div>

      {subtitle && (
        <p className="text-sm text-gray-500 mb-4">{subtitle}</p>
      )}

      <div className={`w-full h-3 ${bgColorClasses[color]} rounded-full overflow-hidden`}>
        <div
          className={`h-full ${barColorClasses[color]} rounded-full animate-fill`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
