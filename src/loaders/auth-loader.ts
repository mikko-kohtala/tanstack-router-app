import { redirect } from "@tanstack/react-router";
import { useAuthStore } from "../stores/auth-store";

/**
 * Helper function to check authentication
 * Throws a redirect to /keycloak if user is not authenticated
 */
export const checkAuth = () => {
  const { isAuthenticated } = useAuthStore.getState();
  if (!isAuthenticated) {
    throw redirect({ to: "/keycloak" });
  }
};
