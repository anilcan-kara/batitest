<!--bati:start section="document"-->

<!--bati:start section="intro"-->

Generated with [Bati](https://batijs.dev) ([version 292](https://www.npmjs.com/package/create-bati/v/0.0.292)) using this command:

```sh
bun create bati --react --tailwindcss --shadcn-ui --authjs --trpc --express --prisma --google-analytics --vercel --eslint --prettier
```

<!--bati:start section="TOC"-->

## Contents

* [React](#react)

  * [`/pages/+config.ts`](#pagesconfigts)
  * [Routing](#routing)
  * [`/pages/_error/+Page.jsx`](#pages_errorpagejsx)
  * [`/pages/+onPageTransitionStart.ts` and `/pages/+onPageTransitionEnd.ts`](#pagesonpagetransitionstartts-and-pagesonpagetransitionendts)
  * [SSR](#ssr)
  * [HTML Streaming](#html-streaming)

* [shadcn/ui](#shadcnui)

  * [Configuration](#configuration)
  * [Add Components to Your Project](#add-components-to-your-project)

* [*Prisma*](#prisma)

  * [Setup](#setup)

<!--bati:end section="TOC"-->

<!--bati:end section="intro"-->

<!--bati:start section="features"-->

<!--bati:start category="UI Framework" flag="react"-->

## React

This app is ready to start. It's powered by [Vike](https://vike.dev) and [React](https://react.dev/learn).

### `/pages/+config.ts`

Such `+` files are [the interface](https://vike.dev/config) between Vike and your code. It defines:

* A default [`<Layout>` component](https://vike.dev/Layout) (that wraps your [`<Page>` components](https://vike.dev/Page)).
* A default [`title`](https://vike.dev/title).
* Global [`<head>` tags](https://vike.dev/head-tags).

### Routing

[Vike's built-in router](https://vike.dev/routing) lets you choose between:

* [Filesystem Routing](https://vike.dev/filesystem-routing) (the URL of a page is determined based on where its `+Page.jsx` file is located on the filesystem)
* [Route Strings](https://vike.dev/route-string)
* [Route Functions](https://vike.dev/route-function)

### `/pages/_error/+Page.jsx`

The [error page](https://vike.dev/error-page) which is rendered when errors occur.

### `/pages/+onPageTransitionStart.ts` and `/pages/+onPageTransitionEnd.ts`

The [`onPageTransitionStart()` hook](https://vike.dev/onPageTransitionStart), together with [`onPageTransitionEnd()`](https://vike.dev/onPageTransitionEnd), enables you to implement page transition animations.

### SSR

SSR is enabled by default. You can [disable it](https://vike.dev/ssr) for all your pages or only for some pages.

### HTML Streaming

You can enable/disable [HTML streaming](https://vike.dev/stream) for all your pages, or only for some pages while still using it for others.

<!--bati:end category="UI Framework" flag="react"-->

<!--bati:start category="UI Component Libraries" flag="shadcn-ui"-->

## shadcn/ui

Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.

### Configuration

see [shadcn/ui theming](https://ui.shadcn.com/docs/theming)

Base Configuration can be found in `components.json` file.

> \[!NOTE]
> changes to the `components.json` file **will not** be reflected in existing components. Only new components will be affected.

### Add Components to Your Project

**Example:** add a component to your project.
`pnpm shadcn add button`

use the `<Button />` component in your project:
`import { Button } from "@/components/ui/button";`

more [shadcn/ui components](https://ui.shadcn.com/docs/components/accordion)

<!--bati:end category="UI Component Libraries" flag="shadcn-ui"-->

<!--bati:start category="Database" flag="prisma"-->

## *Prisma*

### Setup

Run the following command once:

```sh
pnpx prisma init
```

then follow instructions at <https://www.prisma.io/docs/getting-started/quickstart#2-model-your-data-in-the-prisma-schema>

<!--bati:end category="Database" flag="prisma"-->

<!--bati:end section="features"-->

<!--bati:end section="document"-->
