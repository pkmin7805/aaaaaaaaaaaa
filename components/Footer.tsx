import React from 'react';
import { HardHat, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6 text-white">
              <HardHat size={32} className="text-accent-500"/>
              <span className="font-black text-2xl tracking-tighter">태림지반</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              태림지반은 30년 이상의 경험과 노하우로<br/> 
              대한민국 건설 산업을 선도합니다.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition"><Facebook size={20} /></a>
              <a href="#" className="hover:text-white transition"><Twitter size={20} /></a>
              <a href="#" className="hover:text-white transition"><Instagram size={20} /></a>
              <a href="#" className="hover:text-white transition"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">바로가기</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#about" className="hover:text-accent-500 transition">회사 소개</a></li>
              <li><a href="#services" className="hover:text-accent-500 transition">사업 영역</a></li>
              <li><a href="#projects" className="hover:text-accent-500 transition">포트폴리오</a></li>
              <li><a href="#" className="hover:text-accent-500 transition">지속가능경영</a></li>
              <li><a href="#" className="hover:text-accent-500 transition">인재채용</a></li>
            </ul>
          </div>

           {/* Services */}
           <div>
            <h4 className="text-white font-bold text-lg mb-6">사업 분야</h4>
            <ul className="space-y-3 text-sm">
              <li>건축 공사</li>
              <li>토목 공사</li>
              <li>주택 사업</li>
              <li>플랜트</li>
              <li>도시 정비</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">뉴스레터 구독</h4>
            <p className="text-sm mb-4">최신 건설 동향과 태림지반의 소식을 받아보세요.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="이메일 주소" 
                className="bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-accent-500"
              />
              <button className="bg-accent-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-accent-500 transition">
                구독
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; 2024 Taerim Jiban Co., Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">개인정보처리방침</a>
            <a href="#" className="hover:text-white">이용약관</a>
            <a href="#" className="hover:text-white">윤리경영</a>
          </div>
        </div>
      </div>
    </footer>
  );
};