
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
    <div className="card text-center p-6 hover:shadow-lg transition-all duration-300">
      <div className="text-3xl text-midnight-primary mb-4 flex justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-midnight-subtext">{description}</p>
    </div>
  );
};

export default ClientBenefitCard;
