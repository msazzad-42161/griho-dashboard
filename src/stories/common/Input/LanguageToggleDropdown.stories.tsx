import { Meta, StoryObj } from '@storybook/react';
import { LanguageToggleDropdown } from './LanguageToggleDropdown';

const meta: Meta<typeof LanguageToggleDropdown> = {
  title: 'Input/LanguageToggleDropdown',
  component: LanguageToggleDropdown,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default Language Toggle Dropdown
export const Default: Story = {
  args: {
    // The args are optional since the component has internal defaults
  },
};

// Story with custom languages
export const WithCustomLanguages: Story = {
  args: {
    languages: [
      { label: 'English', code: 'en', icon: 'twemoji:flag-for-flag-united-states' },
      { label: 'Français', code: 'fr', icon: 'twemoji:flag-for-flag-france' },
      { label: 'Español', code: 'es', icon: 'twemoji:flag-for-flag-spain' },
    ],
    currentLanguage: 'fr', // Default language is French
    onLanguageChange: (languageCode) => {
      alert(`Language changed to: ${languageCode}`);
    },
  },
};
