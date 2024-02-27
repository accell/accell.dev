import type { MetaFunction } from "@remix-run/cloudflare";
import Projects from "../components/projects";

export const meta: MetaFunction = () => {
  return [
    { title: "Accell" },
    { name: "description", content: "My comfy home on the web." },
  ];
};

export default function Index() {
  return (
    <main className="grid max-w-3xl grid-cols-1 gap-4 px-4 py-0 mx-auto text-left text-gray-500 border-gray-500 bg-inherit bit-border-step4">
      <Projects />
    </main>
  );
}