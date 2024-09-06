import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "科技工具X - Tools文档",
  description: "科技工具X - Tools文档",
  lang: 'zh-CN',
  // base: '/Tools-document/',
  head: [
    ['link', { rel: 'icon', href: '/background.svg' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    outlineTitle: "页面导航",
    outline: [2, 6],

    logo: "/background.svg",


    markdown: {
      setup(md) {
        // 使用 shiki 的代码高亮功能
        md.use(require('shiki'), {
          // 你的 shiki 配置项
          // 例如选择主题和语言
          theme: 'nord',
          langs: ['html', 'js', 'ts', 'css', 'json', 'md', 'bash']
        })
      }
    },

    // sidebar: {
    //   'document-data': set_sidebar('document-data'), // 文档数据部分侧边栏
    // },

    sidebar: {
      "/": [
        {
          text: '简介',
          items: [
            { text: '什么是X-Tools?', link: "/Presentation-notes" },
            { text: '快速开始', link: "/Start-Document" },
          ]
        },
        {
          text: '使用',
          items: [
            { text: 'Git使用', link: "/git-code" },
            { text: '测试文档', link: "/zh/Example/markdown-examples" },
            { text: 'API测试文档', link: "/zh/Example/api-examples" },
          ]
        },
        {
          text: '',
          items: [
            { text: '返回首页', link: "/index" },
          ]
        }
      ],

      "/zh/c/": [
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
      { text: '简介', link: '/Start-Document', activeMatch: '^/Start-Document|^/Presentation-notes|^/git-code|^/zh/Example/markdown-examples|^/zh/Example/api-examples' },
      { text: '代理', link: 'https://re0xiaopa.github.io/web-demo/' },
      {
        text: '语言',
        items: [
          {
            // 也可以省略标题
            text: '2023年',
            // 该部分的标题
            items: [
              { text: 'HTML', link: '#' },
              { text: 'CSS', link: '#' },
              { text: 'Java', link: '#' },
              { text: 'Linux', link: '#' },
              { text: 'MySQL', link: '#' },
              { text: 'Javascript', link: '#' },
            ]
          },
          {
            // 也可以省略标题
            text: '2024年',
            items: [
              { text: '软件工程', link: '#' },
              { text: 'C语言程序设计', link: "#" },
              { text: 'Web程序设计', link: '#' },
              { text: 'Jquery&Ajax异步交互', link: '#' },
              { text: 'BootStrap前端开发', link: '#' },
            ]
          },
          {
            // 也可以省略标题
            text: '其它',
            items: [
              { text: 'Photoshop图形图像处理', link: '#' },
            ]
          },
          {
            // 也可以省略标题
            text: 'Demo',
            items: [
              { text: 'C++ (C嘎嘎)', link: '#' },
              { text: 'C#  (C嘎嘎嘎嘎)', link: '#' },
            ]
          },
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
      },

      {
        text: '更多',
        items: [
          {
            // 也可以省略标题
            text: '网站',
            items: [
              { text: '自仿AcFun网页模板', link: 'https://re0xiaopa.github.io/acfun-Website-templates/' },
              { text: 'Steam', link: 'https://store.steampowered.com/join' }
            ]
          },
          {
            // 也可以省略标题
            text: '动漫',
            items: [
              { text: '次元城动漫', link: 'https://www.cycanime.com/' },
              { text: '囧次元', link: 'https://jcypc.net/' },
              { text: 'omofun', link: 'https://omoget.com/' },
              { text: 'MX动漫', link: 'http://www.mxdm.tv/' }
            ]
          },
          {
            // 也可以省略标题
            text: '影视',
            items: [
              { text: '瓜子影视APP', link: 'https://www.gz99.co/' },
            ]
          },
        ]
      },
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
      {
        icon: {
          svg: '<svg t="1723712354637" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5474" width="20" height="20"><path d="M512 504L764.8 68.8h-134.4L512 275.2 393.6 70.4h-134.4L512 504zM819.2 70.4L512 600 204.8 68.8H0l512 886.4L1024 70.4H819.2z" fill="#888888" p-id="5475"></path></svg>',
        },
        link: 'https://vitepress.dev/zh/'
      },
    ],
    footer: {
      copyright: "Copyright © 2024 爱吃饭的小Q. All rights reserved",
    },
  },
})
