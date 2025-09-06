import React from 'react';
import { Home, Bot, Users, Settings } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, isOpen, setIsOpen }) => {
  const menuItems = [
    { id: 'home', label: '首页', icon: Home },
    { id: 'agent', label: 'panda智能体', icon: Bot },
    { id: 'members', label: 'panda成员', icon: Users },
    { id: 'settings', label: 'panda设置', icon: Settings },
  ];

  return (
    <>
      {/* 移动端遮罩层 */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      <div className={`fixed left-0 top-0 h-full w-64 bg-gradient-to-b from-emerald-50/95 to-teal-50/95 backdrop-blur-md border-r border-emerald-200 shadow-lg z-50 sidebar-desktop ${isOpen ? 'show' : ''}`}>
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-lg">🐼</span>
          </div>
          <h1 className="text-xl font-semibold text-emerald-800 handwritten">Panda World</h1>
        </div>
        
        <nav className="space-y-3">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsOpen(false); // 移动端点击后关闭侧边栏
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-300 transform hover:scale-105 hover:shadow-md ${
                  activeTab === item.id
                    ? 'bg-gradient-to-r from-emerald-400 to-teal-400 text-white shadow-lg'
                    : 'text-emerald-700 hover:bg-emerald-100 hover:text-emerald-800'
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
    </>
  );
};

export default Sidebar;