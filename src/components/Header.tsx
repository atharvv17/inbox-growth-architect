
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="py-6 absolute top-0 left-0 right-0 z-20">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img alt="LeveragedGrowth.co" className="h-32" src="/lovable-uploads/0aebd4e9-9841-4ad4-8f83-9fe3ab1d41ce.png" />
          </a>
          
          {/* Navigation - Desktop */}
          <div className="hidden md:block">
            <nav className="flex items-center space-x-8">
              <a href="#offers" className="text-white hover:text-logo-blue transition-colors font-medium relative group">
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-logo-blue transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#process" className="text-white hover:text-logo-blue transition-colors font-medium relative group">
                Process
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-logo-blue transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#case-studies" className="text-white hover:text-logo-blue transition-colors font-medium relative group">
                Results
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-logo-blue transition-all duration-300 group-hover:w-full"></span>
              </a>
              <Button className="bg-logo-blue hover:bg-logo-darkBlue text-black font-medium px-5 py-2 rounded-md transition-colors shadow-lg shadow-logo-blue/20">
                Book a Call
              </Button>
            </nav>
          </div>
          
          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            className="md:hidden text-white hover:text-logo-blue"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-24 left-0 right-0 bg-midnight-background border-t border-logo-blue/20 z-30">
            <nav className="flex flex-col items-center py-4 space-y-4">
              <a 
                href="#offers" 
                className="text-white hover:text-logo-blue transition-colors font-medium px-4 py-2 w-full text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#process" 
                className="text-white hover:text-logo-blue transition-colors font-medium px-4 py-2 w-full text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Process
              </a>
              <a 
                href="#case-studies" 
                className="text-white hover:text-logo-blue transition-colors font-medium px-4 py-2 w-full text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Results
              </a>
              <Button 
                className="bg-logo-blue hover:bg-logo-darkBlue text-black font-medium px-5 py-2 w-4/5 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book a Call
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
