# Portfolio

My personal portfolio, styled as a chat interface. Built with React, Vite, TypeScript and Tailwind CSS, hosted on Cloudflare Workers.

## Develop

```bash
npm install
npm run dev
```

## Editing content

- `src/data/profile.ts`: name, contact details, social links, resume path
- `src/data/projects.ts`: projects (each one gets a sidebar entry, a card and its own chat page)
- `src/data/conversations.tsx`: the About / Contact / Resume replies and the suggestion chips
- `src/lib/match.ts`: keywords that map typed questions to replies
- `public/images/`: images and the resume PDF

## Deploy

`wrangler.jsonc` serves `dist/` as static assets with SPA fallback, so routes like `/c/phase-shift` survive a refresh.

- Manual: `npx wrangler login` once, then `npm run deploy`.
- Automatic: in the Cloudflare dashboard, go to Workers & Pages, then Create, then import this GitHub repo. Set the build command to `npm run build` and the deploy command to `npx wrangler deploy`.

Add the custom domain under the Worker's Settings, then Domains & Routes.
