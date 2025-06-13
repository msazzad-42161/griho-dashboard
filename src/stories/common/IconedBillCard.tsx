
import React from 'react';
import { Icon } from '@iconify/react';
import { cn } from '@/lib/utils';
import { CurrencyIcon } from '@/components/icons/CurrencyIcon';
import { useTranslation } from 'react-i18next';
import { Button } from './Input/Button';

interface IconedBillCardProps {
  title: string;
  onClick?: () => void;
  className?: string;
  iconClassName?: string;
  labelClassName?: string;
  buttonClassName?:string;
  buttonLabel?:string;
  icon?: string;
  labelIconSize?: 'default' | 'small';
}

export const IconedBillCard: React.FC<IconedBillCardProps> = ({
  title,
  onClick,
  className = '',
  iconClassName = '',
  labelClassName = '',
  buttonClassName= '',
  buttonLabel='',
  icon = 'ph:chart-line-up-bold',
  labelIconSize = 'default',
}) => {
    const {t} = useTranslation()
  const translation = useTranslation();
  const language = translation.i18n.language;
  return (
    <div 
      className={cn(
        'rounded-lg flex flex-row flex-1 lg:p-[30px] p-[20px] cursor-pointer hover:shadow-md transition-shadow gap-2',
        className
      )}
      onClick={onClick}
    >
      <div className="flex flex-1 flex-col gap-10 justify-between">
        <div className="flex flex-row gap-[10px] lg:gap-[14px]">
          <span className={cn('lg:w-[40px] lg:h-[40px] w-[30px] h-[30px] aspect-square flex items-center justify-center rounded-full', iconClassName)}>
            <Icon 
              icon={icon} 
              className={cn('lg:text-2xl text-xl text-white', labelIconSize === 'small' ? 'lg:text-xl text-lg' : '')}
            />
          </span>
          <span 
            className={cn('lg:text-3xl text-xl font-semibold', labelClassName)}
          >
            {title}
          </span>
        </div>
        <div className='self-start'>
        <Button
        label={buttonLabel}
        className={buttonClassName}
      />    
        </div>
      </div>
        <CurrencyIcon currency={language} />
    </div>
  );
};
