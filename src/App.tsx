import { useState } from "react"
import { ChevronRight } from "lucide-react"

const portals = [
  {
    name: "TRP Demo",
    description: "TRP dealer portal demo built on Figma.",
    url: "https://size-azure-38121369.figma.site/",
    status: "live",
  },
  {
    name: "Great Dane Demo",
    description: "Great Dane version of the dealer portal.",
    url: "https://gddealerportalexperiencedesign-production.up.railway.app/",
    status: "live",
  },
  {
    name: "Great Dane Dealer Playbook",
    description: "GD Campaign Playbook Builder Interface.",
    url: "https://gdcampaigplaybookbuilderinterface-production.up.railway.app/",
    status: "live",
  },
  {
    name: "Frontend/Backend Demo",
    description: "Full-stack POC with backend and authentication.",
    url: "https://poc-production-cd8b.up.railway.app/login",
    status: "live",
  },
  {
    name: "Airstream Program Enrollment",
    description: "Airstream dealer program enrollment experience.",
    url: "https://agreeable-reassurance-629733.framer.app/",
    status: "live",
  },
  {
    name: "REV Demo",
    description: "REV dealer portal demo hosted on GitHub Pages.",
    url: "https://elementthree26.github.io/rev-dealer-portal-test/",
    status: "live",
  },
]

function CrossPattern() {
  const cols = 40
  const rows = 2
  return (
    <div className="flex flex-col gap-[3px] opacity-40">
      {Array.from({ length: rows }).map((_, r) => (
        <div key={r} className="flex gap-[3px]">
          {Array.from({ length: cols }).map((_, c) => (
            <span
              key={c}
              className="text-accent text-[10px] leading-none select-none"
            >
              +
            </span>
          ))}
        </div>
      ))}
    </div>
  )
}

function ServiceRow({
  name,
  description,
  url,
  status,
  isLast,
}: {
  name: string
  description: string
  url: string | null
  status: string
  isLast: boolean
}) {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center gap-4 py-4 text-left cursor-pointer group"
      >
        <span
          className="text-accent/60 text-lg font-light transition-transform duration-200 group-hover:text-accent"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          +
        </span>
        <span className="font-semibold text-[17px] tracking-[-0.01em] text-white">
          {name}
        </span>
        {status === "live" && (
          <span className="ml-auto flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-accent text-xs font-medium uppercase tracking-wider">
              Live
            </span>
          </span>
        )}
      </button>

      <div
        className="overflow-hidden transition-all duration-300 ease-out"
        style={{
          maxHeight: open ? "120px" : "0px",
          opacity: open ? 1 : 0,
        }}
      >
        <div className="pb-4 pl-8">
          <p className="text-[hsl(0,0%,64%)] text-sm leading-relaxed mb-3">
            {description}
          </p>
          {url ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-accent text-sm font-medium hover:underline underline-offset-4"
            >
              View Demo
              <ChevronRight className="size-3.5" />
            </a>
          ) : (
            <span className="text-[hsl(0,0%,45%)] text-sm italic">
              Coming soon
            </span>
          )}
        </div>
      </div>

      {!isLast && <div className="h-px bg-[hsl(0,0%,22%)]" />}
    </div>
  )
}

function App() {
  return (
    <div className="dark min-h-screen bg-[hsl(0,0%,7%)] text-white">
      {/* Accent bar — top-left */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-accent" />

      <div className="mx-auto max-w-7xl px-8 md:px-16 pt-24 pb-16">
        {/* Two-column hero */}
        <div className="grid gap-16 md:grid-cols-2 items-start">
          {/* Left column — headline + body */}
          <div>
            {/* Dash accent */}
            <div className="w-10 h-[3px] bg-accent mb-8" />

            <h1
              className="font-bold leading-[1.05] tracking-[-0.02em] mb-10 text-white"
              style={{ fontSize: "clamp(42px, 5vw, 72px)" }}
            >
              Dealer Portal
              <br />
              Demos
            </h1>

            <p className="text-[hsl(0,0%,64%)] text-base leading-[1.65] max-w-md">
              Working demos of dealer portals built by Element Three.
              Each example explores a different approach to giving dealer
              networks the tools they need to market locally.
            </p>
          </div>

          {/* Right column — portal list */}
          <div className="md:pt-4">
            <p
              className="uppercase font-bold tracking-[0.08em] text-accent mb-6"
              style={{
                fontSize: "var(--font-size-eyebrow)",
                lineHeight: "var(--leading-eyebrow)",
                letterSpacing: "var(--tracking-eyebrow)",
              }}
            >
              Demos
            </p>

            <div>
              {portals.map((portal, i) => (
                <ServiceRow
                  key={portal.name}
                  name={portal.name}
                  description={portal.description}
                  url={portal.url}
                  status={portal.status}
                  isLast={i === portals.length - 1}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom cross pattern */}
        <div className="mt-24 flex justify-center">
          <CrossPattern />
        </div>
      </div>
    </div>
  )
}

export default App
