import { cn } from "@/lib/utils";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  hoverable?: boolean;
};

export function Card({
  className,
  hoverable = false,
  children,
  ...rest
}: CardProps) {
  return (
    <div
      className={cn(
        "relative rounded-xl border border-border bg-surface p-8 transition-all duration-300",
        hoverable &&
          "hover:border-amber/40 hover:-translate-y-[3px]",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
