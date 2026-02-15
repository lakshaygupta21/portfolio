# Portfolio - Next.js & GitHub Pages

This is a premium, high-performance portfolio template built with **Next.js 15**, **Tailwind CSS 4**, and configured for seamless deployment to **GitHub Pages**.

## ✨ Features

- 🚀 **Next.js 15 (App Router)** - Latest features and performance optimizations.
- 🎨 **Tailwind CSS 4** - Modern styling with a mesh gradient and glassmorphism.
- 📦 **Static Export** - Configured for zero-cost hosting on GitHub Pages.
- 🤖 **GitHub Actions** - Automatic deployment on every push to `main`.
- 📱 **Responsive Design** - Looks great on all devices.

## 🚀 Getting Started

### 1. Local Development

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 2. Deployment to GitHub Pages

1. **Push to GitHub**: Create a new repository on GitHub and push your code.
2. **Enable Pages**:
   - Go to your repository **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
3. **Configure Base Path** (Optional):
   - If your site is hosted at `https://<username>.github.io/<repo-name>/`, you **must** update `next.config.ts`:
     ```typescript
     const nextConfig: NextConfig = {
       output: 'export',
       basePath: '/<repo-name>', // Replace with your repository name
       // ...
     };
     ```
4. **Push to Main**: The included GitHub Action (`.github/workflows/nextjs.yml`) will automatically build and deploy your site.

## 🛠️ Configuration

- `next.config.ts`: Main Next.js configuration (Static Export enabled).
- `app/page.tsx`: The landing page content.
- `app/globals.css`: Design system and custom styles.
- `.github/workflows/nextjs.yml`: CI/CD pipeline for GitHub Pages.

## 📄 License

MIT
