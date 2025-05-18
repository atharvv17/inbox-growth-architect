import React from 'react';
const Footer: React.FC = () => {
  return <footer className="bg-[#1F2937] py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="/" className="text-2xl font-bold text-white">
              LeveragedGrowth<span className="text-[#67E8F9]">.co</span>
            </a>
            <p className="text-gray-300 mt-1">
              Premium outbound systems for growing businesses
            </p>
          </div>
          
        </div>
        <div className="border-t border-gray-700 mt-6 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 LeveragedGrowth.co. All rights reserved.</p>
          <div className="mt-2 md:mt-0 flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-[#67E8F9] transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-[#67E8F9] transition-colors text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;