import { useContext } from "react";
import { AuthContext } from "@/providers/auth-provider";
import { UserRole } from "@/types";

export function useAuth() {
  const context = useContext(AuthContext);

  // This check removes the "context is possibly null" errors
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  const hasRole = (allowedRoles: UserRole[]) => {
    if (!context.user) return false;
    return allowedRoles.includes(context.user.role);
  };

  return {
    ...context,
    isAdmin: context.user?.role === "ADMIN",
    isHR: context.user?.role === "HR",
    isEmployee: context.user?.role === "EMPLOYEE",
    hasRole,
  };
}