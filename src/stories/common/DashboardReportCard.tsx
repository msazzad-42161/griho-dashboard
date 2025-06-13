import React from 'react';
import { GenerateReportIcon } from '@/components/icons/GenerateReportIcon';
import { cn } from '@/lib/utils';

interface CardItemProps {
  className?: string;
  title?: string;
  subtitle?: string;
  iconClassname?: string;
  onClick?: () => void;
}

export const CardItem: React.FC<CardItemProps> = ({
  className = '',
  title='Card Item Title',
  subtitle='Card Item Subtitle',
  iconClassname = 'bg-primary',
  onClick
}) => {
  return (
    <div className='flex flex-row items-center p-4 cursor-pointer hover:opacity-80 transition-opacity' onClick={onClick}>
        <div className={`flex flex-1 flex-col lg:gap-[10px] gap-[6px] rounded-lg overflow-hidden ${className}`}>
            <span className='flex flex-row items-center text-default-text font-bold lg:text-[22px] text-[14px]'>{title}</span>
            <span className='flex flex-row items-center text-primary lg:text-[18px] text-[12px]'>{subtitle}</span>
        </div>
        <span className={cn(`lg:w-[50px] lg:h-[50px] w-[40px] h-[40px] rounded-xl flex items-center justify-center`, iconClassname)}>
            <GenerateReportIcon fill='white' className={cn('lg:w-[28px] lg:h-[26px] w-[20px] h-[20px]')}/>
        </span>
    </div>
  );
};

interface DashboardReportCardProps {
  className?: string;
  title: string;
  cardItems?: CardItemProps[];
}
export const DashboardReportCard: React.FC<DashboardReportCardProps> = ({
  className = '',
  title='Title',
  cardItems = [
    {
        title: 'Card Item Title',
        subtitle: 'Card Item Subtitle',
        iconClassname: 'bg-primary'
    },
    {
        title: 'Card Item Title',
        subtitle: 'Card Item Subtitle',
        iconClassname: 'bg-red-500'
    }
  ],
}) => {
  return (
    <div className={`flex flex-1 flex-col rounded-lg overflow-hidden ${className}`}>
        <span className='flex flex-row items-center lg:p-4 p-3 bg-primary text-white font-bold lg:text-[26px] text-[16px]'>{title}</span>
        <div className='flex flex-col bg-white'>
            {cardItems.map((item, index) => (
                <>
                    <CardItem key={index} {...item}/>
                    {index < cardItems.length - 1 && (
                        <div className="h-[1px] opacity-20 mx-4 bg-primary rounded-full" />
                    )}
                </>
            ))}
        </div>
    </div>
  );
};
