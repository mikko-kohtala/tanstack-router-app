import { useEffect, useState } from "react";

const MAX_DOTS = 3;
const DOTS_ANIMATION_INTERVAL_MS = 500;

export function BootLoader() {
  const [dots, setDots] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev === MAX_DOTS ? 1 : prev + 1));
    }, DOTS_ANIMATION_INTERVAL_MS);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center">
        <div className="mb-8">
          <div className="mb-6 flex justify-center">
            <div className="flex space-x-2">
              <div
                className="h-3 w-3 animate-bounce rounded-full bg-blue-600"
                style={{ animationDelay: "0ms" }}
              />
              <div
                className="h-3 w-3 animate-bounce rounded-full bg-blue-600"
                style={{ animationDelay: "150ms" }}
              />
              <div
                className="h-3 w-3 animate-bounce rounded-full bg-blue-600"
                style={{ animationDelay: "300ms" }}
              />
            </div>
          </div>
          <h1 className="mb-2 font-bold text-2xl text-gray-800">
            Booting up application
          </h1>
          <p className="text-gray-600">Routing to Keycloak{".".repeat(dots)}</p>
        </div>
        <div className="mx-auto h-1 w-48 overflow-hidden rounded-full bg-gray-200">
          <div className="h-full animate-pulse bg-gradient-to-r from-blue-400 to-blue-600" />
        </div>
      </div>
    </div>
  );
}
