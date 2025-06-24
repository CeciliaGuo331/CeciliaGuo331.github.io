import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Sparkles",
  description: "CeciliaGuo Blogs",
  base: '/docs/',
  outDir: '../dist/docs',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Articles', link: '/articles/' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/CeciliaGuo331' }
    ]
  }
})
