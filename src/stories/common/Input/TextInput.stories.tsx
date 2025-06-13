import { Meta, StoryObj } from '@storybook/react';
import { TextInput } from './TextInput';

const meta: Meta<typeof TextInput> = {
  title: 'Input/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    error: { control: 'text' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number'],
    },
  },
  parameters:{
    controls:{
        expanded:true
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story for TextInput (without label)
export const Default: Story = {
  args: {
    label: '',
    placeholder: 'Enter your name',
    value: '',
    error: '',
    type: 'text',
  },
};

// Story for TextInput with a label
export const WithLabel: Story = {
  args: {
    label: 'Your Name',
    placeholder: 'Enter your name',
    value: '',
    error: '',
    type: 'text',
  },
};

// Story for TextInput with error state
export const WithError: Story = {
  args: {
    label: '',
    placeholder: 'Enter your name',
    value: '',
    error: 'Name is required',
    type: 'text',
  },
};

// Story for TextInput with password type
export const PasswordInput: Story = {
  args: {
    label: '',
    placeholder: 'Enter your password',
    value: '',
    error: '',
    type: 'password',
  },
};

// Story for TextInput with email type
export const EmailInput: Story = {
  args: {
    label: '',
    placeholder: 'Enter your email',
    value: '',
    error: '',
    type: 'email',
  },
};

// Story for TextInput with number type
export const NumberInput: Story = {
  args: {
    label: '',
    placeholder: 'Enter your number',
    value: 0,
    error: '',
    type: 'number',
  },
  argTypes:{
    value:{
        control:'number'
    }
  }
};
