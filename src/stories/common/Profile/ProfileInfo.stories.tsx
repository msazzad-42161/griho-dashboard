import { Meta, StoryObj } from '@storybook/react';
import { ProfileInfo } from './ProfileInfo';

const meta: Meta<typeof ProfileInfo> = {
  title: 'Common/Profile/ProfileInfo',
  component: ProfileInfo,
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text'},
    handle: { control: 'text'},
    location: { control: 'text'},
    imageUrl: { control: 'text'},//example.com/profile.jpg' },
    isPremium: { control: 'boolean'},
    progress: { control: { type: 'range', min: 0, max: 100 }},
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'Arafat Islam',
    handle: 'Codex135',
    location: 'Uttara, Bangladesh',
    imageUrl: 'https://i.pravatar.cc/300',
    isPremium: true,
    progress: 90,
  },
};
