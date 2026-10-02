import { createFileRoute, notFound } from "@tanstack/react-router";
import { customerScreens } from "@/screens/customer";

export const Route = createFileRoute("/app/$screen")({
  loader: ({ params }) => {
    const s = customerScreens[params.screen];
    if (!s) throw notFound();
    return { title: s.t };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Customer"} — Speed Money` },
      { name: "description", content: "Speed Money customer app: apply for loans, track applications and pay EMIs by UPI." },
      { property: "og:title", content: `${loaderData?.title ?? "Customer"} — Speed Money` },
      { property: "og:description", content: "Speed Money customer app: apply for loans, track applications and pay EMIs by UPI." },
    ],
  }),
  component: CustomerScreen,
});

function CustomerScreen() {
  const { screen } = Route.useParams();
  const C = customerScreens[screen].c;
  return <C key={screen} />;
}
