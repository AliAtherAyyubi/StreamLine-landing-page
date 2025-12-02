import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    quote:
      "StreamLine has completely transformed how our team works. We've cut our deployment time by 80% and our developers are happier than ever.",
    author: "Sarah Chen",
    role: "VP of Engineering",
    company: "TechFlow",
    avatar: "/professional-woman-headshot.png",
  },
  {
    quote:
      "The automation capabilities are incredible. What used to take us days now happens in minutes. It's like having an extra team member.",
    author: "Marcus Johnson",
    role: "CTO",
    company: "DataSync",
    avatar: "/professional-man-headshot.png",
  },
  {
    quote:
      "We evaluated 10 different platforms before choosing StreamLine. The combination of power and simplicity is unmatched in the market.",
    author: "Emily Rodriguez",
    role: "Head of Operations",
    company: "CloudBase",
    avatar: "/professional-woman-executive-headshot.png",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="border-y border-border bg-secondary/30 px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Testimonials</p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Trusted by industry leaders
          </h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:mt-20 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="flex flex-col rounded-2xl border border-border bg-card p-8">
              <blockquote className="flex-1 text-foreground">&ldquo;{testimonial.quote}&rdquo;</blockquote>
              <div className="mt-8 flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.author} />
                  <AvatarFallback>
                    {testimonial.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
