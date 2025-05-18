
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
    <div className="bg-white shadow-md rounded-lg text-center p-8 hover:shadow-lg transition-all duration-300 flex flex-col items-center h-full border border-gray-200">
      <div className="text-4xl text-[#3B82F6] mb-6 flex justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4 text-black">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ClientBenefitCard;
