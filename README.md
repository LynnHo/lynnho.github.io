# Lynn Ho Homepage

Personal homepage hosted on GitHub Pages and built with Astro.

## Editing Content

Works live in `src/content/works/<work-name>/`. Competition entries live in
`src/content/competitions/<competition-name>/`.

```text
src/content/works/attgan/
  index.md
  attgan.jpg
```

Edit `index.md` for the title, authors, links, abstract, and BibTeX. Put local
images, PDFs, and GIFs in the same folder, then reference them with `./file`.

Other homepage text lives in `src/data/site.ts`.

Static public files such as the profile image and icons live in `public/images`.

## Local Development

```bash
npm install
npm run dev
```

The dev server listens on `0.0.0.0:4000`, so it is available locally at
<http://127.0.0.1:4000> and on the LAN through the machine's network address.

## Build

```bash
npm run build
```

GitHub Pages deployment uses `.github/workflows/deploy.yml`. The repository's
Pages source should be set to GitHub Actions.
