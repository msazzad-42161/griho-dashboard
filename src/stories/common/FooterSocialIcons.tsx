import React from 'react';
import { FooterSocialIcon } from './FooterSocialIcon';

export interface SocialLink {
  icon: string;
  alt: string;
  href: string;
}

export interface FooterSocialIconsProps {
  /** Array of social media links with icons */
  socialLinks: SocialLink[];
}

export const FooterSocialIcons = ({ socialLinks }: FooterSocialIconsProps) => {
  return (
    <div className="flex gap-1">
      {socialLinks.map((socialLink) => (
        <FooterSocialIcon
          key={socialLink.alt}
          icon={socialLink.icon}
          alt={socialLink.alt}
          href={socialLink.href}
        />
      ))}
    </div>
  );
};
