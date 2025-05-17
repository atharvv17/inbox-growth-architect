
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-midnight-surface py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="/" className="text-2xl font-bold text-white">
              LeveragedGrowth<span className="text-midnight-primary">.co</span>
            </a>
            <p className="text-midnight-subtext mt-1">
              Premium outbound systems for growing businesses
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12">
            <div>
              <h3 className="font-bold mb-2">Services</h3>
              <ul className="space-y-1">
                <li><a href="#" className="text-midnight-subtext hover:text-midnight-primary transition-colors">Email Outreach</a></li>
                <li><a href="#" className="text-midnight-subtext hover:text-midnight-primary transition-colors">LinkedIn Systems</a></li>
                <li><a href="#" className="text-midnight-subtext hover:text-midnight-primary transition-colors">Strategy Sessions</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Company</h3>
              <ul className="space-y-1">
                <li><a href="#" className="text-midnight-subtext hover:text-midnight-primary transition-colors">About Us</a></li>
                <li><a href="#" className="text-midnight-subtext hover:text-midnight-primary transition-colors">Case Studies</a></li>
                <li><a href="#" className="text-midnight-subtext hover:text-midnight-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h3 className="font-bold mb-2">Connect</h3>
              <ul className="space-y-1">
                <li><a href="#" className="text-midnight-subtext hover:text-midnight-primary transition-colors">LinkedIn</a></li>
                <li><a href="#" className="text-midnight-subtext hover:text-midnight-primary transition-colors">Twitter</a></li>
                <li><a href="#" className="text-midnight-subtext hover:text-midnight-primary transition-colors">Email</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-6 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-midnight-subtext text-sm">© 2025 LeveragedGrowth.co. All rights reserved.</p>
          <div className="mt-2 md:mt-0 flex space-x-4">
            <a href="#" className="text-midnight-subtext hover:text-midnight-primary transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-midnight-subtext hover:text-midnight-primary transition-colors text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
