import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CheckIcon, CopyIcon } from "lucide-react";

interface CopyButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  value: string;
}

export default function CopyButton(props: CopyButtonProps) {
  const [hasCopied, setHasCopied] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  }, [hasCopied]);

  const copyToClipboard = useCallback((value: string) => {
    navigator.clipboard.writeText(value);

    setHasCopied(true);
  }, []);

  return (
    <Button
      title={hasCopied ? "Copied!" : "Copy to clipboard"}
      size={null}
      variant="ghost"
      className={cn("absolute right-2 top-1.5 p-2 ", props.className)}
      onClick={() => copyToClipboard(props.value)}
      {...props}
    >
      <span className="sr-only">Copy</span>
      {hasCopied ? (
        <CheckIcon className="h-4 w-4" />
      ) : (
        <CopyIcon className="h-4 w-4" />
      )}
    </Button>
  );
}
