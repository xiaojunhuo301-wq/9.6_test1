import React, { useState, useEffect } from 'react';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const [displayText, setDisplayText] = useState('');
  const fullText = '欢迎来到panda的世界';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 150);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="relative bg-gradient-to-r from-emerald-300/80 via-teal-300/80 to-cyan-300/80 text-white py-12 px-8 shadow-xl overflow-hidden backdrop-blur-sm mobile-header">
      {/* 移动端菜单按钮 */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-50 bg-white/20 backdrop-blur-sm p-2 rounded-lg text-white hover:bg-white/30 transition-all"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      
      {/* 飘落的树叶背景 */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-leaf opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          >
            🍃
          </div>
        ))}
      </div>
      
      {/* 毛玻璃效果层 */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
      
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 handwritten relative z-10">
          {displayText}
          <span className="animate-pulse">|</span>
        </h1>
        <div className="w-24 h-1 bg-white/60 rounded-full mx-auto opacity-80 animate-fade-in-delayed"></div>
        <p className="text-base sm:text-lg md:text-xl mt-6 text-emerald-50 font-light relative z-10 animate-fade-in-delayed px-4">
          在这里探索创意、分享智慧、共同成长
        </p>
      </div>
    </header>
  );
};

export default Header;