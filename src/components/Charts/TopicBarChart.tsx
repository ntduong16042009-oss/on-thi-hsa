import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell
} from 'recharts';
import { HSA_TOPICS } from '../../data/topics';
import { ExamAttempt } from '../../types';

interface TopicBarChartProps {
  attempts: ExamAttempt[];
}

export const TopicBarChart: React.FC<TopicBarChartProps> = ({ attempts }) => {
  // Aggregate accuracy per topic across all attempts
  const topicStats = HSA_TOPICS.map(topic => {
    let total = 0;
    let correct = 0;

    attempts.forEach(att => {
      att.questionResults.forEach(qr => {
        if (qr.topicId === topic.id) {
          total += 1;
          if (qr.isCorrect) correct += 1;
        }
      });
    });

    const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;
    return {
      name: topic.shortName,
      fullName: topic.name,
      accuracy,
      total,
      correct
    };
  }).filter(t => t.total > 0);

  if (topicStats.length === 0) {
    return (
      <div className="h-64 flex items-center justify-center text-sm text-slate-400">
        Chưa đủ dữ liệu bài thi để phân tích từng chủ đề.
      </div>
    );
  }

  const getBarColor = (accuracy: number) => {
    if (accuracy >= 80) return '#10b981'; // emerald
    if (accuracy >= 60) return '#3b82f6'; // blue
    if (accuracy >= 40) return '#f59e0b'; // amber
    return '#ef4444'; // red
  };

  return (
    <div className="w-full h-72">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={topicStats} margin={{ top: 10, right: 10, left: -15, bottom: 25 }}>
          <XAxis 
            dataKey="name" 
            tick={{ fontSize: 10, fill: '#64748b' }} 
            interval={0}
            angle={-25}
            textAnchor="end"
            tickLine={false}
          />
          <YAxis 
            domain={[0, 100]} 
            tick={{ fontSize: 11, fill: '#64748b' }} 
            tickLine={false}
            unit="%"
          />
          <Tooltip 
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const item = payload[0].payload;
                return (
                  <div className="bg-slate-900 text-white text-xs rounded-lg p-3 shadow-lg border border-slate-700">
                    <p className="font-semibold mb-1 text-slate-200">{item.fullName}</p>
                    <p className="text-slate-400">Đã làm: <span className="text-white font-medium">{item.total} câu</span></p>
                    <p className="text-slate-400">Đúng: <span className="text-emerald-400 font-medium">{item.correct} câu</span></p>
                    <p className="text-blue-400 font-bold mt-1">Độ chính xác: {item.accuracy}%</p>
                  </div>
                );
              }
              return null;
            }}
          />
          <Bar dataKey="accuracy" radius={[4, 4, 0, 0]}>
            {topicStats.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getBarColor(entry.accuracy)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
