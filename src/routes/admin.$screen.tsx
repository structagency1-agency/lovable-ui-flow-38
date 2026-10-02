import { createFileRoute, notFound } from "@tanstack/react-router";
import { adminScreens } from "@/screens/admin";

export const Route = createFileRoute("/admin/$screen")({
  loader: ({ params }) => {
    const s = adminScreens[params.screen];
    if (!s) throw notFound();
    return { title: s.t };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Admin"} — Speed Money Admin` },
      { name: "description", content: "Speed Money admin portal: manage customers, applications, loans, EMIs, agents and collections." },
      { property: "og:title", content: `${loaderData?.title ?? "Admin"} — Speed Money Admin` },
      { property: "og:description", content: "Speed Money admin portal: manage customers, applications, loans, EMIs, agents and collections." },
    ],
  }),
  component: AdminScreen,
});

function AdminScreen() {
  const { screen } = Route.useParams();
  const C = adminScreens[screen].c;
  return <C key={screen} />;
}
