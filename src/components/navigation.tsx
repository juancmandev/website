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
import { useTranslations } from "@/i18n/utils";

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

export default function Navigation(props: Props) {
  const t = useTranslations(props.lang as any);

  return (
    <nav className="px-4 sm:px-0 max-w-[65ch] mx-auto prose prose-invert pt-5 pb-20">
      <h2 id="navigation">{t("navigation")}</h2>
      <ul className="list-none p-0 flex flex-wrap gap-4">
        {navItems.map((navItem, index) => (
          <li key={index} className="m-0 p-0">
            <LinkButton
              variant="link"
              href={t(`${navItem.type}.to` as any)}
              className="p-0 text-base gap-1"
            >
              {navItem.icon}
              {t(`${navItem.type}.label` as any)}
            </LinkButton>
          </li>
        ))}
      </ul>
    </nav>
  );
}