import type { Meta, StoryObj } from '@storybook/react';
import BreadcrumbsAndTabs from './BreadcrumbsAndTabs';
import { HOME_TABS } from '@/constants';

type Tab = string;

const meta: Meta<typeof BreadcrumbsAndTabs> = {
  title: 'Components/BreadcrumbsAndTabs',
  component: BreadcrumbsAndTabs,
  parameters: {
  },
  tags: ['autodocs'],
  argTypes: {
    activeTab: { 
      control: 'select', 
      options: Object.values(HOME_TABS),
    },
    breadcrumbIcon: { control: 'text' },
    title: { control: 'text' },
    setActiveTab: { action: 'tab changed' }
  },
};

export default meta;
type Story = StoryObj<typeof BreadcrumbsAndTabs>;

export const Default: Story = {
  args: {
    activeTab: HOME_TABS.Dashboard,
    tabs: Object.values(HOME_TABS) as Tab[],
    breadcrumbIcon: 'ri:home-smile-line',
    title: 'home.title',
  },
};

export const CustomTabs: Story = {
  args: {
    activeTab: 'settings',
    tabs: ['settings', 'profile', 'notifications', 'security'] as Tab[],
    breadcrumbIcon: 'mdi:settings',
    title: 'settings.title',
  },
};