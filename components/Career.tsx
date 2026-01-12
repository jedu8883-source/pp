
import React from 'react';
import { CareerItem } from '../types';

const Career: React.FC = () => {
  const careerData: CareerItem[] = [
    {
      id: 'edu',
      title: '인권 강사 및 전문 교육',
      icon: '🎤',
      items: [
        '전) 대한체육회 / 전북체육회 인권강사',
        '고흥·함평교육지원청 학생선수 인권/성폭력 예방교육',
        '우석대학교 스포츠선수 인권교육',
        '남원스포츠클럽 지도자 역량강화교육',
        '전남체육중고등학교 지도자 역량강화 교육'
      ]
    },
    {
      id: 'ref',
      title: '국제 심판 활동',
      icon: '🚩',
      items: [
        '2014 ~ 현재 세팍타크로 국제심판 (ASTAF)',
        '국내외 주요 대회 심판 및 운영 (10년+ 경력)'
      ]
    }
  ];

  const teams = {
    uni: ['한양대학교 야구부', '한국체육대학교 레슬링부', '한국체육대학교 사이클부 / 유도부'],
    youth: ['경복중학교 야구부', '춘천 U-15 축구부', '한양공고 축구부']
  };

  return (
    <section id="career" className="py-24 px-6 bg-slate-100/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-slate-900">Professional Career</h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Main Careers - Left Column */}
          <div className="space-y-8">
            {careerData.map((section) => (
              <div key={section.id} className="glass-card p-10 rounded-3xl group bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center text-orange-600 text-3xl group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                    {section.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">{section.title}</h3>
                </div>
                <ul className="space-y-4 text-slate-600">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex gap-4 items-start bg-slate-50/50 p-4 rounded-xl border border-slate-100">
                      <span className="text-orange-500 font-bold mt-0.5">•</span>
                      <span className="font-medium text-lg leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Team Coaching Portfolio - Right Column (Balanced Width) */}
          <div className="glass-card p-10 rounded-3xl bg-white relative overflow-hidden border-orange-100 border-2 shadow-sm flex flex-col justify-center">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-orange-100 to-transparent rounded-bl-full opacity-40"></div>
            
            <div className="flex items-center gap-3 mb-10 relative z-10">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-3xl shadow-inner">👥</div>
              <h3 className="text-2xl font-bold text-slate-800">Team Coaching Portfolio</h3>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-10 relative z-10">
              <div>
                <span className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] block mb-4 border-b pb-2">University Teams</span>
                <ul className="space-y-4">
                  {teams.uni.map((t, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700 font-semibold text-lg hover:text-orange-600 transition group cursor-default">
                      <span className="text-green-500 group-hover:scale-125 transition-transform">✓</span> {t}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] block mb-4 border-b pb-2">Youth & High School</span>
                <ul className="space-y-4">
                  {teams.youth.map((t, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700 font-semibold text-lg hover:text-orange-600 transition group cursor-default">
                      <span className="text-green-500 group-hover:scale-125 transition-transform">✓</span> {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-orange-50/50 rounded-2xl border border-orange-100 relative z-10">
              <p className="text-slate-500 text-sm leading-relaxed">
                * 위 포트폴리오는 주요 활동 내역이며, 개별 선수 및 중·고·대 팀 대상 맞춤형 멘탈 코칭 프로그램을 상시 운영하고 있습니다.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Career;
