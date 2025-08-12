import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  ArrowRight,
  Code2,
  Download,
  GitBranch,
  Github,
  Palette,
  Shield,
  Star,
  Type,
  Zap,
} from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero Section */}
      <section className="px-4 py-20 text-center">
        <div className="mx-auto max-w-4xl">
          <Badge variant="secondary" className="mb-4 px-3 py-1 text-sm">
            🚀 Production Ready Boilerplate
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Next.js Boilerplate
            <span className="block text-primary">
              with Complete Dev Workflow
            </span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            A modern, production-ready Next.js 15 boilerplate with Husky,
            Commitlint, ESLint, Prettier, shadcn/ui, and TypeScript. Start
            building professional apps instantly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group">
              <Download className="mr-2 h-4 w-4" />
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg">
              <Github className="mr-2 h-4 w-4" />
              View on GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Everything You Need to Build Fast
            </h2>
            <p className="text-muted-foreground text-lg">
              This boilerplate comes with all the modern tools and best
              practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Next.js 15 */}
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                    <Zap className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle>Next.js 15</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Latest Next.js with App Router, Turbopack, and React 19. Built
                  for performance and developer experience.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Development Workflow */}
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-lg">
                    <GitBranch className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <CardTitle>Dev Workflow</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Husky, Commitlint, and Lint-staged for automated code quality
                  and conventional commits.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Code Quality */}
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                    <Shield className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <CardTitle>Code Quality</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  ESLint and Prettier configured for consistent code style and
                  best practices.
                </CardDescription>
              </CardContent>
            </Card>

            {/* UI Components */}
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-100 dark:bg-orange-900/20 rounded-lg">
                    <Palette className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                  </div>
                  <CardTitle>shadcn/ui</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Beautiful, accessible components built with Radix UI and
                  Tailwind CSS.
                </CardDescription>
              </CardContent>
            </Card>

            {/* TypeScript */}
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-indigo-100 dark:bg-indigo-900/20 rounded-lg">
                    <Type className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <CardTitle>TypeScript</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Full TypeScript support with strict configuration and
                  comprehensive types.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Styling */}
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-pink-100 dark:bg-pink-900/20 rounded-lg">
                    <Code2 className="h-5 w-5 text-pink-600 dark:text-pink-400" />
                  </div>
                  <CardTitle>Tailwind CSS</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Utility-first CSS framework with custom design system and
                  animations.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="px-4 py-16 bg-muted/30">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Get Started in Minutes</h2>

          <Card className="text-left">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Terminal className="h-5 w-5" />
                Quick Installation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-background p-4 rounded-lg border">
                  <p className="text-sm text-muted-foreground mb-2">
                    Clone the repository
                  </p>
                  <code className="text-sm bg-muted px-2 py-1 rounded">
                    git clone
                    https://github.com/MofasserHossain/next-husky-commitlint-eslint-prettier-boilerplate
                  </code>
                </div>

                <div className="bg-background p-4 rounded-lg border">
                  <p className="text-sm text-muted-foreground mb-2">
                    Install dependencies
                  </p>
                  <code className="text-sm bg-muted px-2 py-1 rounded">
                    cd next-husky-commitlint-eslint-prettier-boilerplate && pnpm
                    install
                  </code>
                </div>

                <div className="bg-background p-4 rounded-lg border">
                  <p className="text-sm text-muted-foreground mb-2">
                    Start development
                  </p>
                  <code className="text-sm bg-muted px-2 py-1 rounded">
                    pnpm dev
                  </code>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <p className="text-muted-foreground">Development Tools</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground">TypeScript Coverage</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">0</div>
              <p className="text-muted-foreground">Configuration Needed</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Join developers who are already using this boilerplate to ship
            faster and better code.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group">
              <Star className="mr-2 h-4 w-4" />
              Star on GitHub
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg">
              <Download className="mr-2 h-4 w-4" />
              Download Template
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            Built with ❤️ by{' '}
            <a
              href="https://github.com/MofasserHossain"
              className="text-primary hover:underline"
            >
              Mofasser Hossain
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}

// Simple Terminal icon component
function Terminal({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M4 17l6-6-6-6M12 19h8" />
    </svg>
  )
}
