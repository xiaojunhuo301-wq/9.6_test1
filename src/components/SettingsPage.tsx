import React from 'react';
import { Bell, Shield, Palette, Globe } from 'lucide-react';

const SettingsPage: React.FC = () => {
  const settingsSections = [
    {
      title: "通知设置",
      icon: Bell,
      description: "管理您的通知偏好和提醒设置",
      options: ["邮件通知", "桌面通知", "移动推送", "系统消息"]
    },
    {
      title: "隐私与安全",
      icon: Shield,
      description: "保护您的个人信息和账户安全",
      options: ["双重验证", "密码管理", "隐私设置", "数据导出"]
    },
    {
      title: "界面个性化",
      icon: Palette,
      description: "自定义您的界面主题和显示设置",
      options: ["主题选择", "语言设置", "字体大小", "布局偏好"]
    },
    {
      title: "国际化",
      icon: Globe,
      description: "设置您的地区、语言和时区偏好",
      options: ["语言选择", "时区设置", "货币单位", "日期格式"]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-emerald-800 mb-4 handwritten">Panda设置</h2>
        <p className="text-base sm:text-lg text-emerald-600 max-w-2xl mx-auto leading-relaxed px-4">
          个性化您的Panda体验，调整各项设置以获得最佳的使用体验。
        </p>
      </div>

      <div className="grid mobile-grid sm:grid-cols-2 gap-4 sm:gap-6">
        {settingsSections.map((section, index) => {
          const Icon = section.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 cursor-pointer border-l-4 border-l-emerald-500 touch-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full flex items-center justify-center shadow-md">
                  <Icon className="text-emerald-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 handwritten">{section.title}</h3>
                  <p className="text-gray-600 text-sm">{section.description}</p>
                </div>
              </div>
              
              <div className="space-y-2">
                {section.options.map((option, optionIndex) => (
                  <div key={optionIndex} className="flex items-center justify-between p-2 hover:bg-emerald-50 rounded-lg transition-colors touch-card">
                    <span className="text-gray-700 text-sm sm:text-base">{option}</span>
                    <div className="w-10 h-5 bg-emerald-200 rounded-full relative cursor-pointer hover:bg-emerald-300 transition-colors">
                      <div className="w-4 h-4 bg-white rounded-full shadow-md absolute top-0.5 left-0.5 transition-transform"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SettingsPage;