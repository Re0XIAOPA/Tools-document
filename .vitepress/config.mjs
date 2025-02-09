import {
  defineConfig
} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "科技工具X - Tools文档",
  description: "科技工具X - Tools文档",
  lang: 'zh-CN',
  // base: '/Tools-document/',
  head: [
    ['link', {
      rel: 'icon',
      href: '/background.svg'
    }],
  ],
  lastUpdated: true,
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
      },
      image: {
        // 默认禁用图片懒加载
        lazyLoading: true
      },
    },

    // sidebar: {
    //   'document-data': set_sidebar('document-data'), // 文档数据部分侧边栏
    // },
    sidebar: {
      "/": [{
        text: '简介',
        items: [{
          text: '什么是X-Tools?',
          link: "/doc/Presentation-notes"
        },
        {
          text: '开始文档',
          link: "/doc/Start-Document"
        },
        ]
      },
      {
        text: '教程',
        items: [{
          text: 'Git的使用',
          link: "/zh/Git/git-code"
        },
        {
          text: 'Github520-Github加速',
          link: "/zh/Github/Github520.md"
        },
        {
          text: 'Vitepress搭建',
          link: '/zh/OS/vitepress-install'
        },
        {
          text: 'MySQL的安装和环境配置',
          link: '/zh/MySQL/MySQL-install'
        },
        ]
      },
      {
        text: 'JavaWeb',
        items: [
          {
            text: 'Tomcat安装配置',
            link: "/zh/JavaWeb/Tomcat安装配置.md"
          }, {
            text: 'Eclipse + Tomcat',
            link: "/zh/JavaWeb/eclipse-apache.md"
          },
          {
            text: 'idea + Tomcat',
            link: "/zh/JavaWeb/idea-Tomcat.md"
          }
        ]
      },
      {
        text: '官方',
        items: [{
          text: '示例文档',
          link: "/zh/Example/markdown-examples"
        },
        {
          text: 'API示例文档',
          link: "/zh/Example/api-examples"
        },
        ]
      },
      {
        text: '答案',
        items: [{
          text: '软件工程头歌答案',
          link: "/doc/answer/SoftwareEngineeringAnswers"
        },]
      },
      {
        text: '',
        items: [{
          text: '返回首页',
          link: "/index"
        },]
      }
      ],


      // "/zh/c/": [
      //   {
      //     text: 'C语言',
      //     items: [
      //       { text: '前言', link: "#" },
      //       { text: '入门', link: "#" },
      //       { text: '开始', link: "#" }
      //     ]
      //   }
      // ],

    },

    nav: [{
      text: '首页',
      link: '/'
    },
    // {
    //   text: '简介',
    //   link: '/doc/Start-Document',
    //   activeMatch: '^/Start-Document|^/Presentation-notes|^/git-code|^/zh/Example/markdown-examples|^/zh/Example/api-examples'
    // },

    {
      text: '语言',
      items: [{
        // 也可以省略标题
        text: '爪哇网页',
        items: [
          // { text: '软件工程', link: '#' },
          // { text: 'C语言', link: "#" },
          {
            text: 'Tomcat安装配置',
            link: "/zh/JavaWeb/Tomcat安装配置.md"
          }, {
            text: 'Eclipse + Tomcat',
            link: "/zh/JavaWeb/eclipse-apache.md"
          },
          {
            text: 'idea + Tomcat',
            link: "/zh/JavaWeb/idea-Tomcat.md"
          }
          // { text: 'Jquery&Ajax异步交互', link: '#' },
          // { text: 'BootStrap前端开发', link: '#' },
        ]
      },]
    },

    {
      text: '教程',
      items: [{
        // 也可以省略标题
        // text: '使用教程',
        // 该部分的标题

        items: [{
          text: 'Git的使用',
          link: '/zh/Git/git-code'
        },
        {
          text: 'Github520-Github加速',
          link: "/zh/Github/Github520.md"
        },
        {
          text: 'Vitepress搭建',
          link: '/zh/OS/vitepress-install'
        },
        {
          text: 'MySQL的安装和环境配置',
          link: '/zh/MySQL/MySQL-install'
        },
        ]
      },]
    },

    {
      text: '答案',
      items: [{
        text: '软件工程头歌答案',
        link: "/doc/answer/SoftwareEngineeringAnswers.md"
      },]
    },

    {
      text: '更多',
      items: [{
        text: '联系',
        items: [{
          text: 'Telegram群',
          link: 'https://t.me/+V6VofRqHk_k0ZDE9'
        },]
      }, {
        text: '工具',
        items: [{
          text: '代理工具&&推荐机场',
          link: 'https://re0xiaopa.github.io/ToolStore/'
        },]
      },
      {
        // 也可以省略标题
        text: '网站',
        items: [{
          text: '自仿AcFun(已私密)',
          link: 'https://re0xiaopa.github.io/acfun-Website-templates/'
        },
        {
          text: 'Steam(防小白迷路)',
          link: 'https://store.steampowered.com/join'
        }
        ]
      },
      {
        // 也可以省略标题
        text: '动漫',
        items: [{
          text: '次元城动漫发布页',
          link: 'https://www.cycity.pro/'
        },
        {
          text: '囧次元(日漫&弹幕)',
          link: 'https://jcypc.net/'
        },
        {
          text: 'omofun(官网复活啦)',
          link: 'https://lanerc.app/'
        },
        {
          text: 'MX动漫(国漫&日漫)',
          link: 'http://www.mxdm.tv/'
        },
        {
          text: 'FreeOK(动漫&追剧)',
          link: 'https://freeok.lol/'
        }
        ]
      },
      {
        // 也可以省略标题
        text: '影视',
        items: [{
          text: '瓜子影视(可百度搜)',
          link: 'https://www.gz99.co/'
        },
        {
          text: 'FreeOK(动漫&追剧)',
          link: 'https://freeok.lol/'
        }, {
          text: '追剧影视(动漫&追剧)',
          link: 'http://zjuys.com/'
        }
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


    socialLinks: [{
      icon: 'github',
      link: 'https://github.com/Re0XIAOPA'
    },
    {
      icon: {
        svg: '<svg t="1723368162546" class="icon" viewBox="0 0 1084 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2744" width="256" height="256"><path d="M896.43834 165.698h-62.34l54.57-54.57c23.43-23.37 23.43-70.17 0-93.54-23.37-23.37-70.17-23.37-93.54 0l-155.88 148.17H452.17034l-155.94-148.23c-23.43-23.37-70.17-23.37-93.54 0-23.37 23.43-23.43 70.17 0 93.54l54.57 54.57h-62.34A192.983 192.983 0 0 0 0.00934 360.607v420.899c0 116.97 85.71 202.68 194.91 202.68h693.75a192.983 192.983 0 0 0 194.85-194.85v-428.73c7.83-109.14-77.94-194.91-187.08-194.91z m54.63 615.809a69.869 69.869 0 0 1-70.17 70.17h-678.27a69.869 69.869 0 0 1-70.109-70.17v-413.13a69.869 69.869 0 0 1 70.17-70.17h678.21a69.869 69.869 0 0 1 70.17 70.17v413.19z m-608.039-342.96a69.869 69.869 0 0 0-70.23 70.17v70.17a69.869 69.869 0 0 0 70.17 70.17 69.869 69.869 0 0 0 70.23-70.17v-70.17a69.869 69.869 0 0 0-70.23-70.17z m405.36 0a69.869 69.869 0 0 0-70.23 70.17v70.17a69.869 69.869 0 0 0 70.17 70.17 69.869 69.869 0 0 0 70.23-70.17v-70.17a69.869 69.869 0 0 0-70.17-70.17z" p-id="2745"></path></svg>',
      },
      link: 'https://space.bilibili.com/438125945'
    },
    {
      icon: {
        svg: '<svg t="1725584777960" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7394" width="20" height="20"><path d="M170.666667 85.333333h682.666666a85.333333 85.333333 0 0 1 85.333334 85.333334v682.666666a85.333333 85.333333 0 0 1-85.333334 85.333334H170.666667a85.333333 85.333333 0 0 1-85.333334-85.333334V170.666667a85.333333 85.333333 0 0 1 85.333334-85.333334m85.333333 170.666667v170.666667h170.666667v85.333333H341.333333v256h85.333334v-85.333333h170.666666v85.333333h85.333334v-256h-85.333334v-85.333333h170.666667V256h-170.666667v170.666667h-170.666666V256H256z" fill="" p-id="7395"></path></svg>',
      },
      // <svg t="1725006535422" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10088" width="20" height="20"><path d="M406.186667 40.96c-3.413333-3.413333-6.826667-6.826667-13.653334-6.826667H17.066667c-13.653333 0-17.066667 6.826667-17.066667 17.066667v921.6c0 6.826667 6.826667 13.653333 13.653333 17.066667h3.413334c6.826667 0 13.653333-3.413333 17.066666-10.24l375.466667-921.6c0-6.826667 0-10.24-3.413333-17.066667zM512 351.573333c-3.413333-6.826667-10.24-10.24-17.066667-10.24s-17.066667 3.413333-17.066666 10.24l-170.666667 443.733334c-3.413333 6.826667 0 10.24 3.413333 17.066666s3.413333 6.826667 13.653334 6.826667h160.426666l64.853334 160.426667c3.413333 6.826667 10.24 10.24 17.066666 10.24H750.933333c6.826667 0 10.24-3.413333 13.653334-6.826667s3.413333-10.24 0-17.066667l-252.586667-614.4zM1006.933333 34.133333h-409.6c-6.826667 0-10.24 3.413333-13.653333 6.826667s-3.413333 10.24-3.413333 17.066667l409.6 921.6c3.413333 6.826667 10.24 10.24 17.066666 10.24h3.413334c6.826667 0 13.653333-10.24 13.653333-17.066667v-921.6c0-10.24-6.826667-17.066667-17.066667-17.066667z" fill="" p-id="10089"></path></svg>
      link: 'https://tavernce.awafuns.cn/'
    },
    ],
    footer: {
      copyright: 'Copyright © 2024 <a href="https://github.com/Re0XIAOPA" target="_blank" style="text-decoration: none;">爱吃饭的小Q</a>. All rights reserved',
    },

  },
})