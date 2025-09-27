import { useNavigate } from "@tanstack/react-router";
import { Shield } from "lucide-react";
import { useState } from "react";
import { useAuthStore } from "../stores/auth-store";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const KEYCLOAK_AUTH_DELAY_MS = 1500;

export function KeycloakLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setIsLoading(true);

    // Simulate Keycloak authentication delay
    await new Promise((resolve) => setTimeout(resolve, KEYCLOAK_AUTH_DELAY_MS));

    // Mark user as authenticated
    login();

    // Navigate to home page
    navigate({ to: "/" });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
            <Shield className="h-8 w-8 text-blue-600" />
          </div>
          <CardTitle className="text-2xl">Keycloak Authentication</CardTitle>
          <CardDescription>
            Sign in to access the Company Analysis Platform
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
            <p className="text-center text-blue-700 text-sm">
              This is a demo authentication flow. Click the button below to
              simulate a Keycloak login.
            </p>
          </div>

          <Button
            className="w-full"
            disabled={isLoading}
            onClick={handleLogin}
            size="lg"
          >
            {isLoading ? (
              <>
                <span className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent border-b-transparent" />
                Authenticating...
              </>
            ) : (
              "Login with Keycloak"
            )}
          </Button>

          <p className="text-center text-gray-500 text-xs">
            Demo Mode • No credentials required
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
