
// This file serves as a redirect to handle case-sensitivity issues
import { Badge as ShadcnBadge, badgeVariants } from "./badge";
import Badge from "./Badge";
import type { BadgeProps as ShadcnBadgeProps } from "./badge";
import type { BadgeProps as CustomBadgeProps, BadgeVariant, BadgeSize } from "./Badge";

// Export both badges, allowing components to use either implementation
export { 
  ShadcnBadge, 
  Badge,
  badgeVariants 
};

// Export types from both implementations
export type { 
  ShadcnBadgeProps,
  CustomBadgeProps,
  BadgeVariant,
  BadgeSize 
};

// For backward compatibility, also export the custom Badge as the default
export default Badge;
