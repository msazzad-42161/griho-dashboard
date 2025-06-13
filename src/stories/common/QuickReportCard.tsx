import { cn } from '@/lib/utils';
import React from 'react';
import { Icon } from '@iconify/react';

interface QuickReportCardProps {
  className?: string;
  title?: string;
  label?: string;
  icon?: string;
  iconClassName?: string;
  onClick?: () => void;
}

export const QuickReportCard: React.FC<QuickReportCardProps> = ({
  className = '',
  title = 'This is a title',
  label = 'This is a label',
  icon,
  iconClassName = '',
  onClick
}) => {
    const baseClass = cn(
        'rounded-lg bg-white p-4 flex flex-1 items-center justify-between cursor-pointer shadow-[0px_2px_14px_0px_#7C8DB51F] hover:shadow-[0px_8px_14px_0px_#7C8DB51F] transition-shadow',
        className
    )
  return (
    <div className={baseClass} onClick={onClick}>
      <div className="flex flex-col flex-1">
        <h3 className="font-bold lg:text-[22px] text-[18px] text-default-text">{title}</h3>
        <span className="lg:text-[18px] text-[14px] text-21">{label}</span>
      </div>
        {icon && 
        <span className={cn("p-2 rounded-lg bg-1", iconClassName)}>
          <Icon icon={icon} className='text-white lg:text-[20px] text-[16px]'/>
        </span>
        }
    </div>
  );
};