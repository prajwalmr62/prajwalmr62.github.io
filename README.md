# prajwalmr62.github.io

My personal website - now a Turborepo monorepo.

## Structure

This repository uses a monorepo structure with Turborepo:

```
/
├── apps/
│   └── website/          # Angular application
├── packages/             # Shared packages (future use)
├── package.json          # Root package.json with Turborepo
└── turbo.json            # Turborepo configuration
```

## Getting Started

### Prerequisites

- Node.js >= 18
- npm >= 10

### Installation

Install dependencies from the root:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

This will start the Angular development server for the website app.

### Building

Build all apps:

```bash
npm run build
```

Build a specific app:

```bash
cd apps/website
npm run build
```

### Testing

Run tests:

```bash
npm run test
```

## Available Scripts

From the root directory:

- `npm run build` - Build all apps and packages
- `npm run dev` - Start development servers
- `npm run test` - Run tests
- `npm run lint` - Run linting
- `npm run clean` - Clean build artifacts

## Adding New Apps or Packages

To add a new app:

1. Create a new directory in `apps/`
2. Add a `package.json` with the app configuration
3. Turborepo will automatically detect it

To add a shared package:

1. Create a new directory in `packages/`
2. Add a `package.json` with the package configuration
3. Reference it in other apps using workspace protocol: `"package-name": "workspace:*"`

## Turborepo

This monorepo uses [Turborepo](https://turbo.build/repo) for:
- Fast incremental builds
- Intelligent task scheduling
- Remote caching (when configured)
- Parallel execution

See `turbo.json` for pipeline configuration.
