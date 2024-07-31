import { Code, RssIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import formatDate from "@/utils/format-date";

type Props = {
  lang: "en" | "es";
};

export default function Footer(props: Props) {
  return (
    <footer className="border-t border-secondary px-4 py-12 text-center text-sm md:px-16 prose prose-invert min-w-full">
      <section>
        <p>
          Developed by{" "}
          <strong className="font-bold text-primary">juancmandev</strong>
        </p>
        <p>
          Built handcrafted with{" "}
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
        <p>Last built {formatDate(new Date())}.</p>
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
          <a target="_blank" href="https://juancman.dev/rss.xml">
            <RssIcon className="w-6" />
            RSS feed
          </a>
        </Button>
      </section>
    </footer>
  );
}
