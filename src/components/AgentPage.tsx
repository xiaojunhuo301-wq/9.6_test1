import React from 'react';
import Card from './Card';

const AgentPage: React.FC = () => {
  const agentCards = [
    {
      title: "对话助手",
      description: "智能对话机器人，能够进行自然流畅的对话交流，回答各种问题并提供帮助。",
      icon: "💬",
      color: "border-l-blue-500"
    },
    {
      title: "创作助手",
      description: "专业的文案创作和内容生成助手，帮助您创造出色的文字作品。",
      icon: "✍️",
      color: "border-l-purple-500"
    },
    {
      title: "分析助手",
      description: "数据分析和洞察助手，帮助您从复杂数据中提取有价值的信息。",
      icon: "📈",
      color: "border-l-indigo-500"
    },
    {
      title: "设计助手",
      description: "UI/UX设计建议和创意灵感助手，为您的设计项目提供专业指导。",
      icon: "🎨",
      color: "border-l-pink-500"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-emerald-800 mb-4 handwritten">Panda智能体</h2>
        <p className="text-base sm:text-lg text-emerald-600 max-w-2xl mx-auto leading-relaxed px-4">
          我们的AI智能体团队，每一个都拥有独特的专业技能，为您提供个性化的智能服务。
        </p>
      </div>

      <div className="grid mobile-grid sm:grid-cols-2 gap-4 sm:gap-6">
        {agentCards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            icon={card.icon}
            color={card.color}
            delay={index * 150}
          />
        ))}
      </div>
    </div>
  );
};

export default AgentPage;