import React from 'react';
import { Stat, Notice } from '../types';
import { TrendingUp, AlertTriangle, Users, Calendar, ArrowUpRight, CheckCircle } from 'lucide-react';

const stats: Stat[] = [
  { label: "전체 공정률", value: "68.5%", change: "+2.1%", trend: 'up', icon: <TrendingUp size={20} /> },
  { label: "진행중 현장", value: "12", change: "개소", trend: 'neutral', icon: <Calendar size={20} /> },
  { label: "금일 출력 인원", value: "148", change: "명", trend: 'up', icon: <Users size={20} /> },
  { label: "무재해 시간", value: "4,500", change: "시간", trend: 'up', icon: <CheckCircle size={20} /> },
];

const notices: Notice[] = [
  { id: 1, title: "[긴급] 동절기 콘크리트 타설 관리 기준 시달", date: "2024-02-28", priority: "High" },
  { id: 2, title: "3월 정기 안전교육 일정 안내", date: "2024-02-27", priority: "Normal" },
  { id: 3, title: "신규 자재 발주 시스템 사용 매뉴얼", date: "2024-02-25", priority: "Low" },
];

export const Dashboard: React.FC = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex justify-between items-end mb-2">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">대시보드</h2>
          <p className="text-slate-500 text-sm">오늘의 현장 현황 및 주요 지표입니다.</p>
        </div>
        <div className="text-right text-xs text-slate-400">
          기준일: 2024년 2월 29일 (목) 09:30
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-slate-100 rounded-lg text-primary-700">
                {stat.icon}
              </div>
              <span className={`text-xs font-bold px-2 py-1 rounded-full ${stat.trend === 'up' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-600'}`}>
                {stat.change}
              </span>
            </div>
            <div className="text-slate-500 text-sm font-medium mb-1">{stat.label}</div>
            <div className="text-2xl font-black text-slate-800">{stat.value}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart Area (Placeholder) */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-lg text-slate-800">주간 공정 진행률</h3>
            <select className="bg-slate-50 border border-slate-200 rounded px-2 py-1 text-sm outline-none">
              <option>전체 현장</option>
              <option>A공구</option>
              <option>B공구</option>
            </select>
          </div>
          <div className="h-64 bg-slate-50 rounded-lg flex items-center justify-center border border-dashed border-slate-300">
             <div className="text-center">
               <TrendingUp className="mx-auto text-slate-300 mb-2" size={48} />
               <p className="text-slate-400 text-sm">공정률 차트 영역</p>
             </div>
          </div>
        </div>

        {/* Notices & Alerts */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col">
          <h3 className="font-bold text-lg text-slate-800 mb-4 flex items-center gap-2">
            <AlertTriangle size={18} className="text-accent-500" />
            주요 공지사항
          </h3>
          <div className="flex-1 space-y-4">
            {notices.map((notice) => (
              <div key={notice.id} className="pb-3 border-b border-slate-100 last:border-0">
                <div className="flex justify-between items-start mb-1">
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                    notice.priority === 'High' ? 'bg-red-100 text-red-600' : 
                    notice.priority === 'Normal' ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {notice.priority}
                  </span>
                  <span className="text-xs text-slate-400">{notice.date}</span>
                </div>
                <h4 className="text-sm font-medium text-slate-700 hover:text-primary-600 cursor-pointer truncate">
                  {notice.title}
                </h4>
              </div>
            ))}
          </div>
          <button className="mt-4 w-full py-2 bg-slate-50 text-slate-600 text-sm font-bold rounded-lg hover:bg-slate-100 transition">
            전체 공지 보기
          </button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {['작업 일보 작성', '안전 점검표 등록', '자재 청구', '도면 조회'].map((action, i) => (
          <button key={i} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:border-primary-500 hover:ring-1 hover:ring-primary-500 transition text-left group">
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-slate-700">{action}</span>
              <ArrowUpRight size={16} className="text-slate-300 group-hover:text-primary-500" />
            </div>
            <p className="text-xs text-slate-400">바로가기</p>
          </button>
        ))}
      </div>
    </div>
  );
};