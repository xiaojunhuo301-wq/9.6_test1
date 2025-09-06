import React from 'react';

const MembersPage: React.FC = () => {
  const members = [
    {
      name: "Alex Chen",
      role: "创始人 & CEO",
      avatar: "👨‍💼",
      description: "10年互联网经验，致力于用技术改变世界",
      color: "from-emerald-400 to-teal-400"
    },
    {
      name: "Sarah Liu",
      role: "产品总监",
      avatar: "👩‍💻",
      description: "用户体验专家，专注于创造优秀的产品体验",
      color: "from-teal-400 to-cyan-400"
    },
    {
      name: "Mike Wang",
      role: "技术总监",
      avatar: "👨‍🔬",
      description: "全栈工程师，AI技术专家",
      color: "from-cyan-400 to-blue-400"
    },
    {
      name: "Lisa Zhang",
      role: "设计总监",
      avatar: "👩‍🎨",
      description: "创意设计师，专注于品牌和视觉设计",
      color: "from-blue-400 to-indigo-400"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-emerald-800 mb-4 handwritten">Panda成员</h2>
        <p className="text-base sm:text-lg text-emerald-600 max-w-2xl mx-auto leading-relaxed px-4">
          认识我们优秀的团队成员，每一位都是各自领域的专家，共同为Panda的愿景而努力。
        </p>
      </div>

      <div className="grid mobile-grid sm:grid-cols-2 gap-4 sm:gap-6">
        {members.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 cursor-pointer touch-card"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="text-center mb-4">
              <div className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-2xl sm:text-3xl shadow-lg mb-4`}>
                {member.avatar}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 handwritten">{member.name}</h3>
              <p className="text-emerald-600 font-medium text-sm sm:text-base">{member.role}</p>
            </div>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-center">{member.description}</p>
            <div className="mt-4 flex justify-center">
              <div className="w-12 h-1 bg-gradient-to-r from-emerald-300 to-teal-300 rounded-full"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MembersPage;