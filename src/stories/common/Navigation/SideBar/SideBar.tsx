import React from 'react';
import { SideBarItem } from './SideBarItem';
import { OfferCard } from './OfferCard';
import { useTranslation } from 'react-i18next';
import grihoIcon from '../../../../assets/griho_icon.png';
import { Icon } from '@iconify/react';
import GrihoIcon from '@/components/icons/GrihoIcon';

interface SideBarProps {
  onClose?: () => void;
}

export const SideBar: React.FC<SideBarProps> = ({ onClose }) => {
  const { t } = useTranslation();

  const menuItems = [
    { icon: 'ic:home', label: t('sidebar.home'), link: '/' },
    { icon: 'mdi:lightning-bolt', label: t('sidebar.utility_bill'), link: '/utility-bill' },
    { icon: 'mdi:finance', label: t('sidebar.accounting'), link: '/accounting' },
    { icon: 'mdi:home-city', label: t('sidebar.facility_management'), link: '/facility-management' },
    { icon: 'mdi:account-group', label: t('sidebar.association'), link: '/association' },
    { icon: 'oui:app-reporting', label: t('sidebar.reports'), link: '/reports' },
    { icon: 'mdi:cog-outline', label: t('sidebar.settings'), link: '/settings' },
  ];

  const offerItems = [
    { icon: 'mdi:car', label: t('sidebar.car_parking_management'), link: '/car-parking' },
    { icon: 'mdi:file-document-edit', label: t('sidebar.digital_audit_by_camera'), link: '/digital-audit' },
  ];

  return (
    <div className="flex flex-col h-full bg-nav text-white min-w-max">
      <div className="relative flex items-center justify-center p-4">
        <GrihoIcon fill="none" className="w-16 h-16" />
        <button 
          className="lg:hidden text-white absolute top-2 right-2" 
          onClick={onClose}
        >
          <Icon icon="mdi:close" className="w-6 h-6" />
        </button>
      </div>
      <nav className="flex-grow flex flex-col px-4 overflow-y-auto">
        {menuItems.map((item, index) => (
          <SideBarItem
            key={index}
            icon={item.icon}
            label={item.label}
            link={item.link}
            isActive={index === 0}
          />
        ))}
      <OfferCard
        title={t('sidebar.ai_powered_security')}
        items={offerItems}
        className="my-4"
      />
      <SideBarItem
        icon="tabler:logout-2"
        label={t('sidebar.log_out')}
        link="#"
        onClick={() => {/* Add logout logic here */}}
        className="text-red-500"
      />
      </nav>
    </div>
  );
};
