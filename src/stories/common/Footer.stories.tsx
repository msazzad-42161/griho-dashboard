
import { Meta, StoryObj } from '@storybook/react';
import { Footer as FooterComponent } from './Footer';

const meta: Meta<typeof FooterComponent> = {
  title: 'Common/Footer',
  component: FooterComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Footer: Story = {};
