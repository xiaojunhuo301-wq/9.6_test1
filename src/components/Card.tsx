import React from 'react';

interface CardProps {
  title: string;
  description: string;
  icon: string;
  color: string;
  delay?: number;
}

const Card: React.FC<CardProps> = ({ title, description, icon, color, delay = 0 }) => {
  return (
    <div 
      className={`bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 cursor-pointer border-l-4 ${color} animate-fade-in hover:bg-white touch-card`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center space-x-4 mb-4">
        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-xl sm:text-2xl bg-gradient-to-br ${color.replace('border-l-', 'from-').replace('-500', '-100')} to-white shadow-md`}>
          {icon}
        </div>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 handwritten">{title}</h3>
      </div>
      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{description}</p>
      <div className="mt-4 flex space-x-2">
        <div className="w-8 h-1 bg-gradient-to-r from-emerald-300 to-teal-300 rounded-full"></div>
        <div className="w-4 h-1 bg-gradient-to-r from-teal-300 to-cyan-300 rounded-full"></div>
        <div className="w-2 h-1 bg-cyan-300 rounded-full"></div>
      </div>
    </div>
  );
};

export default Card;