import { DashboardReportCard } from '@/stories/common/DashboardReportCard';
import { Button } from '@/stories/common/Input/Button';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface Props {}

export const HomeReports: React.FC<Props> = () => {
  const { t } = useTranslation();
  
  return (
    <div className='flex flex-col lg:gap-10 gap-8'>
        <span className='flex flex-col'>
        <h1 className='text-primary lg:text-3xl text-xl font-bold'>{t('reports')}</h1>
        <p className='text-primary lg:text-xl text-base'>{t('home.reports.see_all_reports')}</p>
        </span>
        <div className='lg:grid lg:grid-cols-2 lg:gap-4 flex flex-col gap-4'>
            <DashboardReportCard 
                title={t('home.reports.collection')}
                cardItems={[
                    {
                        title: t('home.reports.by_date'),
                        subtitle: t('home.reports.collection_report_by_date'),
                        iconClassname: 'bg-13'
                    },
                    {
                        title: t('home.reports.by_month'),
                        subtitle: t('home.reports.collection_report_by_month'),
                        iconClassname: 'bg-14'
                    },
                    {
                        title: t('home.reports.by_voucher'),
                        subtitle: t('home.reports.collection_report_by_voucher'),
                        iconClassname: 'bg-13'
                    }
                  ]}
            />
            <DashboardReportCard 
                title={t('home.reports.expense')}
                cardItems={[
                    {
                        title: t('home.reports.by_date'),
                        subtitle: t('home.reports.income_expense_per_date'),
                        iconClassname: 'bg-13'
                    },
                    {
                        title: t('home.reports.by_month'),
                        subtitle: t('home.reports.expense_per_month'),
                        iconClassname: 'bg-14'
                    },
                    {
                        title: t('home.reports.gl_expense'),
                        subtitle: t('home.reports.gl_report_of_any_expense'),
                        iconClassname: 'bg-13'
                    }
                  ]}
            />
            <DashboardReportCard 
                title={t('home.reports.income_expense_cash_flow')}
                cardItems={[
                    {
                        title: t('home.reports.by_date'),
                        subtitle: t('home.reports.income_expense_per_date'),
                        iconClassname: 'bg-13'
                    },
                    {
                        title: t('home.reports.by_month'),
                        subtitle: t('home.reports.income_expense_per_month'),
                        iconClassname: 'bg-14'
                    },
                    {
                        title: t('home.reports.per_head'),
                        subtitle: t('home.reports.income_expense_per_head'),
                        iconClassname: 'bg-13'
                    }
                  ]}
            />
            <DashboardReportCard 
                title={t('home.reports.advanced_report')}
                cardItems={[
                    {
                        title: t('home.reports.advanced_cash_flow'),
                        subtitle: t('home.reports.advanced_income_expense_report'),
                        iconClassname: 'bg-13'
                    },
                    {
                        title: t('home.reports.income_expense_ledger'),
                        subtitle: t('home.reports.income_expense_ledger_report'),
                        iconClassname: 'bg-14'
                    },
                    {
                        title: t('home.reports.balance_sheet'),
                        subtitle: t('home.reports.balance_sheet'),
                        iconClassname: 'bg-13'
                    }
                  ]}
            />
            <DashboardReportCard 
                title={t('home.reports.on_demand_report')}
                cardItems={[
                    {
                        title: t('home.reports.tenant_ledger'),
                        subtitle: t('home.reports.tenant_ledger_report'),
                        iconClassname: 'bg-13'
                    },
                    {
                        title: t('home.reports.income_expense_ledger'),
                        subtitle: t('home.reports.income_expense_ledger_report'),
                        iconClassname: 'bg-14'
                    },
                    {
                        title: t('home.reports.tenant_status'),
                        subtitle: t('home.reports.tenant_status'),
                        iconClassname: 'bg-13'
                    }
                  ]}
            />
            <DashboardReportCard 
                title={t('home.reports.other_reports')}
                cardItems={[
                    {
                        title: t('home.reports.cash_to_bank_flow'),
                        subtitle: t('home.reports.cash_to_bank_flow'),
                        iconClassname: 'bg-13'
                    },
                    {
                        title: t('home.reports.bank_to_cash_flow'),
                        subtitle: t('home.reports.bank_to_cash_flow'),
                        iconClassname: 'bg-14'
                    },
                    {
                        title: t('home.reports.vendor_report'),
                        subtitle: t('home.reports.vendor_report'),
                        iconClassname: 'bg-13'
                    },
                    {
                        title: t('home.reports.meter_reading'),
                        subtitle: t('home.reports.meter_reading'),
                        iconClassname: 'bg-14'
                    },
                    {
                        title: t('home.reports.rent_service_charge'),
                        subtitle: t('home.reports.rent_service_charge'),
                        iconClassname: 'bg-13'
                    },
                    {
                        title: t('home.reports.utility_bill_summary'),
                        subtitle: t('home.reports.utility_bill_summary'),
                        iconClassname: 'bg-14'
                    }
                  ]}
            />
        </div>
    </div>
  );
};
