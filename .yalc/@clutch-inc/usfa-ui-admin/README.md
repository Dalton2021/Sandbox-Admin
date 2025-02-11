# USFA-UI-Admin

## Getting Started

### Install dependencies

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

First, run the development server:

```bash
npm run sb
# or
yarn sb
# or
pnpm sb
# or
bun sb
```

Open [http://localhost:6006/?path=/docs/configure-your-project--docs](http://localhost:6006/?path=/docs/configure-your-project--docs) with your browser to see the result.

You can start editing the page by modifying `src/components/Formax/index.js`. The page auto-updates as you edit the file, which contains a stories.js file at `src/stories/Formax/Formex.stories.js`.

## Learn More

### Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

### Storybook

To learn more about Storybook, take a look at the following resources:

- [Storybook Documentation](https://storybook.js.org/docs/react/get-started/introduction) - learn about Storybook features and API.
- [Learn Storybook](https://storybook.js.org/tutorials/) - an interactive Storybook tutorial.
- [Storybook Addons](https://storybook.js.org/addons/) - a list of available addons for Storybook.
- [Storybook for Next.js](https://storybook.js.org/docs/get-started/frameworks/nextjs?renderer=react) - a guide to use Storybook with Next.js.


## Publish Storybook with Chromatic

- [Storybook-Chromatic Documentation](https://storybook.js.org/docs/sharing/publish-storybook) - step by step guide to publish Storybook with Chromatic.

### Install Chromatic CLI

```bash
npm install chromatic
# or
yarn add chromatic
# or
pnpm add chromatic
# or
bun add chromatic
```

### Publish Storybook

Publish storybook with Chromatic by running the following commands:

#### Build Storybook

```bash
npm run build-storybook
# or
yarn build-storybook
# or
pnpm build-storybook
# or
bun build-storybook
```

#### Preview the build

```bash
npx http-server ./path/to/build
# or
yarn http-server ./path/to/build
# or
pnpm http-server ./path/to/build
# or
bun http-server ./path/to/build
```

#### Publish with Chromatic

```bash
npx chromatic --project-token=<your-project-token>
# or
yarn chromatic --project-token=<your-project-token>
# or
pnpm chromatic --project-token=<your-project-token>
# or
bun chromatic --project-token=<your-project-token>
```

#### If successful

You will see a similar message in your console.

```bash
Build 1 published.

View it online at https://www.chromatic.com/build?appId=...&number=1.
```
