
import React from 'react';
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  return (
    <header className="py-6 absolute top-0 left-0 right-0 z-10">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src="/lovable-uploads/49e74208-b2c0-4809-a9dd-cff624caa489.png" alt="LeveragedGrowth.co" className="h-10" />
          </a>
          
          {/* Centered Navigation */}
          <div className="hidden md:flex items-center justify-center space-x-10">
            <a href="#offers" className="text-white hover:text-midnight-primary transition-colors font-medium">
              Features
            </a>
            <a href="#process" className="text-white hover:text-midnight-primary transition-colors font-medium">
              Pricing
            </a>
            <a href="#case-studies" className="text-white hover:text-midnight-primary transition-colors font-medium">
              About
            </a>
          </div>
          
          {/* Login Button */}
          <Button variant="outline" className="border border-white/20 text-white hover:bg-white/10 rounded-full px-8">
            Login
          </Button>
          
          {/* Mobile menu button */}
          <Button variant="ghost" className="md:hidden text-white">
            Menu
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
