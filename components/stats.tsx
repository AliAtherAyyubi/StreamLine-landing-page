const stats = [
  { value: "20 days", label: "saved on daily builds", company: "Acme Corp" },
  { value: "98%", label: "faster time to market", company: "TechFlow" },
  { value: "300%", label: "increase in productivity", company: "DataSync" },
  { value: "6×", label: "faster to build + deploy", company: "CloudBase" },
]

export function Stats() {
  return (
    <section className="border-y border-border bg-secondary/30">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-border lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.company} className="bg-background px-6 py-10 sm:px-8">
            <p className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              <span>{stat.value}</span>{" "}
              <span className="text-muted-foreground font-normal text-lg sm:text-xl">{stat.label}</span>
            </p>
            <p className="mt-4 text-sm font-medium text-muted-foreground">{stat.company}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
