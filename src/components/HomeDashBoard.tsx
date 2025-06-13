import { FinancialActivityCard } from '@/stories/common/FinancialActivityCard';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
}

export const HomeDashBoard: React.FC<Props> = () => {
  const {t} = useTranslation();
  return (
    <div className='flex flex-col gap-10 bg-white p-4 rounded-lg'>
              <span className='flex flex-col'>
        <h1 className='text-primary lg:text-3xl text-xl font-bold'>{t('home.dashboard.financialActivities')}</h1>
        <p className='text-primary lg:text-xl text-base'>{t('home.dashboard.see_financial_activities')}</p>
        </span>
        <div className='flex lg:flex-row flex-col gap-4'>
            <FinancialActivityCard
                title={t('home.dashboard.current_month_cash_recieved')}
                amount='123455'
                icon='mingcute:arrow-down-line'
                iconClassName='bg-24 rotate-[45deg]'
                labelClassName='text-24'
                amountClassName='text-23'
                className='bg-4'
            />
            <FinancialActivityCard
                title={t('home.dashboard.current_month_spent_amount')}
                amount='1847'
                icon='hugeicons:file-02'
                iconClassName='bg-8'
                labelClassName='text-8'
                amountClassName='text-22'
                className='bg-7'
            />
            <FinancialActivityCard
                title={t('home.dashboard.current_due')}
                amount='123455'
                icon='mingcute:warning-line'
                iconClassName='bg-10'
                labelClassName='text-10'
                amountClassName='text-10'
                className='bg-11'
            />
        </div>
    </div>
  );
};
