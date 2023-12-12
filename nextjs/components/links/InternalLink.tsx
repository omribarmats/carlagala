"use client";
import { usePathname } from "next/navigation";

import Link from "next/link";

interface InternalLinkProps {
  element: string | React.ReactElement;
  href: string;
  className?: string;
  eventName?:
    | "ClickUserName"
    | "ClickUserImage"
    | "ClickInterviewPage"
    | "ClickBadgeName"
    | "ClickFeaturedImage"
    | "ClickReadMoreAnswers"
    | "ClickTOC"
    | "ClickQuestionPage"
    | "ClickInnerPage";
  target?: string;
  locationOnPage?: string;
}

export const InternalLink: React.FC<InternalLinkProps> = ({
  element,
  className,
  href,
}) => {
  const pathname = usePathname();
  return (
    <Link className={className} href={href}>
      {element}
    </Link>
  );
};
