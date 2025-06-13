import React from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

interface SideBarItemProps {
  icon: string;
  label: string;
  link: string;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
}

export const SideBarItem: React.FC<SideBarItemProps> = ({ icon, label, link, isActive = false, onClick, className = '' }) => {
  return (
    <Link
      to={link}
      className={`flex items-center w-full px-6 py-4 gap-4 text-left transition-colors rounded-2xl ${
        isActive ? 'bg-primary text-white' : 'text-gray-300 hover:bg-gray-700'
      } ${className}`}
      onClick={onClick}
    >
      {isActive && (
        <div className="absolute left-0 w-1 h-10 bg-primary rounded-r-lg"></div>
      )}
      <Icon icon={icon} className="text-3xl" />
      <span className="text-lg">{label}</span>
    </Link>
  );
};
