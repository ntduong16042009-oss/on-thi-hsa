import React from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from 'recharts';
import { ExamAttempt } from '../../types';

interface ScoreLineChartProps {
  attempts: ExamAttempt[];
}

export const ScoreLineChart: React.FC<ScoreLineChartProps> = ({ attempts }) => {
  if (!attempts || attempts.length === 0) {
    return (
      <div className="h-64 flex items-center justify-center text-sm text-slate-400">
        Chưa có dữ liệu bài thi để hiển thị biểu đồ tiến bộ.
      </div>
    );
  }

  // Format data chronological order
  const data = [...attempts]
    .reverse()
    .map((att, idx) => {
      const date = new Date(att.completedAt);
      const formattedDate = `${date.getDate()}/${date.getMonth() + 1}`;
      return {
        name: `Lần ${idx + 1} (${formattedDate})`,
        examCode: att.examCode,
        score: att.score,
        accuracy: att.accuracyRate
      };
    });

  return (
    <div className="w-full h-72">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" className="dark:stroke-slate-800" />
          <XAxis 
            dataKey="name" 
            tick={{ fontSize: 11, fill: '#64748b' }} 
            tickLine={false}
          />
          <YAxis 
            domain={[0, 10]} 
            tick={{ fontSize: 11, fill: '#64748b' }} 
            tickLine={false}
            ticks={[0, 2, 4, 6, 8, 10]}
          />
          <Tooltip 
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const item = payload[0].payload;
                return (
                  <div className="bg-slate-900 text-white text-xs rounded-lg p-3 shadow-lg border border-slate-700">
                    <p className="font-semibold mb-1 text-slate-200">{item.name}</p>
                    <p className="text-slate-400">Mã đề: <span className="text-white font-medium">{item.examCode}</span></p>
                    <p className="text-blue-400 font-bold mt-1">Điểm: {item.score} / 10.0</p>
                    <p className="text-emerald-400">Độ chính xác: {item.accuracy}%</p>
                  </div>
                );
              }
              return null;
            }}
          />
          <Line 
            type="monotone" 
            dataKey="score" 
            stroke="#2563eb" 
            strokeWidth={3} 
            dot={{ r: 5, fill: '#2563eb', strokeWidth: 2, stroke: '#ffffff' }}
            activeDot={{ r: 7, fill: '#1d4ed8' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
