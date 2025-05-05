
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-midnight-surface py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="/" className="text-2xl font-bold text-white">
              LeveragedGrowth<span className="text-midnight-primary">.co</span>
            </a>
            <p className="text-midnight-subtext mt-2">
              Premium outbound systems for growing businesses
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">
            <div>
              <h3 className="font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-midnight-subtext hover:text-midnight-primary transition-colors">Email Outreach</a></li>
                <li><a href="#" className="text-midnight-subtext hover:text-midnight-primary transition-colors">LinkedIn Systems</a></li>
                <li><a href="#" className="text-midnight-subtext hover:text-midnight-primary transition-colors">Strategy Sessions</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-midnight-subtext hover:text-midnight-primary transition-colors">About Us</a></li>
                <li><a href="#" className="text-midnight-subtext hover:text-midnight-primary transition-colors">Case Studies</a></li>
                <li><a href="#" className="text-midnight-subtext hover:text-midnight-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h3 className="font-bold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-midnight-subtext hover:text-midnight-primary transition-colors">LinkedIn</a></li>
                <li><a href="#" className="text-midnight-subtext hover:text-midnight-primary transition-colors">Twitter</a></li>
                <li><a href="#" className="text-midnight-subtext hover:text-midnight-primary transition-colors">Email</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-midnight-subtext">© 2025 LeveragedGrowth.co. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-midnight-subtext hover:text-midnight-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-midnight-subtext hover:text-midnight-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
