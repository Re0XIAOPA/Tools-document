import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "科技工具X - Tools文档",
  description: "科技工具X - Tools文档",
  lang: 'zh-CN',
  // base: '/Tools-document/',
  head: [
    ['link', { rel: 'icon', href: '/background.svg'}],
  ], 
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    outlineTitle:"文章导航",
    outline:[2,6],

    logo: "/background.svg",

    // sidebar: {
    //   'document-data': set_sidebar('document-data'), // 文档数据部分侧边栏
    // },

    sidebar: {
      "/": [
        { 
          text: '爱吃饭的小Q的文档',
          items: [
            { text: '前言', link: "/Start-Document" },
            { text: '介绍说明', link: "/Presentation-notes" },
            { text: 'Git使用', link: "/git-code" },
          ]
        }
      ],

      "/document/": [
        {
          text: 'C语言',
          items: [
            { text: '前言', link: "#" },
            { text: '入门', link: "#" },
            { text: '开始', link: "#" }
          ]
        }
      ],
      
    },

    nav: [
      { text: '首页', link: '/' },
      { text: '代理', link: 'https://re0xiaopa.github.io/web-demo/' },
      {
        text: '语言',
        items: [
          {
            // 该部分的标题
            items: [
              { text: 'C语言', link: "#" },
              { text: 'HTML', link: '#' },
              { text: 'CSS', link: '#' },
              { text: 'Javascript', link: '#' },
              { text: 'Java', link: '#' },
              { text: 'Linux', link: '#' },
              { text: 'MySQL', link: '#' },
              { text: 'C++ (C嘎嘎)', link: '#' },
              { text: 'C#  (C嘎嘎嘎嘎)', link: '#' },
            ]
          }
        ]
      },

      {
        text: '教程',
        items: [
          {
            // 也可以省略标题
            text: 'none',
            items: [
              { text: ' ', link: '...' },
              { text: ' ', link: '...' }
            ]
          }
        ]
      },

      {
        text: '答案',
        items: [
          {
            // 也可以省略标题
            text: 'none',
            items: [
              { text: ' ', link: '...' },
              { text: ' ', link: '...' }
            ]
          }
        ]
      }
    ],

    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
  
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Re0XIAOPA' },
      { 
        icon: {
          svg: '<svg t="1723368162546" class="icon" viewBox="0 0 1084 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2744" width="256" height="256"><path d="M896.43834 165.698h-62.34l54.57-54.57c23.43-23.37 23.43-70.17 0-93.54-23.37-23.37-70.17-23.37-93.54 0l-155.88 148.17H452.17034l-155.94-148.23c-23.43-23.37-70.17-23.37-93.54 0-23.37 23.43-23.43 70.17 0 93.54l54.57 54.57h-62.34A192.983 192.983 0 0 0 0.00934 360.607v420.899c0 116.97 85.71 202.68 194.91 202.68h693.75a192.983 192.983 0 0 0 194.85-194.85v-428.73c7.83-109.14-77.94-194.91-187.08-194.91z m54.63 615.809a69.869 69.869 0 0 1-70.17 70.17h-678.27a69.869 69.869 0 0 1-70.109-70.17v-413.13a69.869 69.869 0 0 1 70.17-70.17h678.21a69.869 69.869 0 0 1 70.17 70.17v413.19z m-608.039-342.96a69.869 69.869 0 0 0-70.23 70.17v70.17a69.869 69.869 0 0 0 70.17 70.17 69.869 69.869 0 0 0 70.23-70.17v-70.17a69.869 69.869 0 0 0-70.23-70.17z m405.36 0a69.869 69.869 0 0 0-70.23 70.17v70.17a69.869 69.869 0 0 0 70.17 70.17 69.869 69.869 0 0 0 70.23-70.17v-70.17a69.869 69.869 0 0 0-70.17-70.17z" p-id="2745"></path></svg>',
        }, 
        link: 'https://space.bilibili.com/438125945' 
      },
    ],
    footer:{
      copyright: "Copyright © 2024 爱吃饭的小Q. All rights reserved",
    },
  },
})
