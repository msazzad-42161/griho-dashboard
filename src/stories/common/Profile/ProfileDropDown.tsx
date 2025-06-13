import React from 'react';
import { Icon } from '@iconify/react'; // Using iconify for the dropdown icon

export interface ProfileDropDownProps {
  name: string;
  role: string;
  profileImage: string;
}

export const ProfileDropDown: React.FC<ProfileDropDownProps> = ({
  name,
  role,
  profileImage,
}) => {
  return (
    <div className="flex items-center justify-between gap-4 bg-1 h-14 px-4 py-2 rounded-md">
        <span className='flex gap-2'>
      {/* Profile Image */}
      <img
        src={profileImage}
        alt={name}
        className="h-8 aspect-square rounded-full object-cover"
      />

      {/* User Info */}
      <div className="flex-1">
        <h2 className="text-sm font-semibold text-gray-800">{name}</h2>
        <p className="text-xs text-gray-500">{role}</p>
      </div>
        </span>

      {/* Dropdown Icon */}
      <span className="w-6 h-6 flex items-center justify-center rounded-full bg-white">
        <Icon icon="lucide:chevron-down" className="w-3 h-3 text-gray-500" />
      </span>
    </div>
  );
};
