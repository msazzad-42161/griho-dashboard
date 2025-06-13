import { DataTable } from '@/stories/common/DataTable';
import React from 'react';
import { Icon } from '@iconify/react';
import { DonutChart } from '@/stories/common/Charts/DonutChart';
import { useTranslation } from 'react-i18next';

const ProfileOverview: React.FC = () => {
  const { t } = useTranslation();

  const donutChartData = [
    { name: t('profile.overview.unitLimit'), value: 55, fill: '#FF4081' },
    { name: t('profile.overview.unitUsed'), value: 33, fill: '#5C3AFF' },
    { name: t('profile.overview.unitRemain'), value: 12, fill: '#FFC107' },
  ];

  const data = {
    [t('profile.overview.product')]: ["Apartment Management"],
    [t('profile.overview.subscription')]: [<span className="text-green-500">{t('profile.premium')}</span>],
    [t('profile.overview.registrationDate')]: ["19-MAY-2024"],
    [t('profile.overview.serviceExpiryDate')]: [<span className="text-red-500">28-MAR-2034</span>],
    [t('profile.overview.subscriptionPlan')]: ["Forever"],
    [t('profile.overview.maximumFlatNumber')]: ["100"],
    [t('profile.overview.serviceCharge')]: ["৳ 0"],
    [t('profile.overview.productStatus')]: [
      <span className="text-green-500 items-center flex justify-end gap-2">
        <Icon icon={'lucide:circle-check-big'} color='#22c55e' fontSize={16}/>
        {t('profile.overview.active')}
      </span>
    ],
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4 h-full">
      <div className="w-full lg:basis-3/4">
        <DataTable
          data={data}
          title={t('profile.overview.tableTitle')}
          tableStyle='border rounded-lg overflow-hidden h-full'
          cellStyle='text-sm'
        />
      </div>
      <div className="w-full lg:basis-1/4 lg:min-w-[250px]">
        <DonutChart 
          headerText={t('profile.overview.donutChartHeader', { used: 1, total: 100 })} 
          data={donutChartData} 
        />
      </div>
    </div>
  );
};

export default ProfileOverview;
