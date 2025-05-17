
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ClientBenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ClientBenefitCard: React.FC<ClientBenefitCardProps> = ({ 
  icon, 
  title, 
  description 
}) => {
  return (
    <div className="card text-center p-8 hover:shadow-lg transition-all duration-300 flex flex-col items-center h-full">
      <div className="text-4xl text-logo-blue mb-6 flex justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-midnight-subtext">{description}</p>
    </div>
  );
};

export default ClientBenefitCard;
