import formatDate from "@/utils/format-date";
import { Button } from "@/components/ui/button";

type Props = {
  slug: string;
  date: Date | string;
  title: string;
  type: "blog" | "portfolio" | "es/videos";
  lang: string;
};

export default function PostItem(props: Props) {
  return (
    <Button
      asChild
      size={null}
      variant="link"
      className="px-4 whitespace-normal py-2 hover:no-underline focus:no-underline flex flex-col items-start italic border border-secondary hover:border-foreground focus:border-foreground transition-colors rounded-md"
    >
      <a
        className="no-underline"
        href={
          props.lang === "en"
            ? `/${props.type}/${props.slug}`
            : `/es/${props.type}/${[props.slug]}`
        }
      >
        <span className="text-sm font-light no-underline">
          {formatDate(props.date, props.lang)}
        </span>
        <span className="text-primary text-underline text-lg font-semibold underline">
          {props.title}
        </span>
      </a>
    </Button>
  );
}
