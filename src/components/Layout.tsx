import { Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const RootLayout = () => (
  <div style={{ padding: "20px" }}>
    <nav style={{ marginBottom: "20px", display: "flex", gap: "15px" }}>
      <Link to="/" activeProps={{ style: { fontWeight: "bold" } }}>
        Home
      </Link>
      <Link to="/dashboard" activeProps={{ style: { fontWeight: "bold" } }}>
        Dashboard
      </Link>
      <Link to="/products" activeProps={{ style: { fontWeight: "bold" } }}>
        Products
      </Link>
      <Link to="/users" activeProps={{ style: { fontWeight: "bold" } }}>
        Users
      </Link>
    </nav>
    <Outlet />
    <TanStackRouterDevtools />
  </div>
);