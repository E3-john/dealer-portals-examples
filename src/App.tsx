import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"

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
    url: null,
    status: "repo",
  },
  {
    name: "Great Dane Dealer Playbook",
    description: "Dealer playbook for the Great Dane portal.",
    url: null,
    status: "repo",
  },
  {
    name: "Proof of Concept",
    description: "Full-stack POC with backend and authentication.",
    url: "https://poc-production-cd8b.up.railway.app/login",
    status: "live",
  },
  {
    name: "REV Demo",
    description: "REV dealer portal demo hosted on GitHub Pages.",
    url: "https://elementthree26.github.io/rev-dealer-portal-test/",
    status: "live",
  },
]

function StatusBadge({ status }: { status: string }) {
  if (status === "live") {
    return <Badge className="bg-green-600/10 text-green-600 border-green-600/20">Live</Badge>
  }
  return <Badge variant="secondary">Connected Repo</Badge>
}

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Dealer Portal Demos</h1>
          <p className="text-muted-foreground text-lg">
            Links to all dealer portal examples and proof-of-concept builds.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portals.map((portal) => (
            <Card key={portal.name} className="flex flex-col justify-between">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{portal.name}</CardTitle>
                  <StatusBadge status={portal.status} />
                </div>
                <CardDescription>{portal.description}</CardDescription>
              </CardHeader>
              <CardContent />
              <CardFooter>
                {portal.url ? (
                  <Button className="w-full" render={<a href={portal.url} target="_blank" rel="noopener noreferrer" />}>
                    View Demo
                  </Button>
                ) : (
                  <Button variant="outline" className="w-full" disabled>
                    Coming Soon
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
