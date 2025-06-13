import { FooterLinks } from "./FooterLinks";
import { FooterAppDownload } from "./FooterAppDowload";
import { FooterSocialIcons } from "./FooterSocialIcons";

export const Footer = () => {
  const companyLinks = [
    { label: "About us", href: "#" },
    { label: "Solution", href: "#" },
    { label: "Customer care", href: "#" },
    { label: "Price", href: "#" },
    { label: "Career", href: "#" },
  ];

  const resourcesLinks = [
    { label: "Blog", href: "#" },
    { label: "Help center", href: "#" },
    { label: "FAQs", href: "#" },
  ];
  const socialLinks = [
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
      alt: "LinkedIn",
      href: "#",
    },
    {
      icon: "https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg",
      alt: "Facebook",
      href: "#",
    },
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg",
      alt: "X",
      href: "#",
    },
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg",
      alt: "Instagram",
      href: "#",
    },
  ];

  return (
    <footer className="bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Logo & Description */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
              className="h-8 aspect-square"
            />
            <h2 className="text-xl font-bold">GRIHO</h2>
          </div>
          <p className="text-gray-600">
            Griho is a leading and rapidly expanding building management
            platform in Bangladesh.
          </p>
          <FooterSocialIcons socialLinks={socialLinks} />
        </div>

        {/* Company Links */}
        <FooterLinks title="Company" links={companyLinks} />

        {/* Resources Links */}
        <FooterLinks title="Resources" links={resourcesLinks} />

        {/* Download App Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Download App</h3>
          <FooterAppDownload />
        </div>
      </div>
    </footer>
  );
};
