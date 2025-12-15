import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-900/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <div className="inline-block bg-accent-600 text-white px-3 py-1 rounded-sm font-bold text-xs uppercase tracking-widest mb-4">
            Since 1985
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
            미래를 향한<br />
            견고한 약속
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-10 font-light leading-relaxed">
            태림지반은 혁신적인 기술력과 완벽한 시공으로<br className="hidden md:block"/>
            고객의 꿈을 현실로 만드는 대한민국 대표 건설 파트너입니다.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-primary-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-100 transition flex items-center justify-center gap-2 group">
              프로젝트 보기
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition">
              회사 소개서 다운로드
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
};