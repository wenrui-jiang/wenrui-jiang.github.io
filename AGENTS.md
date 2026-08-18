# Agent Development Notes

This repository is a multilingual Hugo personal website.

## Content Rules

- Public-facing content changes must be synchronized across all language versions:
  `content/english`, `content/Chinese`, `content/spanish`, `content/french`,
  `content/german`, `content/arabic`, and `content/latin`.
- If a translation is not final, add a conservative translated draft instead of
  leaving a language stale.
- `post/` is the technical Hugo section for the resume timeline. The user-facing
  label is `Experience` / `经历`.
- `portfolio/` is the technical Hugo section for articles/research. The
  user-facing label is `Articles` / `文章`.
- Avoid demo or placeholder content.
- Use only public-safe resume details.

## Build And Publish

- The generated GitHub Pages artifact lives in `docs/`.
- Cloudflare for `jiangwenrui.com` points to this machine, where Nginx serves:
  `/var/www/jiangwenrui`.
- After changing site content, templates, CSS, or config:
  1. Build the site into `docs/`.
  2. Publish `docs/` to `/var/www/jiangwenrui/`.
  3. Commit both source changes and updated `docs/`.

Current local build command:

```bash
mkdir -p themes
ln -s /tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/lxndrblz/anatole@v1.12.0 themes/anatole
hugo --theme anatole --destination docs
unlink themes/anatole
rmdir themes
```

Current local publish command:

```bash
rsync -a --delete docs/ /var/www/jiangwenrui/
```

## Important Notes

- Do not treat `public/` as the deployed artifact for this repository. The local
  production site is served from `/var/www/jiangwenrui`, and the committed static
  artifact is `docs/`.
- The live domain may show stale content if `/var/www/jiangwenrui` is not synced,
  even when GitHub Pages has the latest commit.
