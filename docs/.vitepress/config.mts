import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 基本配置
  title: "Sparkles",
  description: "CeciliaGuo Blogs",
  lang: 'zh-CN',

  // 构建配置
  base: './',
  outDir: '../dist/docs',
  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: true,

  // 主题外观配置
  // appearance: 'force-dark',

  // Markdown 配置
  markdown: {
    lineNumbers: true,
    image: {
      lazyLoading: true
    }
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Content', link: '/' },
      { text: 'Home', link: 'https://ceciliaguo331.github.io/', target: '_self' },
    ],

    sidebar: [
      {
        text: 'Idea',
        items: [
          { text: '2024', link: '/content/idea/2024' }
        ]
      },
      {
        text: 'Note',
        items: [
          { text: 'Default', link: '/content/note/default' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/CeciliaGuo331' }
    ]
  }
})
