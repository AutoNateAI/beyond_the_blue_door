# Beyond the Blue Door

The supplied Stitch Ascension Funnel Blueprint is preserved as the design source. Next.js serves the main funnel at `/` and the three linked screens at `/ascension-model/`, `/financial-growth/`, and `/impact-and-intelligence/`. Each route is a standard statically exported Next.js page that displays the original standalone HTML fullscreen, preserving its responsive styling and inline interactions.

Before development or build, `scripts/prepare-screens.mjs` copies the source screens into `public/screens/` and connects Stitch's placeholder `data-path` links to the site routes. The generated copies are ignored by Git and regenerated automatically.

## Run locally

```sh
npm install
npm run dev
```

## GitHub Pages

The public site is available at <https://beyond-the-blue-door.autonateai.com>. The GitHub Actions workflow at `.github/workflows/deploy.yml` builds and publishes the static Next.js export whenever code is pushed to `main`. It also supports manual runs from the Actions tab. GitHub's Pages action supplies the site's base path so project sites work below `/<repository-name>/`.

In the GitHub repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**. The repository must be public to use GitHub Pages on a free GitHub plan. After the first successful deployment, GitHub shows the public site URL in the `github-pages` deployment environment and the workflow run.

The original archive and extracted HTML, screenshots, and `DESIGN.md` are retained in `design-source/stitch_ascension_funnel_blueprint/`.
