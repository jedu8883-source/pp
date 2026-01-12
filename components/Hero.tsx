
import React from 'react';

const Hero: React.FC = () => {
  // Using a professional portrait placeholder that matches the user's provided image style.
  const instructorImageUrl = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"; 

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Decorative blurred background elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-orange-100/40 rounded-full blur-[100px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-100/40 rounded-full blur-[100px] -z-10 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full relative z-10">
        
        {/* Left: Text Content */}
        <div className="order-2 md:order-1 space-y-10 animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <div className="space-y-4">
            <div className="inline-block px-4 py-1.5 rounded-full border border-orange-200 bg-orange-50/80 backdrop-blur-sm text-orange-600 text-xs font-black tracking-widest uppercase shadow-sm">
              The Game Changer
            </div>
            
            {/* Adjusted heading size and used whitespace-nowrap to ensure clear 2-line layout */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] text-slate-900 tracking-tight">
              <span className="block mb-2 whitespace-nowrap">승패를 가르는 1%,</span>
              <span className="text-gradient block whitespace-nowrap">멘탈에 답이 있다.</span>
            </h1>
          </div>

          <p className="text-slate-600 text-lg md:text-2xl leading-relaxed max-w-xl break-keep font-light">
            국제심판의 <span className="font-bold text-slate-900">냉철한 시선</span>과<br/> 
            멘탈코치의 <span className="font-bold text-slate-900">따뜻한 공감</span>으로<br/>
            당신의 압도적인 성장을 이끕니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 pt-4">
            <button 
              onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-orange-600 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-orange-700 transition transform hover:-translate-y-1 shadow-2xl shadow-orange-200 active:scale-95"
            >
              프로그램 보러가기
            </button>
            <button 
              onClick={() => document.getElementById('career')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-slate-200 bg-white/60 backdrop-blur-md text-slate-700 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-slate-50 transition transform hover:-translate-y-1 active:scale-95 shadow-sm"
            >
              전문 경력
            </button>
          </div>
          
          <div className="pt-10 flex flex-wrap gap-3 text-xs text-slate-400 font-bold border-t border-slate-100 mt-10 uppercase tracking-widest">
            <span className="bg-white px-3 py-1.5 rounded-lg border border-slate-100 shadow-sm">#사회복지학박사</span>
            <span className="bg-white px-3 py-1.5 rounded-lg border border-slate-100 shadow-sm">#국제심판(ASTAF)</span>
            <span className="bg-white px-3 py-1.5 rounded-lg border border-slate-100 shadow-sm">#MCCi수료</span>
          </div>
        </div>

        {/* Right: Profile Image */}
        <div className="order-1 md:order-2 flex justify-center relative animate-in fade-in zoom-in duration-1000 delay-200">
          <div className="relative group">
            {/* Background glowing rings */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-orange-200/50 to-blue-200/50 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-700"></div>
            
            <div className="glass-card p-3 rounded-[3rem] relative z-10 w-full max-w-[420px] mx-auto shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] overflow-hidden transition-all duration-700 group-hover:scale-[1.02]">
              <div className="relative overflow-hidden rounded-[2.5rem] w-full aspect-[3/4] bg-slate-100">
                <img 
                  src={instructorImageUrl}
                  alt="장윤정 멘탈코치" 
                  className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-[2000ms] ease-out"
                />
                {/* Vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none"></div>
              </div>
              
              {/* Floating ID Card */}
              <div className="absolute bottom-10 left-10 right-10 bg-white/95 backdrop-blur-2xl border border-white/50 p-7 rounded-[2rem] shadow-2xl transform group-hover:translate-y-[-10px] transition-transform duration-500">
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-1 w-8 bg-orange-500 rounded-full"></div>
                  <p className="text-orange-600 text-[10px] font-black uppercase tracking-[0.3em]">Specialist</p>
                </div>
                <div className="flex items-baseline gap-2">
                  <h2 className="text-slate-900 font-black text-3xl">장윤정</h2>
                  <span className="text-slate-400 font-light text-xl tracking-tight">Jang Yun Jeong</span>
                </div>
                <div className="mt-3 flex flex-col text-slate-500 text-xs gap-1 font-semibold border-t border-slate-100 pt-3">
                  <p className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-200"></span>
                    사회복지학 박사 (Ph.D)
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-200"></span>
                    ASTAF 국제 세팍타크로 심판
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
