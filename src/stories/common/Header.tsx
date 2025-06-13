import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "./Input/Button";
import { LanguageToggleDropdown } from "./Input/LanguageToggleDropdown";
import GRIHO_ICON from "@/assets/griho_icon.png";
import GRIHO_HEADER_ICON from "@/assets/griho_header_icon.jpg";
import { ProfileDropDown } from "./Profile/ProfileDropDown";
import { useTranslation } from "react-i18next";

type User = {
  name: string;
};

export interface HeaderProps {
  user: {
    name: string;
  };
  onMenuClick: () => void;
}

export const Header = ({
  user,
  onMenuClick,
}: HeaderProps) => {
  const { t } = useTranslation();
  return (
    <header className="w-full">
      <div className="flex justify-between items-center shadow px-5 py-3 gap-2">
        {/* Add hamburger menu for mobile */}
        <div className="flex self-start">
          <button 
            className="lg:hidden mr-2" 
            onClick={onMenuClick}
        >
          <Icon icon="mdi:menu" className="w-6 h-6" />
        </button>
          <img             
            className="h-14 block lg:hidden"
            src={GRIHO_ICON}
              alt="Griho Icon"/>
          <img             
            className="h-14 hidden lg:block"
            src={GRIHO_HEADER_ICON}
              alt="Griho Icon"/>
          </div>
        <div className="hidden lg:flex gap-4 items-center">
          <LanguageToggleDropdown />
          <div className="flex items-center gap-2">
            <img
              className="w-10 aspect-square"
              src={GRIHO_ICON}
              alt="Griho Icon"
            />
            <span>
              <h2 className="font-medium text-gray-600">{t('install_app').split(' ')[0]} {t('install_app').split(' ')[1]}</h2>
              <h2 className="font-medium text-gray-600 inline-flex items-center gap-1">
                {t('install_app').split(' ')[2]}
                <Icon
                  icon="lucide:download"
                  className="w-5 aspect-square text-gray-600"
                />
              </h2>
            </span>
          </div>

          <div className="relative bg-1 rounded-md h-14 aspect-square p-4 flex items-center justify-center">
            <Icon icon={"hugeicons:notification-03"} className="w-full h-full" />
            <span className="absolute top-4 right-4 w-3 h-3 bg-red-500 rounded-full border-2 border-white" />
          </div>

          <ProfileDropDown name={user.name} role="User" profileImage="https://i.pravatar.cc/300"/>
        </div>
      </div>
    </header>
  );
}
