# Company Analysis Platform

A demo enterprise application showcasing a multi-module architecture built with React, TypeScript, and TanStack Router.

## Features

This application demonstrates a modular enterprise system with three main modules:

- **HR Configurator** - Human resources management and policy configuration
- **POC Creator** - Proof of concept creation and management
- **Money Analysis** - Financial analysis and budget tracking

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm

### Installation

```bash
# Install dependencies
pnpm install
```

### Development

```bash
# Run development server
pnpm dev
```

The application will be available at `http://localhost:5173`

### Building for Production

```bash
# Build for production
pnpm build
```

### Code Quality

This project uses Biome for linting and formatting with strict Ultracite rules:

```bash
# Fix and format code automatically
pnpm check

# Format code only
pnpm format

# Lint and fix issues
pnpm lint
```

## Tech Stack

- **Framework**: React 19 with TypeScript
- **Routing**: TanStack Router (code-based routing)
- **State Management**: Zustand with localStorage persistence
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI with shadcn/ui patterns
- **Linting/Formatting**: Biome with Ultracite rules
- **Build Tool**: Vite
- **Testing**: Vitest

## Architecture

### Application Structure

```
src/
├── app/
│   ├── modules/          # Feature modules
│   │   ├── hr-configurator/
│   │   ├── poc-creator/
│   │   └── money-analysis/
│   ├── routes.tsx        # Route definitions
│   └── nav.ts           # Navigation configuration
├── components/
│   ├── layouts/         # Layout components
│   ├── patterns/        # Reusable patterns
│   ├── modules/         # Module-specific components
│   └── ui/             # Base UI components (shadcn/ui)
├── data/               # Demo data
├── stores/             # Zustand stores
└── loaders/            # Route loaders
```

### Route Structure

Routes follow the pattern: `/{companyId}/{departmentId}/{module-name}`

- Root route handles authentication checking
- Dynamic company/department context validation
- Each module has its own layout and child routes
- Module not found handling for invalid routes

### Authentication Flow

1. Boot sequence with loading state
2. Keycloak authentication integration (demo mode)
3. Persistent auth state via Zustand
4. Protected routes through loader functions

### Module System

Each module follows a consistent structure:

```
src/app/modules/{module-name}/
  └── screens/
      ├── dashboard.tsx
      └── [additional screens]
```

Modules are self-contained with their own:
- Route definitions
- Navigation items
- Screen components
- Business logic

## Key Features

- **Multi-tenancy**: Company and department context throughout the app
- **Module-based navigation**: Independent modules with their own routing
- **Persistent authentication**: Demo Keycloak integration with local storage
- **Type-safe routing**: Full TypeScript support with TanStack Router
- **Strict code quality**: Comprehensive Biome/Ultracite linting rules
- **Modern UI**: Gray-themed enterprise design with Tailwind CSS

## Development Notes

- Demo data for companies and departments is in `src/data/companies.ts`
- Auth state is managed in `src/stores/auth-store.ts`
- Route loaders validate authentication and context before rendering
- All UI components follow shadcn/ui patterns for consistency
- Run `pnpm check` before committing to ensure code quality

## License

MIT
