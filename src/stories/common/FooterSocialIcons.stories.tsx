import { Meta, StoryObj } from '@storybook/react';
import { FooterSocialIcons as FooterSocialIconsComponent } from './FooterSocialIcons';

const meta: Meta<typeof FooterSocialIconsComponent> = {
  title: 'Common/Footer/FooterSocialIcons',
  component: FooterSocialIconsComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const FooterSocialIcons: Story = {
  args: {
    socialLinks: [
      { icon: 'path/to/linkedin-icon.svg', alt: 'LinkedIn', href: '#' },
      { icon: 'path/to/facebook-icon.svg', alt: 'Facebook', href: '#' },
      { icon: 'path/to/twitter-icon.svg', alt: 'X', href: '#' },
      { icon: 'path/to/instagram-icon.svg', alt: 'Instagram', href: '#' },
    ],
  },
};
