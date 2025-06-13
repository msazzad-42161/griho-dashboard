import { Button } from '@/stories/common/Input/Button';
import { Icon } from '@iconify/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

type Tab = string;

type Props = {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
  tabs: Tab[];
  breadcrumbIcon?: string;
  title?: string;
};

const BreadcrumbsAndTabs: React.FC<Props> = ({ 
  activeTab, 
  setActiveTab, 
  tabs,
  breadcrumbIcon = "ri:home-smile-line",
  title = "home.title"
}) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col bg-1 p-5 ml-4 mt-4 rounded-tl-lg rounded-bl-lg gap-5">
      {/* Breadcrumb */}
      <div className="flex flex-row items-center gap-2 text-sm text-default-text">
        <Icon icon={breadcrumbIcon} className="text-2xl text-default-text" />
        <span className="flex flex-row gap-1">
          <span>{t(title)}</span>
          <span>/</span>
          <span>{t(activeTab)}</span>
          <span>/</span>
        </span>
      </div>
      {/* Tabs */}
      <div className='lg:block hidden lg:flex flex-row gap-2'>
        {tabs.map((tab) => (
          <Button
            key={`big-${tab}`}
            label={t(tab)}
            onClick={() => setActiveTab(tab)}
            className={`${activeTab === tab ? 'bg-primary text-white' : 'bg-2 text-default-text'}`}
          />
        ))}
      </div>
      {/* Tabs for smaller devices */}
      <div className="lg:hidden block flex flex-row gap-2">
        {tabs.map((tab) => (
          <Button
            key={`small-${tab}`}
            size='small'
            label={t(tab)}
            onClick={() => setActiveTab(tab)}
            className={`${activeTab === tab ? 'bg-primary text-white text-xs' : 'bg-2 text-default-text text-xs'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BreadcrumbsAndTabs;




