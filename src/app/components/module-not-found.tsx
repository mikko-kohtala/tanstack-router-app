import { Link, useLocation } from "@tanstack/react-router";
import { Button } from "../../components/ui/button";
import { moduleBasePathFrom, moduleNavItems } from "../nav";

export default function ModuleNotFound({ moduleName }: { moduleName: string }) {
  const location = useLocation();
  const basePath = moduleBasePathFrom(location.pathname);
  const items = moduleNavItems(moduleName, basePath);

  return (
    <div className="space-y-3">
      <h2 className="font-semibold text-xl">Page not found</h2>
      <p className="text-muted-foreground">
        The requested page does not exist inside {moduleName}.
      </p>
      <div className="space-x-2">
        {items.map((i) => (
          <Link key={i.href} to={i.href}>
            <Button variant={i.href === basePath ? "default" : "outline"}>
              {i.name}
            </Button>
          </Link>
        ))}
      </div>
      <Link to={basePath}>
        <Button>Back to {moduleName} dashboard</Button>
      </Link>
    </div>
  );
}
