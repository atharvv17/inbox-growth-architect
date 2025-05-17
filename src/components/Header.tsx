
import React from 'react';
import { Button } from "@/components/ui/button";
const Header: React.FC = () => {
  return <header className="py-6 absolute top-0 left-0 right-0 z-10">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img alt="LeveragedGrowth.co" className="h-20" src="/lovable-uploads/0aebd4e9-9841-4ad4-8f83-9fe3ab1d41ce.png" />
          </a>
          
          {/* Navigation */}
          <div className="hidden md:block">
            <nav className="flex items-center space-x-8">
              <a href="#offers" className="text-white hover:text-[#00CFFF] transition-colors font-medium">
                Services
              </a>
              <a href="#process" className="text-white hover:text-[#00CFFF] transition-colors font-medium">
                Process
              </a>
              <a href="#case-studies" className="text-white hover:text-[#00CFFF] transition-colors font-medium">
                Results
              </a>
              <Button className="bg-white hover:bg-gray-100 text-black font-medium px-5 py-2 rounded">
                Book a Call
              </Button>
            </nav>
          </div>
          
          {/* Mobile menu button */}
          <Button variant="ghost" className="md:hidden text-white">
            Menu
          </Button>
        </div>
      </div>
    </header>;
};
export default Header;
