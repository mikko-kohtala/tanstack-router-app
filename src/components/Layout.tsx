import { Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Button } from "./ui/button";

export const RootLayout = () => (
  <div className="min-h-screen bg-background">
    <header className="border-b">
      <nav className="container mx-auto px-4 py-4 flex gap-4">
        <Link to="/">
          <Button variant="ghost" className="font-medium">
            Home
          </Button>
        </Link>
        <Link to="/dashboard">
          <Button variant="ghost" className="font-medium">
            Dashboard
          </Button>
        </Link>
        <Link to="/products">
          <Button variant="ghost" className="font-medium">
            Products
          </Button>
        </Link>
        <Link to="/users">
          <Button variant="ghost" className="font-medium">
            Users
          </Button>
        </Link>
      </nav>
    </header>
    <main className="container mx-auto px-4 py-8">
      <Outlet />
    </main>
    <TanStackRouterDevtools />
  </div>
);