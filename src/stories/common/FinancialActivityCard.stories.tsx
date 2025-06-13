import { Meta, StoryObj } from '@storybook/react';
import { FinancialActivityCard } from './FinancialActivityCard';

const meta: Meta<typeof FinancialActivityCard> = {
  title: 'Common/FinancialActivityCard',
  component: FinancialActivityCard,
  argTypes: {
    title: { control: 'text' },
    amount: { control: 'text' },
    onClick: { action: 'clicked' },
    className: { control: 'text' },
    iconClassName: { control: 'text' },
    labelClassName: { control: 'text' },
    icon: { control: 'text' },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default Financial Activity Card
export const DefaultFinancialActivityCard: Story = {
  args: {
    title: 'Total Revenue',
    amount: '$5,234.00',
    className: 'bg-3 shadow-md',
    iconClassName: 'bg-blue-500',
    labelClassName: 'text-gray-800',
    amountClassName: 'text-gray-800',
    icon: 'ph:chart-line-up-bold',
  },
};

// Alternative Example with Different Icon and Colors
export const ExpensesCard: Story = {
  args: {
    title: 'Monthly Expenses',
    amount: '$1,847.00',
    className: 'bg-white shadow-md',
    iconClassName: 'bg-red-500',
    labelClassName: 'text-gray-800',
    amountClassName: 'text-gray-800',
    icon: 'ph:trend-down-bold',
  },
};
