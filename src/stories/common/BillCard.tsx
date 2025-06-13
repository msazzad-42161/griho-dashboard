import React from 'react';
import { Icon } from '@iconify/react';
import { cn } from '@/lib/utils';
import { Button } from './Input/Button';
import { useTranslation } from 'react-i18next';

interface BillCardProps {
  title: string;
  amount: string | number;
  onClick?: () => void;
  className?: string;
  buttonClassName?: string;
  iconClassName?: string;
  labelClassName?: string;
  icon?: string;
}

export const BillCard: React.FC<BillCardProps> = ({
  title,
  amount,
  onClick,
  className = '',
  buttonClassName = '',
  iconClassName = '',
  labelClassName = '',
  icon = 'ph:chart-line-up-bold',
}) => {
  const { t } = useTranslation();
  return (
    <div 
      className={cn(
        'rounded-lg flex-1 p-4 cursor-pointer hover:shadow-md transition-shadow',
        className
      )}
      onClick={onClick}
    >
      <div className="flex items-center gap-2 mb-4">
        <span className={cn('p-2 rounded-full', iconClassName)}>
        <Icon 
          icon={icon} 
          className={'lg:text-xl text-lg text-white'}
        />
        </span>
        <span 
          className={cn('lg:text-3xl text-xl font-semibold', labelClassName)}
        >
          {title}
        </span>
      </div>
      
      <div className="lg:text-2xl text-xl text-gray-800 mb-4">
        {amount}
      </div>

      <Button
        label={t('home.quickStart.createBill')}
        className={buttonClassName}
      />
    </div>
  );
};
