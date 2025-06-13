import type { Meta, StoryObj } from '@storybook/react';
import { IconedBillCard } from './IconedBillCard';

const meta: Meta<typeof IconedBillCard> = {
  title: 'Common/IconedBillCard',
  component: IconedBillCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Card title text',
    },
    icon: {
      control: 'text',
      description: 'Iconify icon name',
    },
    labelIconSize: {
      control: 'radio',
      options: ['default', 'small'],
      description: 'Size of the label icon',
    },
    buttonLabel: {
      control: 'text',
      description: 'Text for the button',
    },
    className: {
      control: 'text',
      description: 'Additional classes for the main container',
    },
    iconClassName: {
      control: 'text',
      description: 'Additional classes for the icon container',
    },
    labelClassName: {
      control: 'text',
      description: 'Additional classes for the label text',
    },
    buttonClassName: {
      control: 'text',
      description: 'Additional classes for the button',
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler function',
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconedBillCard>;

export const Default: Story = {
  args: {
    title: 'Sample Bill Card',
    icon: 'ph:chart-line-up-bold',
    buttonLabel: 'Click me',
    className: 'bg-white',
    iconClassName: 'bg-blue-500',
    labelClassName: 'text-gray-800',
    buttonClassName: 'bg-blue-500 text-white',
  },
};

export const SmallIcon: Story = {
  args: {
    ...Default.args,
    labelIconSize: 'small',
    title: 'Small Icon Variant',
  },
};

export const CustomIcon: Story = {
  args: {
    ...Default.args,
    icon: 'ph:money-bold',
    title: 'Custom Icon Card',
    iconClassName: 'bg-green-500',
  },
};
