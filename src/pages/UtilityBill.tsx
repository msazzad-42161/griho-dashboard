import { useTranslation } from "react-i18next"
import Layout from "./Layout"
import { UTILITY_BILL_TABS } from "@/constants";
import BreadcrumbsAndTabs from "@/stories/common/BreadcrumbsAndTabs";
import { useState } from "react";
import UtilityBillPostForm from "@/components/UtilityBillPostForm";

function UtilityBill() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<string>('');
  return (
    <Layout>
      <div className="flex flex-col">
        <BreadcrumbsAndTabs 
          activeTab={activeTab} 
          setActiveTab={(tab: string) => setActiveTab(tab)} 
          tabs={Object.values(UTILITY_BILL_TABS) as string[]} 
          breadcrumbIcon="ion:arrow-back" 
          title={t('utility_bill.title')}
        />
        {activeTab === UTILITY_BILL_TABS.GasMeterReading && (
          <UtilityBillPostForm 
            title={t('utility_bill.gas_meter_reading_posting')}
            onSearch={() => {}}
            onReport={() => {}}
            onSave={() => {}}
          />
        )}
        {activeTab === UTILITY_BILL_TABS.ElectricMeterReading && (
          <UtilityBillPostForm 
            title={t('utility_bill.electric_meter_reading_posting')}
            onSearch={() => {}}
            onReport={() => {}}
            onSave={() => {}}
          />
        )}
        {activeTab !== UTILITY_BILL_TABS.GasMeterReading && activeTab !== UTILITY_BILL_TABS.ElectricMeterReading && (
          <div>Main Entry</div>
        )}
      </div>
    </Layout>
  )
}

export default UtilityBill
