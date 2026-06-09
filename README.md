<div align="center">

# 🚀 Mohamed Ayad — Developer Portfolio

A modern, interactive developer portfolio built with Next.js 14 — featuring 3D animations, smooth motion transitions, dark mode, SEO optimization, and error monitoring.

[![Next.js](https://img.shields.io/badge/Next.js_14-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

**[🌐 Live Demo](https://mohamed-portfolio-drab.vercel.app)**

</div>

---

## ✨ Features

- **3D Interactive Globe** — Built with Three.js and React Three Fiber via `three-globe`, rendered directly in the browser with no canvas abstractions
- **Smooth Animations** — Page transitions and scroll-triggered effects powered by Framer Motion
- **Dark Mode** — System-aware theme switching using `next-themes`
- **SEO Optimized** — Auto-generated sitemap with `next-sitemap` and Google Search Console verified
- **Error Monitoring** — Production error tracking integrated with Sentry (client, server, and edge)
- **Performance-First** — Built on Next.js 14 App Router with TypeScript for type safety throughout
- **Lottie Animations** — Lightweight JSON-based animations via `react-lottie`

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| 3D Rendering | Three.js + React Three Fiber + React Three Drei |
| Animations | Framer Motion |
| Styling | Tailwind CSS + tailwind-merge |
| Theming | next-themes (dark/light mode) |
| Error Monitoring | Sentry |
| SEO | next-sitemap |
| Icons | React Icons |
| Lottie | react-lottie |

---

## 📁 Project Structure

```
├── app/             # Next.js App Router pages and layouts
├── components/      # Reusable UI components
├── data/            # Static content (projects, skills, experience)
├── public/          # Static assets
├── utils/           # Helper functions
├── sentry.*.config.ts  # Sentry configuration (client/server/edge)
└── next-sitemap.config.js
```

---

## 🚀 Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/mohamed-ayad40/Mohamed_Portfolio.git
cd Mohamed_Portfolio

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📄 License

MIT © [Mohamed Ayad](https://github.com/mohamed-ayad40)
