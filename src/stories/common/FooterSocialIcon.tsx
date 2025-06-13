

export interface FooterSocialIconProps {
  /** The path to the icon */
  icon: string;
  /** Alt text for the icon */
  alt: string;
  /** URL to link to the social media profile */
  href: string;
  /** Optional background color */
  backgroundColor?: string;
  /** Optional icon color */
  iconColor?: string;
}

export const FooterSocialIcon = ({
  icon,
  alt,
  href,
  backgroundColor = '#4A5568',  // Default background color
  iconColor = '#FFFFFF',         // Default icon color (white)
}: FooterSocialIconProps) => {
  return (
    <a href={href} aria-label={alt} className="inline-block">
      <div
        className={`w-8 h-8 rounded-full flex items-center bg-[${backgroundColor}]`}
      >
        <img src={icon} alt={alt} className="w-6 h-6" />
      </div>
    </a>
  );
};
