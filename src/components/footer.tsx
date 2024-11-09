import { Code, RssIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import formatDate from "@/utils/format-date";
import type { lang } from "@/i18n/utils";

const locales = {
  en: {
    developed_by: "Developed by ",
    build_handcrafted: "Built handcrafted with ",
    last_build: "Last build",
  },
  es: {
    developed_by: "Desarrollado por ",
    build_handcrafted: "Construido a mano con ",
    last_build: "Última build",
  },
};

type Props = {
  lang: lang;
};

export default function Footer({ lang }: Props) {
  const rssUrl =
    lang == "en"
      ? "https://juancman.dev/feed.xml"
      : "https://juancman.dev/es/feed.xml";

  return (
    <footer className="border-t border-secondary px-4 py-12 text-center text-sm md:px-16 prose prose-invert min-w-full">
      <section>
        <p>
          {locales[lang].developed_by}
          <strong className="font-bold text-primary">juancmandev</strong>
        </p>
        <p>
          {locales[lang].build_handcrafted}
          <Button
            asChild
            size={null}
            variant="link"
            className="m-0 p-0 text-base no-underline hover:underline"
          >
            <a href="https://astro.build/" target="_blank">
              Astro
            </a>
          </Button>
        </p>
        <p>
          {locales[lang].last_build}: {formatDate(new Date(), lang)}.
        </p>
      </section>
      <section className="w-max mx-auto flex items-center gap-12">
        <Button
          asChild
          size={null}
          variant="link"
          className="flex flex-col justify-center"
        >
          <a target="_blank" href="https://github.com/juancmandev/website">
            <Code className="w-6" />
            Source Code
          </a>
        </Button>
        <Button
          asChild
          size={null}
          variant="link"
          className="flex flex-col justify-center"
        >
          <a target="_blank" href={rssUrl}>
            <RssIcon className="w-6" />
            RSS feed
          </a>
        </Button>
      </section>
    </footer>
  );
}
