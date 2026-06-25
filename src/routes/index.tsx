import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KORVA Workforce Cloud — Discovery + Prototype MVP" },
      { name: "description", content: "End-to-end workforce lifecycle from employer demand to worker earnings." },
      { property: "og:title", content: "KORVA Workforce Cloud" },
      { property: "og:description", content: "Demand. Learning. WorkCloud. Pay. One platform." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/korva.html"
      title="KORVA Workforce Cloud"
      style={{ border: 0, width: "100vw", height: "100vh", display: "block" }}
    />
  );
}
