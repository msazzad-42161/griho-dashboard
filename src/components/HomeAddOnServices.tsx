import { IconedBillCard } from '@/stories/common/IconedBillCard';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
}

export const HomeAddOnServices: React.FC<Props> = () => {
  const {t} = useTranslation()
  return (
    <div className='flex flex-col lg:gap-[26px] gap-[22px]'>
      {/* top card container */}
        <div className='flex flex-col p-4 gap-10 bg-white rounded-lg'>
        <span className='flex flex-col'>
        <h1 className='text-primary lg:text-3xl text-xl font-bold'>{t('home.add_on.batch_process')}</h1>
        <p className='text-primary lg:text-xl text-base'>{t('home.add_on.all')}</p>
        </span>

        <div className='flex lg:flex-row flex-col gap-4'>
          <IconedBillCard
                className='bg-4' 
                iconClassName='bg-24 lg:w-[40px] lg:h-[40px] w-[30px] h-[30px]' 
                labelClassName='text-24 lg:text-3xl'
                title={t('home.add_on.income_bill')} 
                icon='ph:chart-line-up-bold'
                buttonLabel={t('home.add_on.batch_process')}
                buttonClassName='bg-transparent text-6 !border border-6 rounded-xl lg:text-lg text-sm' 
                />
          <IconedBillCard
                className='bg-7' 
                iconClassName='bg-8 lg:w-[40px] lg:h-[40px] w-[30px] h-[30px]' 
                labelClassName='text-8 lg:text-3xl'
                title={t('home.add_on.utility_bill')} 
                icon='ph:chart-line-up-bold'
                buttonLabel={t('home.add_on.batch_process')}
                buttonClassName='bg-transparent text-9 !border border-9 rounded-xl lg:text-lg text-sm' 
                />
          <IconedBillCard
                className='bg-11' 
                iconClassName='bg-10 lg:w-[40px] lg:h-[40px] w-[30px] h-[30px]' 
                labelClassName='text-10 lg:text-3xl'
                title={t('home.add_on.other_income')} 
                icon='ph:chart-line-up-bold'
                buttonLabel={t('home.add_on.batch_process')}
                buttonClassName='bg-transparent text-12 !border border-12 rounded-xl lg:text-lg text-sm' 
                />
        </div>
        </div>

        {/* bottom card container */}
        <div className='flex lg:flex-row flex-col lg:gap-[26px] gap-[22px]'>
        <div className='flex flex-1 flex-col p-4 gap-10 bg-white rounded-lg'>
        <h1 className='text-21 lg:text-3xl text-xl font-semibold'>{t('home.add_on.notification')}</h1>


        <div className='flex lg:flex-row flex-col gap-4'>
          <IconedBillCard
                className='bg-4' 
                iconClassName='bg-24 lg:w-[34px] lg:h-[34px] w-[24px] h-[24px]' 
                labelClassName='text-24 lg:text-2xl text-xl'
                title={t('home.add_on.bill')} 
                icon='ph:chart-line-up-bold'
                buttonLabel={t('home.add_on.sms_notification')}
                buttonClassName='bg-transparent text-6 !border border-6 rounded-xl lg:text-lg text-sm' 
                labelIconSize='small'
                />
          <IconedBillCard
                className='bg-7' 
                iconClassName='bg-8 lg:w-[34px] lg:h-[34px] w-[24px] h-[24px]' 
                labelClassName='text-8 lg:text-2xl text-xl'
                title={t('home.add_on.due')} 
                icon='ph:chart-line-up-bold'
                buttonLabel={t('home.add_on.sms_notification')}
                buttonClassName='bg-transparent text-9 !border border-9 rounded-xl lg:text-lg text-sm' 
                labelIconSize='small'
                />
        </div>
        </div>
        <div className='flex flex-1 flex-col p-4 gap-10 bg-white rounded-lg'>
        <h1 className='text-21 lg:text-3xl text-xl font-semibold'>{t('home.add_on.service_charge_update')}</h1>


        <div className='flex lg:flex-row flex-col gap-4'>
          <IconedBillCard
                className='bg-4' 
                iconClassName='bg-24 lg:w-[34px] lg:h-[34px] w-[24px] h-[24px]' 
                labelClassName='text-24 lg:text-2xl text-xl'
                title={t('home.add_on.service_charge_update')} 
                icon='ph:chart-line-up-bold'
                buttonLabel={t('home.add_on.service_charge_update')}
                buttonClassName='bg-transparent text-6 !border border-6 rounded-xl lg:text-lg text-sm' 
                labelIconSize='small'
                />
        </div>
        </div>
        </div>
    </div>
  );
};
