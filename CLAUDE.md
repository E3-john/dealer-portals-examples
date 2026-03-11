# Dealer Portals Examples

## Defaults

- Dev servers: always use a random port in the 4000-9000 range to avoid conflicts (e.g. `--port 7284`)
- Default stack: Vite + React + Tailwind + shadcn/ui — no backend needed
- Tailwind base styles: use E3M brand theme from `github.com/E3-john/e3m-theme` (see setup below)
- Add shadcn components via `npx shadcn@latest add <component-name>`

## E3M Theme

Theme pulled from `E3-john/e3m-theme/globals.css` into `src/app/globals.css`.

Peer dependencies: `tailwindcss`, `tw-animate-css`, shadcn/ui init.
