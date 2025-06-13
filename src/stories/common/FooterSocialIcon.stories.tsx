
import { Meta, StoryObj } from '@storybook/react';
import { FooterSocialIcon } from './FooterSocialIcon';

const meta: Meta<typeof FooterSocialIcon> = {
  title: 'Common/Footer/FooterSocialIcons/FooterSocialIcon',
  component: FooterSocialIcon,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },  // Control for background color
    iconColor: { control: 'color' },        // Control for icon color
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: 'path/to/linkedin-icon.svg',
    alt: 'LinkedIn',
    href: '#',
    backgroundColor: '#4A5568',  // Default background color
    iconColor: '#FFFFFF',        // Default icon color (white)
  },
};

export const CustomIconColor: Story = {
  args: {
    icon: 'path/to/facebook-icon.svg',
    alt: 'Facebook',
    href: '#',
    backgroundColor: '#3b5998',  // Facebook blue
    iconColor: '#FFFFFF',        // White icon color
  },
};

export const InvertedIconColor: Story = {
  args: {
    icon: 'path/to/twitter-icon.svg',
    alt: 'X',
    href: '#',
    backgroundColor: '#1DA1F2',  // Twitter blue
    iconColor: '#000000',        // Black icon color (to show icon inversion)
  },
};
