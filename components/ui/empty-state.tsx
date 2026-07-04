import { LucideIcon } from "lucide-react";
import styles from "./empty-state.module.css"; // <-- Import the scoped CSS
import { cn } from "@/lib/utils";

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  action?: React.ReactNode;
  className?: string;
}

export function EmptyState({ icon: Icon, title, description, action, className }: EmptyStateProps) {
  return (
    // Merge the modular class with any external Tailwind classes passed via props
    <div className={cn(styles.container, className)}>
      <div className={styles.iconWrapper}>
        <Icon className="h-6 w-6 text-muted-foreground" />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>
        {description}
      </p>
      {action && <div>{action}</div>}
    </div>
  );
}