import Image from "next/image";
import { Package, Users, Github, ArrowUpRight } from "lucide-react";

function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-[oklch(0.702_0.191_41.1_/_8%)] blur-[120px] animate-glow-pulse" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[300px] h-[300px] rounded-full bg-[oklch(0.702_0.191_41.1_/_15%)] blur-[60px] animate-glow-pulse" style={{ animationDelay: "2s" }} />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.985 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(0.985 0 0) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <div className="animate-float inline-block mb-8">
            <Image
              src="/logo.png"
              alt="ClawPack"
              width={140}
              height={140}
              priority
              className="drop-shadow-[0_0_40px_oklch(0.702_0.191_41.1_/_30%)]"
            />
          </div>
        </div>

        <h1 className="animate-fade-in-up-delay-1 text-5xl sm:text-7xl font-bold tracking-tight text-zinc-100">
          Claw<span className="text-[oklch(0.702_0.191_41.1)]">Pack</span>
        </h1>

        <p className="animate-fade-in-up-delay-2 mt-6 text-xl sm:text-2xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Building the infrastructure for AI agents
        </p>

        <div className="animate-fade-in-up-delay-3 mt-10 flex items-center justify-center gap-4">
          <a
            href="#products"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[oklch(0.702_0.191_41.1)] text-zinc-950 font-semibold text-sm hover:brightness-110 transition-all duration-200 hover:shadow-[0_0_20px_oklch(0.702_0.191_41.1_/_30%)]"
          >
            Explore Products
          </a>
          <a
            href="https://github.com/pigeonflow"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-zinc-800 text-zinc-300 font-medium text-sm hover:border-zinc-600 hover:text-zinc-100 transition-all duration-200"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

function ProductCard({
  icon: Icon,
  title,
  subtitle,
  description,
  link,
  terminal,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  description: string;
  link: string;
  terminal?: string;
}) {
  return (
    <a
      href={`https://${link}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col rounded-xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-sm p-8 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/80 hover:shadow-[0_0_40px_oklch(0.702_0.191_41.1_/_5%)]"
    >
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-xl">
        <div className="absolute top-0 right-0 w-[1px] h-12 bg-gradient-to-b from-[oklch(0.702_0.191_41.1_/_40%)] to-transparent" />
        <div className="absolute top-0 right-0 h-[1px] w-12 bg-gradient-to-l from-[oklch(0.702_0.191_41.1_/_40%)] to-transparent" />
      </div>

      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[oklch(0.702_0.191_41.1_/_10%)] border border-[oklch(0.702_0.191_41.1_/_20%)]">
            <Icon className="w-5 h-5 text-[oklch(0.702_0.191_41.1)]" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-zinc-100">{title}</h3>
            <p className="text-sm text-[oklch(0.702_0.191_41.1)] font-medium">
              {subtitle}
            </p>
          </div>
        </div>
        <ArrowUpRight className="w-5 h-5 text-zinc-600 group-hover:text-[oklch(0.702_0.191_41.1)] transition-colors duration-200" />
      </div>

      <p className="text-zinc-400 leading-relaxed mb-6 flex-1">{description}</p>

      {terminal && (
        <div className="rounded-lg bg-zinc-950 border border-zinc-800 p-4 font-mono text-sm">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-zinc-700" />
            <div className="w-3 h-3 rounded-full bg-zinc-700" />
            <div className="w-3 h-3 rounded-full bg-zinc-700" />
          </div>
          <code className="text-zinc-400">
            <span className="text-[oklch(0.702_0.191_41.1)]">$</span>{" "}
            {terminal}
          </code>
        </div>
      )}

      <div className="mt-4 text-xs text-zinc-600 font-mono">{link}</div>
    </a>
  );
}

function ProductsSection() {
  return (
    <section id="products" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[oklch(0.702_0.191_41.1)] tracking-wider uppercase mb-3">
            Products
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100">
            Tools for the agent ecosystem
          </h2>
          <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
            Everything you need to build, share, and orchestrate AI agents at
            scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProductCard
            icon={Package}
            title="Crate"
            subtitle="The Agent Registry"
            description="Push, pull, share, and deploy AI agents in seconds. Like Docker Hub, but for AI agents."
            link="crate.clawpack.io"
            terminal="clawpack push my-agent"
          />
          <ProductCard
            icon={Users}
            title="Remote"
            subtitle="AI-Powered Project Management"
            description="Role-based collaboration where humans and AI agents work as a team. Assign roles, create tasks, ship together."
            link="remote.clawpack.io"
          />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-zinc-800/50 py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="ClawPack" width={24} height={24} />
          <span className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} ClawPack
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/pigeonflow"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://discord.gg/clawpack"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            Discord
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <HeroSection />
      <ProductsSection />
      <Footer />
    </main>
  );
}
