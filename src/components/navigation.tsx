import LinkButton from "@/components/link-button";
import {
  NotebookText,
  BriefcaseBusiness,
  MonitorPlay,
  Newspaper,
  PocketKnife,
  Info,
  Mail,
} from "lucide-react";

type TNavItem = {
  to: string;
  child: React.ReactNode;
};

export const navItems: TNavItem[] = [
  {
    to: "/blog",
    child: (
      <>
        <NotebookText />
        Blog
      </>
    ),
  },
  {
    to: "/portfolio",
    child: (
      <>
        <BriefcaseBusiness />
        Portfolio
      </>
    ),
  },
  {
    to: "es/videos",
    child: (
      <>
        <MonitorPlay />
        Videos
      </>
    ),
  },
  {
    to: "/microblog",
    child: (
      <>
        <Newspaper />
        Microblog
      </>
    ),
  },
  {
    to: "/resources",
    child: (
      <>
        <PocketKnife />
        Resources
      </>
    ),
  },
  {
    to: "/about",
    child: (
      <>
        <Info />
        About
      </>
    ),
  },
  {
    to: "/contact",
    child: (
      <>
        <Mail />
        Contact
      </>
    ),
  },
];

type Props = {
  lang: "en" | "es";
};

export default function Navigation(props: Props) {
  return (
    <nav className="px-4 sm:px-0 max-w-[65ch] mx-auto prose prose-invert pt-5 pb-20">
      <h2 id="navigation">Navigation</h2>
      <ul className="list-none p-0 flex flex-wrap gap-4">
        {navItems.map((navItem, index) => (
          <li key={index} className="m-0 p-0">
            <LinkButton
              variant="link"
              href={navItem.to}
              className="p-0 text-base gap-1"
            >
              {navItem.child}
            </LinkButton>
          </li>
        ))}
      </ul>
    </nav>
  );
}
