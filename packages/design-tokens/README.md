# Design Tokens

This package exposes the foundational design tokens used across all apps.

## Tokens

Tokens are exported from `index.js`:

```js
const tokens = require('@reloy/design-tokens');
```

### Adding a Token

1. Open `packages/design-tokens/index.js`.
2. Add your token value in the relevant scale (colors, spacing, etc.).
3. Rebuild Tailwind if your app runs in watch mode.

### Usage in Tailwind

Tailwind configs for each app import these tokens and map them using `theme.extend`.
Use token keys as utility values, e.g. `text-primary` or `p-4`.

### Using in Components

ShadCN/UI components can be overridden using the same utility classes that rely on the tokens.

```
<Button className="bg-primary text-white" />
```

## Light & Dark Themes

Tokens can be expanded to include dark mode values. Tailwind's dark mode feature can then target those tokens.
