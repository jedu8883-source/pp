
import React from 'react';

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <a href="#" className="text-2xl font-black tracking-tighter text-slate-800">
            Mental <span className="text-orange-600 font-light">Coach</span>
          </a>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
          <a href="#about" className="hover:text-orange-600 transition">About</a>
          <a href="#expertise" className="hover:text-orange-600 transition">Expertise</a>
          <a href="#career" className="hover:text-orange-600 transition">Career</a>
          <a href="#programs" className="hover:text-orange-600 transition">Programs</a>
        </div>
        <div className="md:hidden">
            {/* Mobile menu would go here */}
            <div className="w-10"></div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
