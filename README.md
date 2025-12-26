# Next.js Starter Template

A production-ready Next.js 16 starter with TypeScript, Tailwind CSS 4, and sensible defaults.

## Features

- **Next.js 16** with App Router and React 19
- **TypeScript** with strict mode
- **Tailwind CSS 4** with PostCSS
- **ESLint 9** with import sorting
- **Prettier** with Tailwind plugin
- **Husky + lint-staged** for pre-commit hooks
- **Commitlint** for conventional commits
- **SEO ready** with sitemap and robots.txt

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app.

## Use as Template

**Option 1: GitHub Template**

1. Click "Use this template" on GitHub
2. Create your new repository
3. Clone and start building

**Option 2: Clone directly**

```bash
git clone https://github.com/yourusername/next-template.git my-project
cd my-project
rm -rf .git && git init
pnpm install
```

**Option 3: degit**

```bash
npx degit yourusername/next-template my-project
cd my-project
pnpm install
```

**After cloning:**

1. Update `name` in `package.json`
2. Update site info in `constants/index.ts`
3. Copy `.env.example` to `.env.local`
4. Replace favicon and OG image in `public/`

## Project Structure

```
├── app/                # Next.js App Router
├── components/
│   ├── ui/             # Reusable UI components
│   └── layouts/        # Layout components
├── lib/
│   ├── cn.ts           # clsx + tailwind-merge
│   ├── env.ts          # Type-safe env vars
│   ├── helpers.ts      # Utility functions
│   └── seo.ts          # SEO metadata helper
├── hooks/              # Custom React hooks
├── types/              # TypeScript types
└── constants/          # Site config
```

## Scripts

| Command         | Description          |
| --------------- | -------------------- |
| `pnpm dev`      | Start dev server     |
| `pnpm build`    | Production build     |
| `pnpm lint`     | Run ESLint           |
| `pnpm lint:fix` | Fix lint issues      |
| `pnpm format`   | Format with Prettier |

## Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

Edit `lib/env.ts` to add your environment variables with type-safe validation.

## Customization

1. Update `constants/index.ts` with your site info
2. Replace favicon and OG image in `public/`
3. Modify `app/sitemap.ts` to include your routes

## Docker

To self-host with Docker:

1. Enable standalone output in `next.config.ts`:

   ```ts
   output: 'standalone',
   ```

2. Build and run:
   ```bash
   docker build -t my-app .
   docker run -p 3000:3000 my-app
   ```

## License

MIT
