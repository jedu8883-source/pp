
import React from 'react';

const Expertise: React.FC = () => {
  const points = [
    {
      icon: "⚖️",
      title: "심판의 눈 (The Eye)",
      desc: "ASTAF 국제 심판으로서 경기의 규칙과 흐름을 완벽히 이해합니다. 판정에 대한 불만이나 심리적 동요가 일어날 때, 이를 가장 효과적으로 다루는 법을 지도합니다.",
      color: "bg-blue-100 text-blue-600 hover:bg-blue-600"
    },
    {
      icon: "🏆",
      title: "검증된 전문성 (Expertise)",
      desc: "(주)제이에듀 대표이사이자 사회복지학 박사입니다. 국제멘탈코칭센터(MCCi) 과정을 수료하여 전문적인 멘탈 코칭 노하우를 완벽히 체화했습니다.",
      color: "bg-orange-100 text-orange-600 hover:bg-orange-600"
    },
    {
      icon: "🤝",
      title: "따뜻한 소통 (Empathy)",
      desc: "'운동하는 아이의 엄마'이자 교육 전문가로서, 선수의 아픔에 깊이 공감합니다. 강압적인 지도가 아닌 자존감을 회복시키는 코칭을 지향합니다.",
      color: "bg-emerald-100 text-emerald-600 hover:bg-emerald-600"
    }
  ];

  return (
    <section id="expertise" className="py-24 px-6 bg-white/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Why Jang Yun Jeong?</h2>
          <p className="text-slate-500 text-lg">다른 코치들과 차별화되는 장윤정만의 3가지 강점</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {points.map((p, idx) => (
            <div key={idx} className="glass-card p-10 rounded-3xl text-left group hover:-translate-y-2 transition-all duration-300">
              <div className={`w-16 h-16 ${p.color} rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:text-white transition-all duration-300 shadow-sm`}>
                {p.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800">{p.title}</h3>
              <p className="text-slate-600 leading-relaxed break-keep">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
