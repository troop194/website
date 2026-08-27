# website
Main static website for Troop 194

## Hosting
Hosted with Cloudflare pages with no framework, all files and directories are available.

Production: ![https://website-9eu.pages.dev/]
Old Page which we are trying to replicate: ![https://troop194webmaster.wixsite.com/t194rockyriverohio]

## Development
Pages are built with [Eleventy](https://www.11ty.dev/) so the shared nav and footer only live in one place (`_includes/`). You will need `node`. ![https://nodejs.org/en/download]

Install dependencies once:
```
npm install
```

Live-reloading preview while editing content:
```
npm start
```

Build the static site to `_site/`:
```
npm run build
```

Preview the built site through Cloudflare's Pages runtime (redirects, etc.):
```
npm run preview
```

### Cloudflare Pages project settings
Build command: `npx eleventy`
Build output directory: `_site`
