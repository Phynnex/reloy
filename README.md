# ReLoy Monorepo

This repository contains a monorepo setup for **ReLoy**, a referral and loyalty platform built with Next.js and TypeScript.

## Structure


- `apps/web` – public website
- `apps/business` – business dashboard
- `apps/admin` – admin portal
- `apps/referrer` – referrer dashboard
- `apps/api` – GraphQL API server
- `packages/ui` – shared UI components (placeholder)
- `packages/design-tokens` – shared design tokens used by all apps

## Getting Started

First ensure that `pnpm` is installed globally:

```bash
npm install -g pnpm
```

Then install dependencies and run the development server:

```bash
pnpm install

pnpm --filter web dev     # or business, admin, referrer, api

```

This project uses Tailwind CSS and the new Next.js `app` router.

## Design Tokens

Shared design tokens live in `packages/design-tokens`. Tailwind configurations
for each app import these tokens and expose them as utilities.

To add a new token:

1. Edit `packages/design-tokens/index.js` and add your value.
2. Restart the dev server so Tailwind picks up the change.

Use the token name in your components, e.g. `className="text-primary"` or
`className="bg-accent-1"`.

## Managing Dependencies

Running `pnpm add <pkg>` from the repository root will trigger `ERR_PNPM_ADDING_TO_ROOT`.

Install a dependency for a specific app by running one of the following:

```bash
cd apps/web && pnpm add <pkg>
# or
pnpm add --filter ./apps/web <pkg>
```

In the rare case that a package truly belongs in the root workspace, use the
`-w`/`--workspace-root` flag with `pnpm add`.

## License

This project is licensed under the MIT License.
