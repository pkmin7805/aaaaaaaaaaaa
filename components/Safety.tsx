import React from 'react';
import { AlertTriangle, ShieldCheck, FileText, CheckCircle } from 'lucide-react';

export const Safety: React.FC = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto h-full overflow-y-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">안전 관리</h2>
          <p className="text-slate-500 text-sm">현장별 안전 점검 현황 및 교육 일지 관리</p>
        </div>
        <div className="flex gap-2">
            <button className="bg-white border border-slate-300 text-slate-700 px-4 py-2 rounded-lg font-bold text-sm hover:bg-slate-50">
                점검표 다운로드
            </button>
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-red-700">
                + 사고 보고
            </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white shadow-lg">
            <div className="flex justify-between items-start mb-4">
                <ShieldCheck size={32} className="opacity-80" />
                <span className="bg-white/20 px-2 py-1 rounded text-xs font-bold">양호</span>
            </div>
            <div className="text-4xl font-black mb-1">4,500</div>
            <div className="text-sm opacity-90">무재해 시간 (Target: 5,000)</div>
        </div>
        
        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
            <div className="flex justify-between items-start mb-4">
                <div className="bg-orange-100 p-2 rounded-lg text-orange-600">
                    <AlertTriangle size={24} />
                </div>
            </div>
            <div className="text-3xl font-black text-slate-800 mb-1">3건</div>
            <div className="text-sm text-slate-500">이번 달 아차사고 접수</div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
             <div className="flex justify-between items-start mb-4">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                    <FileText size={24} />
                </div>
            </div>
            <div className="text-3xl font-black text-slate-800 mb-1">85%</div>
            <div className="text-sm text-slate-500">정기 안전 교육 이수율</div>
        </div>
      </div>

      <h3 className="font-bold text-lg text-slate-800 mb-4">최근 안전 점검 내역</h3>
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                    <th className="px-6 py-3 font-bold text-slate-700">점검 일자</th>
                    <th className="px-6 py-3 font-bold text-slate-700">현장명</th>
                    <th className="px-6 py-3 font-bold text-slate-700">점검 항목</th>
                    <th className="px-6 py-3 font-bold text-slate-700">상태</th>
                    <th className="px-6 py-3 font-bold text-slate-700">조치 사항</th>
                    <th className="px-6 py-3 font-bold text-slate-700">담당자</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
                {[1,2,3,4].map((i) => (
                    <tr key={i} className="hover:bg-slate-50">
                        <td className="px-6 py-4 text-slate-600">2024.02.{20+i}</td>
                        <td className="px-6 py-4 font-medium text-slate-800">강남 파이낸스 타워</td>
                        <td className="px-6 py-4 text-slate-600">비계 설치 상태 점검</td>
                        <td className="px-6 py-4">
                            <span className="flex items-center gap-1 text-green-600 font-bold text-xs">
                                <CheckCircle size={14} /> 양호
                            </span>
                        </td>
                        <td className="px-6 py-4 text-slate-500">-</td>
                        <td className="px-6 py-4 text-slate-600">김안전</td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    </div>
  );
};