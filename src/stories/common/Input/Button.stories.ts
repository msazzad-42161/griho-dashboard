import { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Input/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    label: { control: 'text' },
    primary: { control: 'boolean' },
    disabled: { control: 'boolean' },
    icon:{control:'text'},
    size: { control: 'select', options: ['small', 'medium', 'large'] },
  },
  tags:['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

// Primary button
export const PrimaryButton: Story = {
  args: {
    primary: true,
    label: 'Primary Button',
    size: 'medium',
  },
};

// Secondary button
export const SecondaryButton: Story = {
  args: {
    primary: false,
    label: 'Secondary Button',
    size: 'medium',
  },
};

// Button with icon and label
export const IconedButton: Story = {
  args: {
    primary: true,
    label: 'With Icon',
    icon: 'lucide:check-circle',
    size: 'medium',
  },
};

// Icon-only button
export const IconOnlyButton: Story = {
  args: {
    primary: true,
    icon: "lucide:check-circle",
    size: 'medium',
  },
};

// Disabled button
export const DisabledButton: Story = {
  args: {
    primary: true,
    label: 'Disabled Button',
    size: 'medium',
    disabled: true,
  },
};
