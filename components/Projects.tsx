import React from 'react';
import { Project } from '../types';
import { MoreHorizontal, MapPin, Calendar, User } from 'lucide-react';

const projects: Project[] = [
  { id: 1, title: "강남 파이낸스 타워 신축공사", category: "Commercial", location: "서울 강남구 역삼동", progress: 85, status: 'On Track', manager: "박현장", startDate: "2023.01.15" },
  { id: 2, title: "해운대 오션뷰 팰리스", category: "Residential", location: "부산 해운대구", progress: 42, status: 'Delayed', manager: "김건축", startDate: "2023.06.20" },
  { id: 3, title: "판교 테크노벨리 제2연구소", category: "R&D", location: "경기 성남시", progress: 12, status: 'On Track', manager: "이공무", startDate: "2024.01.05" },
  { id: 4, title: "인천국제공항 시설개선공사", category: "Infrastructure", location: "인천 중구", progress: 98, status: 'Completed', manager: "최안전", startDate: "2022.11.10" },
  { id: 5, title: "송도 센트럴 파크뷰", category: "Residential", location: "인천 연수구", progress: 5, status: 'Risk', manager: "정설계", startDate: "2024.02.10" },
];

export const Projects: React.FC = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'On Track': return 'bg-green-100 text-green-700 border-green-200';
      case 'Delayed': return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'Risk': return 'bg-red-100 text-red-700 border-red-200';
      case 'Completed': return 'bg-blue-100 text-blue-700 border-blue-200';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto h-full flex flex-col">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">프로젝트 현황</h2>
          <p className="text-slate-500 text-sm">관리 중인 전체 프로젝트 리스트입니다.</p>
        </div>
        <button className="bg-primary-600 text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-primary-700 transition shadow-sm">
          + 신규 프로젝트 등록
        </button>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex-1">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 font-bold text-slate-800">프로젝트명</th>
                <th className="px-6 py-4 font-bold text-slate-800">현장 위치</th>
                <th className="px-6 py-4 font-bold text-slate-800">공정률</th>
                <th className="px-6 py-4 font-bold text-slate-800">상태</th>
                <th className="px-6 py-4 font-bold text-slate-800">담당자</th>
                <th className="px-6 py-4 font-bold text-slate-800 text-right">관리</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {projects.map((project) => (
                <tr key={project.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-bold text-slate-800">{project.title}</div>
                    <div className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                       <Calendar size={10} /> 착공: {project.startDate}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5">
                      <MapPin size={14} className="text-slate-400" />
                      {project.location}
                    </div>
                  </td>
                  <td className="px-6 py-4 w-48">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-slate-700">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-1.5">
                      <div 
                        className={`h-1.5 rounded-full ${project.progress === 100 ? 'bg-blue-500' : 'bg-primary-500'}`} 
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${getStatusColor(project.status)}`}>
                      {project.status === 'On Track' ? '정상 진행' : 
                       project.status === 'Delayed' ? '공정 지연' : 
                       project.status === 'Risk' ? '위험' : '준공 완료'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600">
                        {project.manager[0]}
                      </div>
                      {project.manager}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 hover:bg-slate-200 rounded-full text-slate-400 hover:text-slate-600 transition">
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex justify-between items-center text-xs text-slate-500">
          <span>총 5개 프로젝트</span>
          <div className="flex gap-1">
            <button className="px-3 py-1 border border-slate-300 rounded hover:bg-white bg-white">이전</button>
            <button className="px-3 py-1 border border-slate-300 rounded hover:bg-white bg-white">다음</button>
          </div>
        </div>
      </div>
    </div>
  );
};