import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-emerald-800 to-teal-800 text-white py-12 px-8 mobile-footer">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold handwritten text-emerald-200">关于我们</h3>
            <p className="text-emerald-100 leading-relaxed">
              Panda是一个充满创意和智慧的平台，致力于为用户提供最优质的数字体验和智能服务。
            </p>
            <div className="flex space-x-3">
              <div className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-teal-300 rounded-full animate-pulse delay-100"></div>
              <div className="w-2 h-2 bg-cyan-300 rounded-full animate-pulse delay-200"></div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold handwritten text-emerald-200">服务支持</h3>
            <ul className="space-y-2 text-emerald-100">
              <li className="hover:text-white transition-colors cursor-pointer">• 24/7 技术支持</li>
              <li className="hover:text-white transition-colors cursor-pointer">• 在线帮助文档</li>
              <li className="hover:text-white transition-colors cursor-pointer">• 社区论坛</li>
              <li className="hover:text-white transition-colors cursor-pointer">• 培训资源</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold handwritten text-emerald-200">联系方式</h3>
            <div className="space-y-3 text-emerald-100">
              <div className="flex items-center space-x-3 hover:text-white transition-colors">
                <Mail size={16} />
                <span>hello@panda.world</span>
              </div>
              <div className="flex items-center space-x-3 hover:text-white transition-colors">
                <Phone size={16} />
                <span>+86 400-123-4567</span>
              </div>
              <div className="flex items-center space-x-3 hover:text-white transition-colors">
                <MapPin size={16} />
                <span>北京市朝阳区创新大厦</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-emerald-600 mt-8 pt-6 text-center text-sm sm:text-base">
          <p className="text-emerald-200">© 2025 Panda World. 用心创造，智慧连接。</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;