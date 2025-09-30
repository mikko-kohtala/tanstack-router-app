import { useNavigate } from "@tanstack/react-router";
import { LogOut } from "lucide-react";
import { useEffect } from "react";
import { useAuthStore } from "../stores/auth-store";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export function LogoutPage() {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  useEffect(() => {
    // Clear the auth state when component mounts
    logout();
  }, [logout]);

  const handleReturnHome = () => {
    navigate({ to: "/" });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-gray-50 to-slate-100">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
            <LogOut className="h-8 w-8 text-gray-600" />
          </div>
          <CardTitle className="text-2xl">You've been logged out</CardTitle>
          <CardDescription>Your session has been terminated successfully</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <p className="text-center text-gray-600 text-sm">
              You will need to authenticate again to access the platform.
            </p>
          </div>

          <Button className="w-full" onClick={handleReturnHome} size="lg">
            Go to Login
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
