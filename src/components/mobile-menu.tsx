import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { navItems } from "@/utils/nav-links";
import { Button } from "@/components/ui/button";

export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild title="Open menu">
        <Button size="icon" variant="ghost">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-max border-0 bg-secondary px-0 pt-14 shadow-2xl"
      >
        <SheetHeader>
          <ScrollArea>
            <nav className="h-[calc(100vh_-_100px)]">
              <section className="mt-1 flex flex-col">
                <ul className="flex flex-col gap-1">
                  {navItems.map((navItem) => (
                    <li key={navItem.label} className="flex h-max w-full">
                      <SheetClose asChild>
                        <Button
                          asChild
                          size={null}
                          variant="link"
                          className="w-full cursor-default rounded-none px-10 py-3 hover:bg-background/50 hover:no-underline focus:bg-background/50"
                        >
                          <a className="capitalize" href={navItem.to}>
                            {navItem.label}
                          </a>
                        </Button>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </section>
            </nav>
          </ScrollArea>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
