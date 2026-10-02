import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Smartphone, LayoutDashboard, HandCoins } from "lucide-react";
import { CLink, ALink, GLink, Logo, Card, IconTile } from "@/components/sm/ui";
import { customerScreens } from "@/screens/customer";
import { adminScreens } from "@/screens/admin";
import { agentScreens } from "@/screens/agent";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Speed Money — Prototype Overview" },
      { name: "description", content: "Clickable UI prototype of Speed Money: customer app, admin portal and collection agent app." },
      { property: "og:title", content: "Speed Money — Prototype Overview" },
      { property: "og:description", content: "Clickable UI prototype of Speed Money: customer app, admin portal and collection agent app." },
    ],
  }),
  component: Index,
});

const portals = [
  { title: "Customer App", sub: "Mobile · 30 screens", icon: Smartphone, screens: customerScreens, L: CLink, start: "splash" },
  { title: "Admin Portal", sub: "Desktop · 21 screens", icon: LayoutDashboard, screens: adminScreens, L: ALink, start: "dashboard" },
  { title: "Collection Agent", sub: "Mobile · 12 screens", icon: HandCoins, screens: agentScreens, L: GLink, start: "login" },
];

function Index() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <Logo />
      <h1 className="mt-10 text-4xl font-extrabold tracking-tight text-navy">Fast • Simple • Secure</h1>
      <p className="mt-2 max-w-xl text-muted-foreground">Clickable UI prototype. Pick a portal to start its flow, or jump straight to any screen.</p>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {portals.map(({ title, sub, icon, screens, L, start }) => (
          <Card key={title} className="flex flex-col p-6">
            <div className="flex items-center gap-3"><IconTile icon={icon} /><div><h2 className="font-bold text-navy">{title}</h2><p className="text-xs text-muted-foreground">{sub}</p></div></div>
            <L s={start} className="mt-5 inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary text-sm font-semibold text-primary-foreground shadow-lift">Start flow <ArrowRight className="h-4 w-4" /></L>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {Object.entries(screens).map(([k, v]) => <L key={k} s={k} className="rounded-lg bg-muted px-2.5 py-1 text-[11px] font-medium text-navy hover:bg-soft hover:text-primary">{v.t}</L>)}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
