import React from 'react';
import { Stat } from '../types';

const stats: Stat[] = [
  { label: "누적 프로젝트", value: "1,200+", description: "주거, 상업, 공공시설 포함" },
  { label: "시공 능력 평가", value: "TOP 10", description: "국내 건설사 중 상위 1%" },
  { label: "전문 기술 인력", value: "450명", description: "건축/토목 기술사 보유" },
  { label: "무재해 달성", value: "5년", description: "현장 안전 최우선 경영" },
];

export const Stats: React.FC = () => {
  return (
    <div className="bg-primary-900 py-20 border-b border-primary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-4 border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 transition duration-300">
              <div className="text-4xl md:text-5xl font-black text-white mb-2">{stat.value}</div>
              <div className="text-accent-500 font-bold text-lg mb-1">{stat.label}</div>
              <div className="text-slate-400 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};