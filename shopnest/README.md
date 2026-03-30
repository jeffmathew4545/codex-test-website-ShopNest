# ShopNest – Dummy Test Website

A simple React e-commerce site built as a scan target for cybersecurity testing tools.

## Features (scan surface)
- Login form (email + password)
- Newsletter subscription form
- Product listing with add-to-cart
- Blog section
- Navigation with external-style links
- No HTTPS enforcement (intentional for scanning)
- No CSP headers (intentional)
- No CSRF tokens on forms (intentional)

## Quick Start

```bash
npm install
npm run dev
```

## Deploy to Netlify (get a live URL)

1. Push this folder to a GitHub repo
2. Go to https://netlify.com → "Add new site" → "Import from Git"
3. Select your repo, leave build settings as default:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Click Deploy — you'll get a live URL like `https://shopnest-abc123.netlify.app`

## Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## Deploy to GitHub Pages

```bash
npm run build
# Then push the /dist folder to gh-pages branch
```

## Use as Scan Target

Once deployed, paste the URL into your cybersecurity scanner. The site intentionally:
- Has no Content-Security-Policy header
- Has no X-Frame-Options header
- Has no HSTS enforcement
- Has no CSRF protection on forms
- Exposes server/framework info via Vite defaults
- Uses HTTP-accessible external font resources
