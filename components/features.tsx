import { Zap, Shield, BarChart3, Users } from "lucide-react"

const features = [
  {
    name: "Automated Workflows",
    description:
      "Build powerful automation workflows with our visual editor. Connect your favorite tools and let StreamLine handle the rest.",
    icon: Zap,
  },
  {
    name: "Enterprise Security",
    description:
      "Bank-grade encryption and SOC 2 compliance. Your data is protected with the highest security standards in the industry.",
    icon: Shield,
  },
  {
    name: "Advanced Analytics",
    description:
      "Get deep insights into your workflows with real-time analytics. Track performance, identify bottlenecks, and optimize continuously.",
    icon: BarChart3,
  },
  {
    name: "Team Collaboration",
    description:
      "Work seamlessly with your team. Share workflows, collaborate in real-time, and keep everyone aligned on progress.",
    icon: Users,
  },
]

export function Features() {
  return (
    <section id="features" className="px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Features</p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Faster iteration. More innovation.
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            The platform for rapid progress. Let your team focus on shipping features instead of managing infrastructure
            with automated CI/CD, built-in testing, and integrated collaboration.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:mt-20 lg:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="group relative rounded-2xl border border-border bg-card p-8 transition-colors hover:border-accent/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                <feature.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-foreground">{feature.name}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
