import React, { useState, useEffect } from 'react';
import Card from './Card';
import { MessageCircle, Sparkles, Heart, Leaf } from 'lucide-react';

const HomePage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  const consultingCards = [
    {
      title: "智能咨询",
      description: "基于AI技术的个性化咨询服务，为您提供专业的建议和解决方案。我们的智能系统能够理解您的需求，提供精准的回答。",
      icon: "🤖",
      color: "border-l-emerald-500"
    },
    {
      title: "创意设计",
      description: "从概念到实现，我们提供全方位的创意设计服务。无论是品牌设计还是用户体验，都能为您量身定制。",
      icon: "🎨",
      color: "border-l-teal-500"
    },
    {
      title: "技术支持",
      description: "7x24小时的技术支持服务，确保您的项目顺利进行。我们的专业团队随时为您解决技术难题。",
      icon: "⚡",
      color: "border-l-cyan-500"
    },
    {
      title: "内容创作",
      description: "专业的内容创作团队，为您提供高质量的文案、视频和多媒体内容制作服务。",
      icon: "✨",
      color: "border-l-emerald-500"
    },
    {
      title: "数据分析",
      description: "深入的数据分析和洞察服务，帮助您更好地了解用户需求和市场趋势，做出明智决策。",
      icon: "📊",
      color: "border-l-teal-500"
    },
    {
      title: "品牌策略",
      description: "完整的品牌策略规划和执行，从品牌定位到市场推广，助力您的品牌成功。",
      icon: "🎯",
      color: "border-l-cyan-500"
    }
  ];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="text-center">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-emerald-200 border-t-emerald-500 rounded-full animate-spin mx-auto mb-4"></div>
            <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-teal-400 rounded-full animate-spin mx-auto" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
          </div>
          <p className="text-emerald-600 font-medium handwritten animate-pulse">正在加载panda的世界...</p>
          <div className="flex justify-center space-x-1 mt-2">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-fade-in-up">
      {/* 咨询介绍区域 */}
      <div className="bg-gradient-to-r from-emerald-50/80 to-teal-50/80 rounded-3xl p-6 sm:p-8 shadow-lg border border-emerald-100/50 backdrop-blur-sm">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-emerald-800 mb-4 handwritten">专业咨询服务</h2>
          <p className="text-base sm:text-lg text-emerald-600 max-w-2xl mx-auto leading-relaxed px-4">
            在Panda的世界里，我们为您提供全方位的专业咨询服务。
            无论您是个人创作者还是企业用户，我们都能为您提供量身定制的解决方案。
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8">
          <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-105 touch-card">
            <MessageCircle className="text-emerald-500" size={20} />
            <span className="text-emerald-700 font-medium text-sm sm:text-base">在线咨询</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-105 touch-card">
            <Sparkles className="text-teal-500" size={20} />
            <span className="text-teal-700 font-medium text-sm sm:text-base">AI智能</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-105 touch-card">
            <Heart className="text-rose-500" size={20} />
            <span className="text-rose-700 font-medium text-sm sm:text-base">用心服务</span>
          </div>
        </div>
      </div>

      {/* 服务卡片网格 */}
      <div className="grid mobile-grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {consultingCards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            icon={card.icon}
            color={card.color}
            delay={index * 100}
          />
        ))}
      </div>

      {/* 底部行动号召 */}
      <div className="bg-gradient-to-r from-emerald-400/90 to-teal-400/90 backdrop-blur-sm rounded-3xl p-6 sm:p-8 text-white text-center shadow-xl">
        <Leaf className="mx-auto mb-4 text-white" size={48} />
        <h3 className="text-xl sm:text-2xl font-bold mb-4 handwritten">开始您的Panda之旅</h3>
        <p className="text-emerald-50 mb-6 max-w-xl mx-auto text-sm sm:text-base px-4">
          让我们一起创造属于您的数字世界。立即开始咨询，体验专业服务带来的无限可能。
        </p>
        <button className="bg-white/90 backdrop-blur-sm text-emerald-600 px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-white transition-all transform hover:scale-105 shadow-lg hover:shadow-xl touch-card text-sm sm:text-base">
          立即开始咨询
        </button>
      </div>
    </div>
  );
};

export default HomePage;