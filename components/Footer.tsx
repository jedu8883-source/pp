
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 border-t border-slate-200 bg-slate-50/80">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="mb-8">
          <a href="#" className="text-2xl font-black tracking-tighter text-slate-800">
            Mental <span className="text-orange-600 font-light">Coach</span>
          </a>
          <p className="text-slate-500 mt-3 font-medium italic">Empowering your peak performance through mental strength.</p>
        </div>
        
        <div className="pt-8 border-t border-slate-200/60 max-w-xs mx-auto">
            <p className="text-slate-400 text-[11px] font-medium tracking-tight">
              © 2026 (주)제이에듀. All Rights Reserved.<br/>
              Designed for Professional Mental Coaching Excellence.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
