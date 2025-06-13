import { Progress } from "@/components/ui/progress";
import { Icon } from "@iconify/react/dist/iconify.js";
import * as React from "react";
import { useTranslation } from 'react-i18next';

interface ProfileInfoProps {
  name?: string;
  handle?: string;
  location?: string;
  imageUrl?: string;
  isPremium?: boolean;
  progress?: number;
}

export const ProfileInfo: React.FC<ProfileInfoProps> = ({
  name="Md. Sazzadul Islam",
  handle="onyx800",
  location="Gulshan, Dhaka",
  imageUrl="https://i.pravatar.cc/300",
  isPremium=true,
  progress=80,
}) => {
  const { t } = useTranslation();

  return (
    <div className="relative flex justify-between p-4 gap-8 overflow-hidden">
      <div className="absolute inset-x-0 top-0 lg:h-1/3 h-1/4 mx-4 bg-1 rounded-lg z-0"></div>
      <div className="relative z-10 flex flex-col lg:flex-row justify-between w-full px-4 gap-8 ">
        {/* User Info */}
        <div className="flex gap-4">
          {/* Profile Image */}
          <img
            src={imageUrl}
            alt={name}
            className="w-32 h-32 rounded-lg object-cover border-2 border-white"
          />
          <div className="self-end">
            <div className="flex flex-row gap-2 items-center">
              <h2 className="text-sm lg:text-xl font-semibold text-gray-800">{name}</h2>
              {isPremium && (
                <span className="bg-green-100 text-green-600 text-xs lg:text-sm px-2 py-0.5 rounded-full">
                  {t('profile.premium')}
                </span>
              )}
            </div>
            <p className="text-xs lg:text-sm text-gray-500">@{handle}</p>
            <span className="flex items-center mt-1">
              <Icon icon={'lucide:map-pin'} color="#6b7280" fontSize={16} />
              <p className="text-xs lg:text-sm text-gray-500">{location}</p>
            </span>
          </div>
        </div>
        {/* Progress Bar */}
        <div className="self-end w-full lg:w-1/3 flex flex-col gap-1">
          <span className="flex flex-row gap-4 justify-between">
            <h2 className="text-sm lg:text-xl font-normal text-gray-500">
              {t('profile.completeProfile')}
            </h2>
            <h2 className="text-sm lg:text-xl font-normal text-gray-500">{progress}%</h2>
          </span>
          <Progress className="h-3" fillColor="#11B981" value={progress} />
        </div>
      </div>
    </div>
  );
};
