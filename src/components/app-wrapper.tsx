import { Outlet, useLocation, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useAuthStore } from "../stores/auth-store";
import { BootLoader } from "./boot-loader";
import { RootLayout } from "./root-layout";

const BOOT_TIME_MS = 3000;
const REDIRECT_TIME_MS = 2000;

export function AppWrapper() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, isBooting, completeBoot } = useAuthStore();
  const [bootPhase, setBootPhase] = useState<
    "booting" | "redirecting" | "complete"
  >("booting");

  useEffect(() => {
    const bootSequence = async () => {
      // Don't show boot loader for keycloak and logout pages
      const isAuthRoute =
        location.pathname === "/keycloak" || location.pathname === "/logout";

      if (isAuthRoute) {
        completeBoot();
        setBootPhase("complete");
        return;
      }

      if (isBooting) {
        setBootPhase("booting");

        // Initial boot time
        await new Promise((resolve) => setTimeout(resolve, BOOT_TIME_MS));

        if (isAuthenticated) {
          completeBoot();
          setBootPhase("complete");
        } else {
          setBootPhase("redirecting");
          await new Promise((resolve) => setTimeout(resolve, REDIRECT_TIME_MS));
          completeBoot();
          navigate({ to: "/keycloak" });
        }
      } else {
        setBootPhase("complete");
      }
    };

    bootSequence();
  }, [isAuthenticated, isBooting, completeBoot, navigate, location.pathname]);

  // Show boot loader only for protected routes during boot
  const isAuthRoute =
    location.pathname === "/keycloak" || location.pathname === "/logout";

  if (!isAuthRoute && (isBooting || bootPhase !== "complete")) {
    return <BootLoader />;
  }

  // For auth routes, render directly without the main layout
  if (isAuthRoute) {
    return <Outlet />;
  }

  return <RootLayout />;
}
