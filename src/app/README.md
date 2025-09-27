App entry and routing
---------------------

- `src/app/routes.tsx` is the single source of truth for routes using TanStack Router (no folder-based routing).
- `src/main.tsx` bootstraps the router and app.

Module structure
----------------

- `src/app/modules/<module>/screens/dashboard.tsx` is the module dashboard (index route).
- `src/app/modules/<module>/screens/*` contain simple page components for sub-pages.
- Layouts and shared UI live in `src/components/*`.
- Data loaders live in `src/loaders/*`.

Conventions
-----------

- Every module has a layout route that renders `<AppModuleLayout>` with an `<Outlet/>`.
- Child routes under a module include an index route (`path: "/"`) for the dashboard plus named sub-pages (e.g. `settings`, `reports`).
- Each module also has a catch-all child route (`path: "$"`) that renders a tiny NotFound screen with a link back to the dashboard.
- Keep sub-page screen components minimal; compose richer UI from `src/components` when needed.

Adding a new module
-------------------

1) Create screens under `src/app/modules/<new-module>/screens/`.
2) Add a layout route and child routes in `src/app/routes.tsx`.
3) Add a sidebar entry in `src/components/app-module-layout.tsx` for the new module.
4) Link to the module from `CompanyDepartmentSelection` if desired.
