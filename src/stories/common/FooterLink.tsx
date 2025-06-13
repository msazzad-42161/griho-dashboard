

export interface FooterLinkProps {
  /** The text of the link */
  label: string;
  /** The URL of the link */
  href: string;
}

export const FooterLink = ({ label, href }: FooterLinkProps) => {
  return (
    <li>
      <a href={href} className="text-gray-600 hover:text-gray-900">
        {label}
      </a>
    </li>
  );
};
