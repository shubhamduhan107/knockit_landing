# Hosting knockit.live on GitHub Pages

## Step 1: DNS Configuration (at your domain registrar)

Go to your domain registrar (where you bought `knockit.live`) and add these DNS records:

### A Records (for apex domain `knockit.live`)

| Type | Name | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

### CNAME Record (for `www.knockit.live`)

| Type | Name | Value |
|------|------|-------|
| CNAME | www | shubhamduhan107.github.io |

## Step 2: Enable GitHub Pages

1. Go to https://github.com/shubhamduhan107/knockit_landing/settings/pages
2. Under **Build and deployment > Source**, select **GitHub Actions**
3. Under **Custom domain**, enter `knockit.live` and click **Save**
4. Wait for the DNS check to pass, then check **Enforce HTTPS**

## Step 3: Push Changes

Run the following commands:

```bash
git add .
git commit -m "configure GitHub Pages for knockit.live"
git push origin main
```

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically build and deploy the site.

## Step 4: Verify

- DNS propagation can take 5 minutes to 48 hours
- Verify DNS with: `dig knockit.live +short`
- Once propagated, visit https://knockit.live

## Files Changed

- `vite.config.ts` — changed `base` from `/knockit_landing/` to `/` (custom domain serves from root)
- `public/CNAME` — tells GitHub Pages to use `knockit.live` as the custom domain