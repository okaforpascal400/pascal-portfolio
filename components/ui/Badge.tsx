import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "amber" | "neutral";
};

export function Badge({ children, className, variant = "amber" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide",
        variant === "amber" &&
          "border-amber/30 bg-amber/10 text-amber",
        variant === "neutral" &&
          "border-border bg-surface-elevated text-text-secondary",
        className,
      )}
    >
      {children}
    </span>
  );
}
