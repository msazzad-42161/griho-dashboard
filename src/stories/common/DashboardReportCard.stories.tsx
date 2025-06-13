import type { Meta, StoryObj } from '@storybook/react';
import { DashboardReportCard } from './DashboardReportCard';

const meta = {
  title: 'Common/DashboardReportCard',
  component: DashboardReportCard,
  parameters: {
    // Enable autodocs
    docs: {
      description: {
        component: 'A card component that displays a list of report items with icons and dividers.'
      },
    },
  },
  tags: ['autodocs'],
  // Define controls for the component props
  argTypes: {
    title: {
      description: 'The main title of the card',
      control: 'text',
    },
    className: {
      description: 'Additional CSS classes to apply to the card',
      control: 'text',
    },
    cardItems: {
      description: 'Array of card items to display',
      control: 'object',
    },
  },
} satisfies Meta<typeof DashboardReportCard>;

export default meta;
type Story = StoryObj<typeof DashboardReportCard>;

// Default story
export const Default: Story = {
  args: {
    title: 'Reports Dashboard',
    cardItems: [
      {
        title: 'Monthly Report',
        subtitle: 'View monthly statistics',
        iconClassname: 'bg-primary',
      },
      {
        title: 'Annual Report',
        subtitle: 'View yearly overview',
        iconClassname: 'bg-red-500',
      },
    ],
  },
};

// Story with single item
export const SingleItem: Story = {
  args: {
    title: 'Single Report',
    cardItems: [
      {
        title: 'Weekly Report',
        subtitle: 'View weekly metrics',
        iconClassname: 'bg-primary',
      },
    ],
  },
};

// Story with custom styling
export const CustomStyling: Story = {
  args: {
    title: 'Custom Style Reports',
    className: 'shadow-lg',
    cardItems: [
      {
        title: 'Custom Report 1',
        subtitle: 'Custom description 1',
        iconClassname: 'bg-blue-500',
      },
      {
        title: 'Custom Report 2',
        subtitle: 'Custom description 2',
        iconClassname: 'bg-green-500',
      },
    ],
  },
};