import { notFound } from "next/navigation";
import { DesignScreen } from "@/components/design-screen";
import { screens, staticPages } from "@/lib/blueprints";
import type { Screen } from "@/lib/blueprints";

export const dynamicParams = false;

export function generateStaticParams() {
  return staticPages.map((page) => ({ page }));
}

export default async function ScreenPage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  if (!Object.hasOwn(screens, page) || page === "home") notFound();

  return <DesignScreen screen={page as Screen} />;
}
