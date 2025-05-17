import React from 'react';
import { Button } from "@/components/ui/button";
const Header: React.FC = () => {
  return <header className="py-4 absolute top-0 left-0 right-0 z-10">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src="/lovable-uploads/49e74208-b2c0-4809-a9dd-cff624caa489.png" alt="LeveragedGrowth.co" className="h-28" />
          </a>
          
          {/* Centered Navigation - Now at the top next to logo */}
          <div className="hidden md:block">
            <div className="bg-black bg-opacity-50 backdrop-blur-sm rounded-full px-8 py-2">
              <nav className="flex items-center space-x-12">
                <a href="#offers" className="text-white hover:text-midnight-primary transition-colors font-medium">
                  Services
                </a>
                <a href="#process" className="text-white hover:text-midnight-primary transition-colors font-medium">
                  Process
                </a>
                <a href="#case-studies" className="text-white hover:text-midnight-primary transition-colors font-medium">
                  Results
                </a>
                <Button className="bg-white hover:bg-opacity-90 text-black font-medium rounded-full">
                  Book a Call
                </Button>
              </nav>
            </div>
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