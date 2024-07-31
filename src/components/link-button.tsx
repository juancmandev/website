import { Button } from "@/components/ui/button";

type Props = {
  children: React.ReactNode;
  title?: string;
  href: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
  className?: string;
  size?: "default" | "sm" | "lg" | "icon" | null | undefined;
};

export default function LinkButton(props: Props) {
  return (
    <Button
      asChild
      size={props.size}
      title={props.title}
      variant={props.variant}
      className={props.className}
    >
      <a href={props.href}>{props.children}</a>
    </Button>
  );
}
