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
import { useTranslations, useTranslatedPath } from "@/i18n/utils";

type TNavItem = {
  type: string;
  icon: React.ReactNode;
};

export const navItems: TNavItem[] = [
  {
    type: "blog",
    icon: <NotebookText />,
  },
  { type: "portfolio", icon: <BriefcaseBusiness /> },
  {
    type: "videos",
    icon: <MonitorPlay />,
  },
  {
    type: "microblog",
    icon: <Newspaper />,
  },
  {
    type: "resources",
    icon: <PocketKnife />,
  },
  {
    type: "about",
    icon: <Info />,
  },
  {
    type: "contact",
    icon: <Mail />,
  },
];

type Props = {
  lang: "en" | "es";
};

const locales = {
  en: {
    navigation: "Navigation",
    blog: { label: "Blog", to: "/blog" },
    portfolio: { label: "Portfolio", to: "/portfolio" },
    videos: { label: "Videos", to: "/es/videos" },
    microblog: { label: "Microblog", to: "/microblog" },
    resources: { label: "Resources", to: "/resources" },
    about: { label: "About", to: "/about" },
    contact: { label: "Contact", to: "/contact" },
  },
  es: {
    navigation: "Navegación",
    blog: { label: "Blog", to: "/es/blog" },
    portfolio: { label: "Portfolio", to: "/es/portfolio" },
    videos: { label: "Videos", to: "/es/videos" },
    microblog: { label: "Microblog", to: "/microblog" },
    resources: { label: "Recursos", to: "/es/recursos" },
    about: { label: "Acerca de", to: "/es/acerca-de" },
    contact: { label: "Contacto", to: "/es/contacto" },
  },
} as const;

export default function Navigation(props: Props) {
  const t = useTranslations(props.lang);
  const translatePath = useTranslatedPath(props.lang);

  return (
    <nav className="px-4 sm:px-0 max-w-[65ch] mx-auto prose prose-invert pt-5 pb-20">
      <h2 id="navigation">{locales[props.lang].navigation}</h2>
      <ul className="list-none p-0 flex flex-wrap gap-4">
        {navItems.map((navItem, index) => (
          <li key={index} className="m-0 p-0">
            <LinkButton
              variant="link"
              href={locales[props.lang][navItem.type].to}
              className="p-0 text-base gap-1"
            >
              {navItem.icon}
              {locales[props.lang][navItem.type].label}
            </LinkButton>
          </li>
        ))}
      </ul>
    </nav>
  );
}
