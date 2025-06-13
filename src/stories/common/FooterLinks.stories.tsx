
import { Meta, StoryObj } from '@storybook/react';
import { FooterLinks as FooterLinksComponent } from './FooterLinks';

const meta: Meta<typeof FooterLinksComponent> = {
  title: 'Common/Footer/FooterLinks',
  component: FooterLinksComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const FooterLinks: Story = {
  args: {
    title: 'Company',
    links: [
      { label: 'About us', href: '#' },
      { label: 'Solution', href: '#' },
      { label: 'Customer care', href: '#' },
      { label: 'Price', href: '#' },
      { label: 'Career', href: '#' },
    ],
  },
};