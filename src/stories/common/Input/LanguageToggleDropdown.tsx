import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export interface Language {
  label: string;
  code: string;
  icon: string; // Path to SVG file
}

export interface LanguageToggleDropdownProps {
  languages?: Language[]; // Optional list of languages
  currentLanguage?: string; // Optional current selected language code
  onLanguageChange?: (languageCode: string) => void; // Callback for language change
}

export const LanguageToggleDropdown: React.FC<LanguageToggleDropdownProps> = ({
  languages = [
    { label: 'Eng (US)', code: 'en', icon: '/src/assets/flags/usa.svg' },
    { label: 'বাংলা (BD)', code: 'bn', icon: '/src/assets/flags/bd.svg' },
  ], // Default language options
  currentLanguage = 'en', // Default language
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(currentLanguage); // Local state for selected language
  const { i18n } = useTranslation();
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (languageCode: string) => {
    setSelectedLanguage(languageCode);
    i18n.changeLanguage(languageCode);
    setIsOpen(false); // Close the dropdown after selection
  };

  // Find the current language details
  const currentLang = languages.find((lang) => lang.code === selectedLanguage);

  return (
    <div className="relative inline-block text-left">
      {/* Toggle Button */}
      <div
        className="flex items-center cursor-pointer text-gray-600"
        onClick={handleToggle}
      >
        {currentLang && (
          <>
            <img src={currentLang.icon} alt={currentLang.label} className="w-6 h-6 rounded-full" />
            <span className="ml-2 text-sm">{currentLang.label}</span>
          </>
        )}
        <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {languages.map((language) => (
              <div
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              >
                <img src={language.icon} alt={language.label} className="w-6 h-6 rounded-full" />
                <span>{language.label}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
