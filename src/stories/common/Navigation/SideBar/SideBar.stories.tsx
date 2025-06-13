import type { Meta, StoryObj } from '@storybook/react';
import { SideBar } from './SideBar';

const meta: Meta<typeof SideBar> = {
  title: 'Navigation/SideBar',
  component: SideBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    menuItems: {
      control: 'object',
      description: 'Array of menu items to display in the sidebar',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SideBar>;

export const Default: Story = {
  args: {
    menuItems: [
      { label: 'Home', icon: 'home', link: '/' },
      { label: 'Profile', icon: 'user', link: '/profile' },
      { label: 'Settings', icon: 'settings', link: '/settings' },
    ],
  },
};
