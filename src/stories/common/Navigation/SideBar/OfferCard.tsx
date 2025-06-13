import React from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

interface OfferCardProps {
  title: string;
  items: Array<{ icon: string; label: string; link: string }>;
  className?: string;
}

export const OfferCard: React.FC<OfferCardProps> = ({ title, items, className = '' }) => {
  return (
    <div className={`bg-[#11283f] rounded-2xl border-2 border-primary p-4 ${className}`}>
      <span className="text-yellow-400 text-lg font-semibold mb-4 flex gap-2">
        <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          {title}
        </span>
        <Icon icon="mdi:crown" className="mt-1 text-xl" />
      </span>
      {items.map((item, index) => (
        <Link
          key={index}
          to={item.link}
          className={`flex items-center gap-2 text-base text-gray-300 mt-2 border border-transparent rounded-md hover:opacity-80 transition-opacity px-4 py-2 ${index === 0 ? 'bg-primary text-white' : ''}`}
        >
          <Icon icon={item.icon} className="text-xl" />
          {item.label}
        </Link>
      ))}
    </div>
  );
};
