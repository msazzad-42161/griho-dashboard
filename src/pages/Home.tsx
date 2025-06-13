import { useTranslation } from "react-i18next";
import Layout from "./Layout";
import BreadcrumbsAndTabs from "@/stories/common/BreadcrumbsAndTabs";
import { HomeQuickStart } from "@/components/HomeQuickStart";
import { HomeDashBoard } from "@/components/HomeDashBoard";
import { HomeAddOnServices } from "@/components/HomeAddOnServices";
import { useState } from "react";
import { HOME_TABS } from "@/constants";
import { HomeReports } from "@/components/HomeReports";


export const Home = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<HOME_TABS>(HOME_TABS.QuickStart);

  return (
    <Layout>
      <div className="flex flex-col">
        <BreadcrumbsAndTabs 
          activeTab={activeTab} 
          setActiveTab={(tab: string) => setActiveTab(tab as HOME_TABS)} 
          tabs={Object.values(HOME_TABS) as string[]} 
          breadcrumbIcon="ri:home-smile-line" 
          title={t('home.title')}
        />

        {/* Main Content Area */}
        <div className="p-4">
          {activeTab === HOME_TABS.QuickStart && <HomeQuickStart />}
          {activeTab === HOME_TABS.Dashboard && <HomeDashBoard />}
          {activeTab === HOME_TABS.AddOnService && <HomeAddOnServices />}
          {activeTab === HOME_TABS.Reports && <HomeReports />}
        </div>
      </div>
    </Layout>
  );
};