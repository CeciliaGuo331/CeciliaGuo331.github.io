import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 基本配置
  title: "Sparkles",
  description: "CeciliaGuo Blogs",
  lang: 'zh-CN',

  // 构建配置
  base: '/docs/',
  outDir: '../dist/docs',
  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: true,

  // 主题外观配置
  // appearance: 'force-dark',

  // Markdown 配置
  markdown: {
    lineNumbers: true,
    math: true,
    image: {
      lazyLoading: true
    }
  },

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
