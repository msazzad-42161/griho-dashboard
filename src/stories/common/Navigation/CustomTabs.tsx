import * as React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Define the interface for the tab structure
interface Tab {
  value: string; // The value used to identify the tab
  label: string; // The display label for the tab trigger
  content: React.ReactNode; // The content to be displayed in the tab
}

// Define the interface for the Tabs component props
interface CustomTabsProps {
  tabs?: Tab[]; // Array of tab objects
}
const tabsData = [
  {
    value: "overview",
    label: "Overview",
    content: <div>Overview content goes here.</div>,
  },
  {
    value: "account",
    label: "Account Settings",
    content: <div>Account settings content goes here.</div>,
  },
  {
    value: "password",
    label: "Change Password",
    content: <div>Password change content goes here.</div>,
  },
]
export const CustomTabs: React.FC<CustomTabsProps> = ({ tabs=tabsData }) => {
  return (
    <Tabs defaultValue={tabs[0]?.value} className="w-full">
      {/* Dynamic Tab List */}
      <TabsList className="flex justify-start w-full mb-4 px-4">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className="py-2 text-gray-600 text-sm lg:text-lg font-medium border-b-2 border-transparent hover:border-gray-300 focus:outline-none"
            style={{ transition: 'none' }}
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {/* Dynamic Tab Content */}
      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          <div>{tab.content}</div>
        </TabsContent>
      ))}
    </Tabs>
  );
};
