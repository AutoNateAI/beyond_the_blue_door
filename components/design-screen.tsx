import type { Screen } from "@/lib/blueprints";
import { screens } from "@/lib/blueprints";

export function DesignScreen({ screen }: { screen: Screen }) {
  const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");
  const file = screen === "home" ? "home" : screen;
  const title = screens[screen].title;

  return (
    <iframe
      className="design-screen"
      src={`${basePath}/screens/${file}.html`}
      title={title}
    />
  );
}
