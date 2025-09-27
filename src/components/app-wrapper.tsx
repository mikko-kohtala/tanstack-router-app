import { Outlet, useLocation, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { useAuthStore } from "../stores/auth-store";
import { BootLoader } from "./boot-loader";
import { RootLayout } from "./root-layout";

const BOOT_REDIRECT_DELAY_MS = 5000;

export function AppWrapper() {
  const navigate = useNavigate();
  const location = useLocation();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const isAuthRoute = location.pathname === "/keycloak" || location.pathname === "/logout";
  const isFrontPage = location.pathname === "/";
  const shouldShowBoot = !isAuthRoute && isFrontPage && !isAuthenticated;

  useEffect(() => {
    if (!shouldShowBoot) {
      return;
    }

    const redirectTimer = setTimeout(() => {
      navigate({ to: "/keycloak", replace: true });
    }, BOOT_REDIRECT_DELAY_MS);

    return () => clearTimeout(redirectTimer);
  }, [shouldShowBoot, navigate]);

  if (isAuthRoute) {
    return <Outlet />;
  }

  if (shouldShowBoot) {
    return <BootLoader />;
  }

  return <RootLayout />;
}
