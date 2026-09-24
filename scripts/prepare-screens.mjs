import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourceRoot = path.join(root, "design-source", "stitch_ascension_funnel_blueprint");
const outputRoot = path.join(root, "public", "screens");
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");

const screens = {
  home: "beyond_the_blue_door_ascension_of_self_conversion_funnel",
  "ascension-model": "the_ascension_of_self_operating_framework",
  "financial-growth": "financial_growth_economic_mobility_ladder",
  "impact-and-intelligence": "institutional_funders_autonateai_intelligence_ledger",
};

const paths = {
  "our-program": "/",
  "the-ascension-model": "/ascension-model/",
  "financial-growth": "/financial-growth/",
  "impact-and-intelligence": "/impact-and-intelligence/",
  "community-and-partners": "/#partner-funnel",
  about: "/",
  "partner-and-fund": "/impact-and-intelligence/#briefing-form",
  "begin-your-journey": "/#intake-portal",
  "domain-self": "/ascension-model/#assessment-engine",
  "domain-child": "/ascension-model/#assessment-engine",
  "domain-family": "/ascension-model/#assessment-engine",
  "domain-community": "/ascension-model/#assessment-engine",
  "crisis-intake-portal": "/#intake-portal",
  "privacy-policy": "/",
  "terms-of-service": "/",
  "institutional-disclosure": "/impact-and-intelligence/#governance-specs",
};

await mkdir(outputRoot, { recursive: true });

for (const [route, directory] of Object.entries(screens)) {
  const input = path.join(sourceRoot, directory, "code.html");
  const output = path.join(outputRoot, `${route}.html`);
  const source = await readFile(input, "utf8");

  const html = source.replace(/<a\b[^>]*>/gi, (tag) => {
    const dataPath = tag.match(/\bdata-path="([^"]+)"/i)?.[1];
    const path = dataPath ? paths[dataPath] : undefined;
    if (!path) return tag;

    const href = `${basePath}${path}`;
    let updated = /\bhref="[^"]*"/i.test(tag)
      ? tag.replace(/\bhref="[^"]*"/i, `href="${href}"`)
      : tag.replace(/>$/, ` href="${href}">`);
    if (/\btarget="[^"]*"/i.test(updated)) {
      updated = updated.replace(/\btarget="[^"]*"/i, 'target="_top"');
    } else {
      updated = updated.replace(/>$/, ' target="_top">');
    }
    return updated;
  });

  await writeFile(output, html);
}
