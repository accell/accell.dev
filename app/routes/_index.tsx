import type { MetaFunction } from "@remix-run/cloudflare";
import Links from "../components/links";
import Projects from "../components/projects";

export const meta: MetaFunction = () => {
  return [
    { title: "Accell" },
    { name: "description", content: "My comfy home on the web." },
  ];
};

export default function Index() {
  return (
    <div className="w-full h-full max-w-5xl px-8 py-8 mx-auto text-center">
      <h1 className="mb-4 text-base font-black tracking-wider uppercase sm:text-lg">
        <img
          className="block mb-2 mx-auto sm:h-[116px] sm:w-[128px] [image-rendering:pixelated]"
          src="/assets/images/logo.png"
          alt="Eric Colon"
          width="96"
          height="87"
        />
        <span className="block">
          Accell
        </span>
      </h1>
      <Links />
      <h2 className="mb-6 text-base font-black tracking-wider uppercase sm:text-lg">
        Projects I have worked on
      </h2>
      <Projects />
    </div>
  );
}