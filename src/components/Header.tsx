
import React from 'react';
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  return (
    <header className="py-8 absolute top-0 left-0 right-0 z-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <span className="text-white text-2xl font-bold">Leveraged<span className="text-[#1EAEDB]">Growth</span></span>
          </a>
          
          {/* Main Navigation - Centered */}
          <nav className="hidden lg:block">
            <div className="flex items-center space-x-8">
              <a href="#offers" className="text-white hover:text-gray-300 transition-colors font-medium px-4 py-2">
                SERVICES
              </a>
              <a href="#process" className="text-white hover:text-gray-300 transition-colors font-medium px-4 py-2">
                ABOUT US
              </a>
              <a href="#case-studies" className="text-white hover:text-gray-300 transition-colors font-medium px-4 py-2">
                CASE STUDIES
              </a>
            </div>
          </nav>
          
          {/* CTA Button */}
          <Button variant="outline" className="hidden md:flex border border-white text-white hover:bg-white/10 rounded-full px-8 py-2">
            BOOK A CALL
          </Button>
          
          {/* Mobile menu button */}
          <Button variant="ghost" className="lg:hidden text-white">
            Menu
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
