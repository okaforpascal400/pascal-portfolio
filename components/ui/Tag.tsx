import { cn } from "@/lib/utils";

type TagProps = {
  children: React.ReactNode;
  className?: string;
};

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-border bg-surface-elevated px-2.5 py-1 font-mono text-xs text-text-secondary transition-colors duration-300 hover:border-amber/60 hover:text-amber",
        className,
      )}
    >
      {children}
    </span>
  );
}
