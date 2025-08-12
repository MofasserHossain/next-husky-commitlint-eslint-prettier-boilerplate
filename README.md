# Bright Soft Ltd

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) for Bright Soft Ltd.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## About Bright Soft Ltd

Bright Soft Ltd is a software development company focused on creating innovative web applications and digital solutions.

## Development Workflow

This project uses a streamlined development workflow with automated tools:

### Interactive Commit Command

Use the interactive commit command to easily create conventional commit messages:

```bash
# Full command
pnpm run commit

# Short alias
pnpm run c
```

The interactive commit tool will:

1. **Select commit type** from predefined options (feat, fix, docs, style, etc.)
2. **Select commit scope** from predefined options (setup, config, feature, bug, etc.)
3. **Enter commit description** for your changes
4. **Optionally add commit body and footer** for more detailed commits
5. **Automatically stage and commit** your changes

### Example Commit Messages

- `feat(feature): add user authentication system`
- `fix(bug): resolve login form validation issue`
- `docs(setup): update project documentation`
- `style(refactor): improve code formatting and structure`
- `chore(deps): update dependencies to latest versions`

### Automated Workflow

- **Pre-commit**: Automatically formats code and runs linting on staged files
- **Commit-msg**: Validates commit messages follow conventional commit format
- **Code Quality**: ESLint and Prettier ensure consistent code style

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
