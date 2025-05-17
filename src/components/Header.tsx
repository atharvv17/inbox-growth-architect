
import React from 'react';
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  return (
    <header className="py-6 absolute top-0 left-0 right-0 z-10">
      <div className="container flex items-center justify-between">
        <a href="/" className="flex items-center">
          <img 
            src="/lovable-uploads/49e74208-b2c0-4809-a9dd-cff624caa489.png" 
            alt="LeveragedGrowth.co" 
            className="h-48" 
          />
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#offers" className="text-midnight-text hover:text-midnight-primary transition-colors">
            Services
          </a>
          <a href="#process" className="text-midnight-text hover:text-midnight-primary transition-colors">
            Process
          </a>
          <a href="#case-studies" className="text-midnight-text hover:text-midnight-primary transition-colors">
            Results
          </a>
          <Button className="btn-primary">
            Book Strategy Call
          </Button>
        </nav>
        <Button variant="ghost" className="md:hidden text-white">
          Menu
        </Button>
      </div>
    </header>
  );
};

export default Header;
