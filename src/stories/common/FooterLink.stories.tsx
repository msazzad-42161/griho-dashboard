
import { Meta, StoryObj } from '@storybook/react';
import { FooterLink as FooterLinkComponent } from './FooterLink';

const meta: Meta<typeof FooterLinkComponent> = {
  title: 'Common/Footer/FooterLinks/FooterLink',
  component: FooterLinkComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const FooterLink: Story = {
  args: {
    label: 'About us',
    href: '#',
  },
};
