
# Griho Dashboard- Accounting Solution

## Overview

This project uses **Bun** as the JavaScript runtime, **Vite** as the build tool, and **Storybook** for UI component development. It provides a fast and modern development environment for React-based applications.

## Table of Contents

- [Getting Started](#getting-started)
- [Installation](#installation)
- [Scripts](#scripts)
- [Storybook](#storybook)
- [Configuration](#configuration)
- [License](#license)

## Getting Started

### Prerequisites

Before you start, ensure you have the following tools installed:

- [Bun](https://bun.sh) (>= v0.5.0)
- [Node.js](https://nodejs.org) (Optional, for compatibility)
- [Git](https://git-scm.com)

### Installation

To install the dependencies, run the following command using **Bun**:

```bash
bun install
```

This will install all required packages defined in `package.json`.

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-project.git
   cd your-project
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

3. Start the development server:
   ```bash
   bun run dev
   ```

   This will start the **Vite** development server on `http://localhost:3000`.

## Scripts

The following scripts are available in the project. These can be run using **Bun**:

- **`bun run dev`**: Starts the Vite development server.
- **`bun run build`**: Builds the production-ready files using Vite.
- **`bun run preview`**: Previews the production build locally.
- **`bun run storybook`**: Starts Storybook for developing UI components.
- **`bun run build-storybook`**: Builds a static version of the Storybook.
- **`bun run lint`**: Runs the linter (ESLint) on the codebase.

## Storybook

Storybook is used to develop and test individual UI components in isolation.

### Running Storybook

To run **Storybook**, use the following command:

```bash
bun run storybook
```

This will start Storybook on `http://localhost:6006`.

### Building Storybook

To build a static version of Storybook, run:

```bash
bun run build-storybook
```

This generates static files for Storybook in the `storybook-static` directory.

## Configuration

### Vite Configuration

Vite is configured in the `vite.config.ts` (or `.js`) file. If you need to modify the build, server, or other Vite-related settings, you can do so in this file.

Here is an example of the `vite.config.ts`:

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

### Storybook Configuration

Storybook is configured in the `.storybook` folder, which includes settings like `main.js` for configuring add-ons and webpack options. Here is an example:

- **`.storybook/main.js`**:

```js
module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  framework: '@storybook/react-vite',
};
```

- **`.storybook/preview.js`**:

```js
import '../src/index.css'; // Tailwind or custom styles

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
```

### ESLint Configuration

The project uses **ESLint** for linting JavaScript/TypeScript code. The configuration can be found in `.eslintrc.js`:

```js
module.exports = {
  extends: [
    "plugin:react/recommended",
    "plugin:storybook/recommended",
  ],
  rules: {
    // custom ESLint rules
  },
};
```

## License

This project is licensed under the [MIT License](LICENSE).
