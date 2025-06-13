import { BillCard } from '@/stories/common/BillCard';
import { QuickReportCard } from '@/stories/common/QuickReportCard';
import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
}

export const HomeQuickStart: React.FC<Props> = () => {
  const { t } = useTranslation();
    return (
    <div className='flex flex-col gap-4'>
        {/* All Bill Cards */}
        <div className='bg-white rounded-lg p-4'>
        <span className='flex flex-col lg:mb-10 mb-8'>
        <h1 className='text-primary lg:text-3xl text-xl font-bold'>{t('home.quickStart.allBill')}</h1>
        <p className='text-primary lg:text-xl text-base'>{t('home.quickStart.summary')}</p>
        </span>
        {/* Bill Cards Container */}
        <span className='flex flex-col lg:flex-row gap-4'>
            <BillCard 
                className='bg-4' 
                iconClassName='bg-3' 
                labelClassName='text-3'
                buttonClassName='bg-transparent text-6 !border border-6 ' 
                title={t('home.quickStart.incomeBill')} 
                amount={'12015200'} 
                icon='ph:chart-line-up-bold'/>
            <BillCard 
                className='bg-7' 
                iconClassName='bg-8' 
                labelClassName='text-8' 
                buttonClassName='bg-transparent text-9 !border border-9' 
                title={t('home.quickStart.expenseBill')} 
                amount={'12015200'} 
                icon='ph:chart-line-down-bold' />
            <BillCard 
                className='bg-11' 
                iconClassName='bg-10' 
                labelClassName='text-10' 
                buttonClassName='bg-transparent text-12 !border border-12' 
                title={t('home.quickStart.recieveInCash')} 
                amount={'12015200'} 
                icon='ph:money-bold' />
            <BillCard 
                className='bg-18' 
                iconClassName='bg-19' 
                labelClassName='text-19' 
                buttonClassName='bg-transparent text-20 !border border-20' 
                title={t('home.quickStart.paymentInCash')} 
                amount={'12015200'} 
                icon='ph:money-bold' />
        </span>
        </div>
        {/* Quick Report */}
        <div className='flex flex-col rounded-lg gap-4 pb-4 overflow-hidden'>
            <span className='flex flex-row justify-center items-center bg-primary p-2 gap-2'>
                <Icon icon='bi:pin' className='text-white lg:text-[22px] text-[18px] rotate-45' />
                <h1 className='text-white text-center lg:text-[22px] text-[18px]'>{t('home.quickStart.quickReport')}</h1>
            </span>
            <span className='flex lg:flex-row flex-col gap-4'>
                <QuickReportCard icon='streamline:receipt' title={t('home.quickStart.quick_report.bill_print')} label={t('home.quickStart.quick_report.bill_print_description')} iconClassName='bg-13'/>
                <QuickReportCard icon='material-symbols:receipt-outline-rounded' title={t('home.quickStart.quick_report.money_receipt')} label={t('home.quickStart.quick_report.current_due_description')} iconClassName='bg-15'/>
                <QuickReportCard icon='mingcute:warning-line' title={t('home.quickStart.quick_report.current_due')} label={t('home.quickStart.quick_report.current_due_description')} iconClassName='bg-15'/>
                <QuickReportCard icon='material-symbols-light:finance-rounded' title={t('home.quickStart.quick_report.income_expense')} label={t('home.quickStart.quick_report.income_expense_description')} iconClassName='bg-16'/>
            </span>
        </div>
    </div>
  );
};
