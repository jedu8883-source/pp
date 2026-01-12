
import React from 'react';
import { Program } from '../types';

const Programs: React.FC = () => {
  const programs: Program[] = [
    {
      id: 'A',
      title: 'Winning Mindset',
      subtitle: '챔피언 마인드셋',
      color: 'blue',
      gradient: 'from-blue-400 to-blue-600',
      features: [
        '부정적 신념 파괴 & 긍정적 자기대화',
        '만다라트를 활용한 구체적 목표 설정',
        '강력한 동기부여(Why) 찾기'
      ]
    },
    {
      id: 'B',
      title: 'Iron Routine',
      subtitle: '강철 멘탈 루틴',
      color: 'orange',
      gradient: 'from-orange-400 to-red-600',
      features: [
        '경기 전 최적 각성: 프리 퍼포먼스 루틴',
        '실수 복구 전략: 3초 리셋(Reset)',
        '실전 감각을 익히는 심상 훈련'
      ]
    },
    {
      id: 'C',
      title: 'Focus & Flow',
      subtitle: '실전 집중력 강화',
      color: 'emerald',
      gradient: 'from-emerald-400 to-green-600',
      features: [
        '경기장 내 방해 요소 차단 훈련',
        '호흡법과 이완 기법을 통한 긴장 조절',
        '슬럼프 관리 및 멘탈 회복탄력성'
      ]
    }
  ];

  const contactInfo = {
    phone: "010-5601-8883",
    email: "jedu8883@gmail.com"
  };

  return (
    <section id="programs" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Coaching Programs</h2>
          <p className="text-slate-500 text-lg">'스포츠멘탈코칭' 이론을 기반으로 한 1:1 및 팀 맞춤형 실전 솔루션</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {programs.map((p) => (
            <div key={p.id} className="glass-card p-10 rounded-[2.5rem] relative overflow-hidden group hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-slate-100 flex flex-col h-full bg-white shadow-sm">
              <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${p.gradient}`}></div>
              <span className={`text-xs font-black tracking-widest uppercase mb-4 block text-${p.color}-500`}>Program {p.id}</span>
              <h4 className="text-3xl font-bold mb-2 text-slate-800 group-hover:scale-105 transition-transform origin-left">{p.title}</h4>
              <p className="text-slate-400 font-medium mb-10">{p.subtitle}</p>
              
              <ul className="space-y-6 flex-grow">
                {p.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center bg-${p.color}-50 text-${p.color}-500 flex-shrink-0 mt-1`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    </span>
                    <span className="text-slate-600 font-medium leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Unified Contact Section */}
        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-8 md:p-12 rounded-[3rem] bg-orange-600 text-white shadow-2xl shadow-orange-200 border-none text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-8">상담 및 교육신청</h3>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
              <a href={`tel:${contactInfo.phone}`} className="group flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-white group-hover:text-orange-600 transition-all duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <span className="text-xl font-bold tracking-tight">{contactInfo.phone}</span>
                <span className="text-xs text-white/70 font-medium uppercase tracking-widest">Call Now</span>
              </a>

              <div className="hidden md:block w-px h-16 bg-white/20"></div>

              <a href={`mailto:${contactInfo.email}`} className="group flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-white group-hover:text-orange-600 transition-all duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <span className="text-xl font-bold tracking-tight">{contactInfo.email}</span>
                <span className="text-xs text-white/70 font-medium uppercase tracking-widest">Email Us</span>
              </a>
            </div>
            
            <p className="mt-10 text-white/80 text-sm font-light break-keep px-4">
              전문적인 스포츠 멘탈 코칭과 지도자 역량 강화 교육, 인권 교육 등<br className="hidden sm:block" />
              장윤정 코치만의 차별화된 맞춤형 커리큘럼을 제안해 드립니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
