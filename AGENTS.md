# AGENTS.md

This file provides guidance to AI tools when working with code in this repository.

## Development Commands

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev
# or
pnpm start

# Build for production
pnpm build

# Run tests
pnpm test

# Code quality and formatting (using Biome)
pnpm check       # Fix and format code automatically
pnpm check:ci    # Check without auto-fix (CI mode)
pnpm format      # Format code
pnpm lint        # Lint and fix issues
```

## Architecture Overview

This is a **demo application** built with React, TypeScript, and TanStack Router demonstrating a multi-module enterprise application structure.

### Tech Stack

- **Framework**: React 19 with TypeScript
- **Routing**: TanStack Router (code-based routing in `src/app/routes.tsx`)
- **State Management**: Zustand with persistence
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI with shadcn/ui patterns
- **Linting/Formatting**: Biome (enforced via Ultracite rules)
- **Build Tool**: Vite
- **Testing**: Vitest

### Application Structure

The application is organized as a modular system with three main demo modules:

1. **HR Configurator** - Human resources management module
2. **POC Creator** - Proof of concept creation module
3. **Money Analysis** - Financial analysis module

### Key Architectural Patterns

#### Route Structure

- Root route includes authentication checking via `rootLoader`
- Company/department context validated through dynamic routes (`$companyId/$departmentId`)
- Each module has its own layout wrapper and child routes
- Module not found handling for invalid sub-routes

#### Authentication Flow

1. Initial boot sequence with loading state (`BootLoader` component)
2. Keycloak authentication integration (demo mode)
3. Persistent auth state via Zustand store
4. Protected routes through loader functions

#### Module System

Each module follows this structure:

```
src/app/modules/{module-name}/
  └── screens/
      ├── dashboard.tsx
      └── [additional screens]
```

Modules are accessed via: `/{companyId}/{departmentId}/{module-name}`

### Important Implementation Notes

- **Demo Data**: Companies and departments are hardcoded in `src/data/companies.ts`
- **Auth Store**: Uses Zustand with localStorage persistence (`src/stores/auth-store.ts`)
- **Loaders**: Route loaders validate authentication and context before rendering
- **Navigation**: Module navigation defined in `src/app/nav.ts`
- **Component Library**: UI components in `src/components/ui/` follow shadcn/ui patterns

### Biome/Ultracite Enforcement

This project uses strict linting rules via Ultracite. Key rules include:

- Strict TypeScript typing (no `any`, proper type imports)
- Comprehensive accessibility requirements
- React best practices (hooks rules, key props, etc.)
- No console statements in production code
- Consistent code style (arrow functions, template literals, etc.)

Run `pnpm check` before committing to ensure compliance.
