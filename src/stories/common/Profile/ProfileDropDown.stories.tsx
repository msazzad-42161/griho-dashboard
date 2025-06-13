import { Meta, StoryObj } from '@storybook/react';
import { ProfileDropDown, ProfileDropDownProps } from './ProfileDropDown';

// Storybook metadata for UserProfile
const meta: Meta<typeof ProfileDropDown> = {
  title: 'Common/Profile/ProfileDropDown',
  component: ProfileDropDown,
  argTypes: {
    name: { control: 'text' },
    role: { control: 'text' },
    profileImage: { control: 'text'},
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story for ProfileDropDown
export const Default: Story = {
  args: {
    name: 'Arafat Islam',
    role: 'User',
    profileImage: 'https://i.pravatar.cc/300',
  } as ProfileDropDownProps,
};

// Story for a different user with a different profile image
export const AdminUser: Story = {
  args: {
    name: 'Jane Doe',
    role: 'Admin',
    profileImage: 'https://i.pravatar.cc/300',
  } as ProfileDropDownProps,
};
