import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Sparkles,
  Upload,
  Wand2,
  ImageIcon,
  Home,
  Sofa,
  Palette,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <Sparkles className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-semibold text-foreground">
              DesignAI
            </span>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/pricing"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Pricing
            </Link>
            <Link
              href="/gallery"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Gallery
            </Link>
            <Button variant="outline" size="sm" asChild>
              <Link href="/login">Login</Link>
            </Button>
          </div>
        </div>
      </nav>

      <section className="container mx-auto px-6 pt-32 pb-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-sm w-fit">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">AI-Powered Design</span>
            </div>

            <h1 className="text-5xl font-bold leading-tight tracking-tight text-foreground lg:text-6xl text-balance">
              Transform Your Space with AI Magic
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Upload a photo of any room or exterior space, and watch as our AI
              creates photorealistic renderings with your dream furniture and
              design elements. No design experience needed.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button size="lg" className="text-base font-semibold">
                Try for Free
                <Sparkles className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base font-semibold bg-transparent"
              >
                View Gallery
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-foreground">50K+</span>
                <span className="text-sm text-muted-foreground">
                  Designs Created
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-foreground">
                  4.9/5
                </span>
                <span className="text-sm text-muted-foreground">
                  User Rating
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-foreground">10K+</span>
                <span className="text-sm text-muted-foreground">
                  Happy Users
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-2xl border border-border bg-muted">
              <img
                src="/placeholder.svg?height=600&width=600"
                alt="AI-transformed interior design"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-xl border border-border bg-card p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-card-foreground">
                    Instant Results
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Generated in seconds
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/30 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-3 text-balance">
              Three Simple Steps to Your Dream Space
            </h2>
            <p className="text-muted-foreground text-lg text-pretty">
              Transform any space in minutes with our AI-powered design tool
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="p-6 flex flex-col items-center text-center gap-4 border-border">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Upload className="h-8 w-8 text-primary" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold text-card-foreground">
                  1. Upload Your Photo
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Take a picture of your room or outdoor space and upload it to
                  our platform
                </p>
              </div>
            </Card>

            <Card className="p-6 flex flex-col items-center text-center gap-4 border-border">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Wand2 className="h-8 w-8 text-primary" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold text-card-foreground">
                  2. Edit with AI
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Use our intuitive AI tools to add furniture, change colors,
                  and redesign elements
                </p>
              </div>
            </Card>

            <Card className="p-6 flex flex-col items-center text-center gap-4 border-border">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <ImageIcon className="h-8 w-8 text-primary" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold text-card-foreground">
                  3. Get Photorealistic Results
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Receive stunning, photorealistic renderings of your redesigned
                  space instantly
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-3 text-balance">
              Everything You Need to Design Your Dream Home
            </h2>
            <p className="text-muted-foreground text-lg text-pretty">
              Powerful AI features that make interior design accessible to
              everyone
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="p-6 flex flex-col gap-3 border-border hover:border-primary/50 transition-colors">
              <Home className="h-10 w-10 text-primary" />
              <h3 className="text-lg font-semibold text-card-foreground">
                Interior Spaces
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Redesign living rooms, bedrooms, kitchens, and any interior
                space
              </p>
            </Card>

            <Card className="p-6 flex flex-col gap-3 border-border hover:border-primary/50 transition-colors">
              <Sparkles className="h-10 w-10 text-primary" />
              <h3 className="text-lg font-semibold text-card-foreground">
                Exterior Design
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Transform patios, gardens, and outdoor living areas with ease
              </p>
            </Card>

            <Card className="p-6 flex flex-col gap-3 border-border hover:border-primary/50 transition-colors">
              <Sofa className="h-10 w-10 text-primary" />
              <h3 className="text-lg font-semibold text-card-foreground">
                Furniture Placement
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Add and arrange furniture with AI-powered precision and realism
              </p>
            </Card>

            <Card className="p-6 flex flex-col gap-3 border-border hover:border-primary/50 transition-colors">
              <Palette className="h-10 w-10 text-primary" />
              <h3 className="text-lg font-semibold text-card-foreground">
                Color & Style
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Experiment with colors, textures, and design styles instantly
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/30 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-3 text-balance">
              See the Transformation
            </h2>
            <p className="text-muted-foreground text-lg text-pretty">
              Real spaces redesigned by our AI technology
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="group relative overflow-hidden rounded-xl border border-border bg-card">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Living room transformation"
                className="h-64 w-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="p-4">
                <p className="text-sm font-medium text-card-foreground">
                  Modern Living Room
                </p>
                <p className="text-xs text-muted-foreground">
                  Contemporary redesign
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl border border-border bg-card">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Bedroom transformation"
                className="h-64 w-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="p-4">
                <p className="text-sm font-medium text-card-foreground">
                  Cozy Bedroom
                </p>
                <p className="text-xs text-muted-foreground">
                  Minimalist style
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl border border-border bg-card">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Patio transformation"
                className="h-64 w-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="p-4">
                <p className="text-sm font-medium text-card-foreground">
                  Outdoor Patio
                </p>
                <p className="text-xs text-muted-foreground">Garden oasis</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg" asChild>
              <Link href="/gallery">View Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-3 text-balance">
              Loved by Homeowners Everywhere
            </h2>
            <p className="text-muted-foreground text-lg text-pretty">
              See what our users have to say about their design experience
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="p-6 flex flex-col gap-4 border-border">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Sparkles
                    key={i}
                    className="h-4 w-4 fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="text-card-foreground leading-relaxed">
                "This app completely transformed how I visualize my home
                renovations. The AI is incredibly accurate and the results look
                so realistic!"
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="h-10 w-10 rounded-full bg-muted" />
                <div>
                  <p className="text-sm font-medium text-card-foreground">
                    Sarah Johnson
                  </p>
                  <p className="text-xs text-muted-foreground">Homeowner</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 flex flex-col gap-4 border-border">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Sparkles
                    key={i}
                    className="h-4 w-4 fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="text-card-foreground leading-relaxed">
                "I saved thousands on interior design consultations. The AI
                suggestions are spot-on and I can experiment with different
                styles risk-free."
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="h-10 w-10 rounded-full bg-muted" />
                <div>
                  <p className="text-sm font-medium text-card-foreground">
                    Michael Chen
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Property Investor
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 flex flex-col gap-4 border-border">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Sparkles
                    key={i}
                    className="h-4 w-4 fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="text-card-foreground leading-relaxed">
                "As someone with no design background, this tool made it so easy
                to create beautiful spaces. The photorealistic renders are
                amazing!"
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="h-10 w-10 rounded-full bg-muted" />
                <div>
                  <p className="text-sm font-medium text-card-foreground">
                    Emily Rodriguez
                  </p>
                  <p className="text-xs text-muted-foreground">
                    First-time Homeowner
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-muted/30 py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground text-balance">
              Ready to Transform Your Space?
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Join thousands of homeowners who are already designing their dream
              spaces with AI. Start your free trial today and see the magic for
              yourself.
            </p>
            <Button size="lg" className="text-base font-semibold">
              Try for Free - No Credit Card Required
              <Sparkles className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-sm text-muted-foreground">
              Free trial includes 5 AI-generated designs
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                  <Sparkles className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-lg font-semibold text-foreground">
                  DesignAI
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                AI-powered interior and exterior design for everyone.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-semibold text-foreground">Product</h4>
              <Link
                href="/pricing"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="/gallery"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Gallery
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-semibold text-foreground">Company</h4>
              <Link
                href="/about"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-semibold text-foreground">Legal</h4>
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms
              </Link>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 DesignAI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
