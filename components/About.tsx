
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-900">Why Mental Coaching?</h2>
        
        <div className="glass-card p-10 md:p-16 rounded-[40px] relative overflow-hidden text-center shadow-lg group hover:shadow-2xl transition-all duration-500">
          <div className="absolute -top-6 -left-6 text-9xl text-slate-100 font-serif opacity-50 select-none">"</div>
          
          <p className="text-xl md:text-2xl leading-loose text-slate-700 font-light break-keep relative z-10">
            심판으로서 수많은 경기를 지켜보며 깨달았습니다.<br />
            기술이 비슷한 선수들 사이에서 결국 승리하는 선수는<br />
            <strong className="text-orange-600 font-bold bg-orange-50/50 px-2 rounded">"어떤 상황에서도 흔들리지 않는 마음"</strong>을 가진 선수였습니다.
          </p>
          <div className="w-16 h-1 bg-orange-500 mx-auto my-10 rounded-full"></div>
          <p className="text-slate-500 leading-relaxed break-keep text-lg relative z-10">
            사회복지학 박사의 깊이 있는 이론과 국제심판의 현장 경험,<br />
            그리고 <span className="text-slate-800 font-bold underline decoration-orange-400 decoration-4 underline-offset-8">국제멘탈코칭센터(MCCi)</span>의 체계적인 훈련법을 더해<br />
            선수가 필드 위에서 온전히 자신의 실력을 발휘하도록 돕는<br />
            든든한 러닝메이트가 되겠습니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
