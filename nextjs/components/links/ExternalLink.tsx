"use client";

import { usePathname } from "next/navigation";

interface ExternalLinkProps {
  element: string | React.ReactElement;
  href: string;
  className?: string;
  eventName: "ClickUserService" | "ClickImage";
  target: string;
  locationOnPage: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({
  element,
  target,
  href,
  className,
  eventName,
  locationOnPage,
}) => {
  const pathname = usePathname();
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      href={href}
    >
      {element}
    </a>
  );
};

export default ExternalLink;
