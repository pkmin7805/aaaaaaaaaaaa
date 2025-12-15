import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-accent-500 font-bold tracking-wide uppercase text-sm mb-3">Contact Us</h2>
            <h3 className="text-4xl font-black mb-8">함께 만드는<br/>성공적인 미래</h3>
            <p className="text-slate-400 mb-12 text-lg leading-relaxed">
              프로젝트에 관한 문의사항이 있으시거나 전문적인 상담이 필요하시면<br/>
              언제든지 연락 주시기 바랍니다. 최고의 전문가가 도와드리겠습니다.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-white/10 p-3 rounded-lg text-accent-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">본사 위치</h4>
                  <p className="text-slate-400">서울특별시 강남구 테헤란로 123 태림타워 15층</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-white/10 p-3 rounded-lg text-accent-500">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">전화 문의</h4>
                  <p className="text-slate-400 text-xl font-light">02-1234-5678</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-white/10 p-3 rounded-lg text-accent-500">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">이메일</h4>
                  <p className="text-slate-400">contact@taerim.co.kr</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-white/10 p-3 rounded-lg text-accent-500">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">업무 시간</h4>
                  <p className="text-slate-400">평일 09:00 - 18:00 (주말 및 공휴일 휴무)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 lg:p-12 text-slate-900">
            <h4 className="text-2xl font-bold mb-6">온라인 문의</h4>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">이름</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="홍길동" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">연락처</label>
                  <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="010-0000-0000" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">이메일</label>
                <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="example@email.com" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">문의 유형</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500">
                  <option>견적 문의</option>
                  <option>사업 제휴</option>
                  <option>채용 관련</option>
                  <option>기타</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">문의 내용</label>
                <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none" placeholder="문의하실 내용을 자세히 적어주세요."></textarea>
              </div>
              <button type="button" className="w-full bg-primary-600 text-white font-bold py-4 rounded-lg hover:bg-primary-700 transition shadow-lg transform active:scale-95">
                문의하기
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};