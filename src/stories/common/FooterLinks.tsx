

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterLinksProps {
  /** The title of the link group (e.g., "Company", "Resources") */
  title: string;
  /** Array of links */
  links: FooterLink[];
}

export const FooterLinks = ({ title, links }: FooterLinksProps) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="text-gray-600 hover:text-gray-900">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
