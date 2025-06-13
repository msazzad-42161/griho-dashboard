import { Meta, StoryObj } from '@storybook/react';
import { BillCard } from './BillCard';

const meta: Meta<typeof BillCard> = {
  title: 'Common/BillCard',
  component: BillCard,
  argTypes: {
    title: { control: 'text' },
    amount: { control: 'text' },
    onClick: { action: 'clicked' },
    className: { control: 'text' },
    buttonClassName: { control: 'text' },
    iconClassName: { control: 'text' },
    labelClassName: { control: 'text' },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default BillCard
export const DefaultBillCard: Story = {
  args: {
    title: 'Electricity Bill',
    amount: '$120.00',
    className: 'bg-white shadow-md',
    buttonClassName: 'text-blue-500 border-blue-500',
    iconClassName: 'text-red-500',
    labelClassName: 'text-gray-500',
    icon: 'ph:chart-line-up-bold'
  },
};
