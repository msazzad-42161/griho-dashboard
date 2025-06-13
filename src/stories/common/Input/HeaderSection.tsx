import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from './Button';

export const HeaderSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-between w-full p-4">
      {/* Left Side - Welcome Text */}
      <div className="text-sm lg:text-xl font-semibold">
        {t('profile.welcome')}
      </div>

      {/* Middle - Links */}
      <div className="hidden lg:flex space-x-6 text-gray-600">
        <a href="#pricing" className="hover:underline">{t('profile.pricing')}</a>
        <a href="#services" className="hover:underline">{t('profile.services')}</a>
        <a href="#sales" className="hover:underline">{t('profile.sales')}</a>
      </div>

      {/* Right Side - Button */}
      <div className="hidden lg:block">
      <Button
        icon='mdi:eye-outline'
        primary
        label={t('profile.viewInApp')}
      />
      </div>
      <div className="block lg:hidden">
      <Button
        icon='mdi:eye-outline'
        primary
        label={t('profile.viewInApp')}
        size='small'
      />
      </div>
    </div>
  );
};
