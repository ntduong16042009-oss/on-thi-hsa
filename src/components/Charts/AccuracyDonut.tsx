import React from 'react';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip
} from 'recharts';

interface AccuracyDonutProps {
  correct: number;
  incorrect: number;
  unanswered: number;
}

export const AccuracyDonut: React.FC<AccuracyDonutProps> = ({ correct, incorrect, unanswered }) => {
  const total = correct + incorrect + unanswered;
  if (total === 0) {
    return (
      <div className="h-48 flex items-center justify-center text-xs text-slate-400">
        Chưa có dữ liệu
      </div>
    );
  }

  const data = [
    { name: 'Đúng', value: correct, color: '#10b981' },
    { name: 'Sai', value: incorrect, color: '#ef4444' },
    { name: 'Chưa làm', value: unanswered, color: '#94a3b8' }
  ].filter(d => d.value > 0);

  const accuracyPct = Math.round((correct / total) * 100);

  return (
    <div className="relative w-full h-52 flex items-center justify-center">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            innerRadius={55}
            outerRadius={75}
            paddingAngle={3}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`donut-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip 
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const item = payload[0].payload;
                const pct = Math.round((item.value / total) * 100);
                return (
                  <div className="bg-slate-900 text-white text-xs rounded-lg px-2.5 py-1.5 shadow-md">
                    <span className="font-semibold">{item.name}: </span>
                    <span>{item.value} câu ({pct}%)</span>
                  </div>
                );
              }
              return null;
            }}
          />
        </PieChart>
      </ResponsiveContainer>
      
      {/* Center label */}
      <div className="absolute flex flex-col items-center justify-center pointer-events-none">
        <span className="text-2xl font-black text-slate-900 dark:text-white tabular-nums">
          {accuracyPct}%
        </span>
        <span className="text-[10px] text-slate-500 uppercase tracking-wider font-medium">
          Chính xác
        </span>
      </div>
    </div>
  );
};
