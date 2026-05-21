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
        "relative rounded-2xl border border-border bg-surface p-6 transition-all duration-500",
        hoverable &&
          "hover:border-amber/40 hover:shadow-card-hover hover:-translate-y-1",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
