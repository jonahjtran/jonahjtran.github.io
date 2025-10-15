import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Set base for GitHub Pages automatically when building in Actions
  // - user/org pages (username.github.io) => "/"
  // - project pages (username.github.io/repo) => "/repo/"
  base: (() => {
    const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] || "";
    const isUserPage = repo.endsWith(".github.io");
    if (isUserPage) return "/";
    return repo ? `/${repo}/` : "/";
  })(),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    }
  }
})
