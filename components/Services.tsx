import React from 'react';
import { Building2, Home, Hammer, Ruler, HardHat, Truck } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    title: "상업 시설 건축",
    description: "오피스, 호텔, 쇼핑몰 등 비즈니스 가치를 높이는 랜드마크를 건설합니다. 최적의 공간 효율성과 디자인을 제공합니다.",
    icon: <Building2 className="w-10 h-10" />,
  },
  {
    title: "주거 단지 조성",
    description: "프리미엄 아파트, 빌라, 단독주택 등 삶의 질을 높이는 안락하고 쾌적한 주거 공간을 창조합니다.",
    icon: <Home className="w-10 h-10" />,
  },
  {
    title: "토목/인프라",
    description: "도로, 교량, 항만 등 국가 기반 시설 구축을 통해 더 나은 세상을 연결하고 도시의 기능을 완성합니다.",
    icon: <Truck className="w-10 h-10" />,
  },
  {
    title: "리모델링/재건축",
    description: "노후된 건물의 가치를 되살리는 혁신적인 리모델링 솔루션을 통해 새로운 공간으로 재탄생시킵니다.",
    icon: <Hammer className="w-10 h-10" />,
  },
  {
    title: "설계 및 디자인",
    description: "최신 트렌드와 친환경 요소를 반영한 독창적인 설계로 시공 전부터 완벽한 결과물을 계획합니다.",
    icon: <Ruler className="w-10 h-10" />,
  },
  {
    title: "건설 사업 관리 (CM)",
    description: "기획부터 유지관리까지 건설 전 과정을 통합 관리하여 비용 절감과 품질 향상을 실현합니다.",
    icon: <HardHat className="w-10 h-10" />,
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary-500 font-bold tracking-wide uppercase text-sm mb-3">What We Do</h2>
          <h3 className="text-4xl font-black text-slate-900">사업 영역</h3>
          <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
            태림지반은 건축, 토목, 플랜트 등 건설 전 분야에서<br/>
            최고의 기술력으로 고객 감동을 실현합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-100 group">
              <div className="bg-primary-50 w-20 h-20 rounded-2xl flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold text-slate-800 mb-4">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};