# ReLoy Monorepo

This repository contains a monorepo setup for **ReLoy**, a referral and loyalty platform built with Next.js and TypeScript.

## Structure


- `apps/web` – public website
- `apps/business` – business dashboard
- `apps/admin` – admin portal
- `apps/referrer` – referrer dashboard
- `packages/ui` – shared UI components (placeholder)

## Getting Started

Install dependencies and run the development server:

```bash
pnpm install

pnpm --filter web dev     # or business, admin, referrer

```

This project uses Tailwind CSS and the new Next.js `app` router.

## License

This project is licensed under the MIT License.
