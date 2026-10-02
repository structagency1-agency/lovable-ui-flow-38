import { createFileRoute, notFound } from "@tanstack/react-router";
import { agentScreens } from "@/screens/agent";

export const Route = createFileRoute("/agent/$screen")({
  loader: ({ params }) => {
    const s = agentScreens[params.screen];
    if (!s) throw notFound();
    return { title: s.t };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Agent"} — Speed Money Agent` },
      { name: "description", content: "Speed Money collection agent app: collect EMIs in cash with OTP and signature verification." },
      { property: "og:title", content: `${loaderData?.title ?? "Agent"} — Speed Money Agent` },
      { property: "og:description", content: "Speed Money collection agent app: collect EMIs in cash with OTP and signature verification." },
    ],
  }),
  component: AgentScreen,
});

function AgentScreen() {
  const { screen } = Route.useParams();
  const C = agentScreens[screen].c;
  return <C key={screen} />;
}
