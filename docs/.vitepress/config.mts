import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/1227/',
  title: "十二廿柒.",  // Header's Logo Title
  description: "世界之外，无界之境。",
  cleanUrls: true,
  head: [
    [
      'link', 
      { rel: 'icon', href: '/favicon.ico' }
    ]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    nav: [
      // { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
      { text: '首页', link: '/' },
      { text: '技术世界', link: '/views/techblog/' },
      { text: '花花世界', link: '/views/dazzling/' },
      { text: '世界之外', link: '/views/blackhole/' }
    ],

    sidebar: {
      '/views/techblog/': [
        {
          text: '技术世界',
          base: '/views/techblog',
          items: [
            // 分类： HTML 
            {
              text: 'HTML / HTML5',
              collapsed: false,
              link: '/html/'
            },
            // 分类： CSS
            {
              text: 'CSS / CSS3.0',
              link: '/css/',
              items: [
                {
                  text: '纯 CSS 创造的世界',
                  link: '/css/csscreateworld'
                },
                {
                  text: 'CSS 之 blend-mode',
                  link: '/css/mixBlendMode'
                }
              ] 
            },
            // 分类： JS
            {
              text: 'JavaScript',
              link: '/javascript/',
              items: [
                {
                  text: 'JS 常见报错信息.',
                  link: '/javascript/jsErrorType'
                },
                {
                  text: 'Object 真的是空对象吗？',
                  link: '/javascript/objIsEmpty'
                },
                {
                  text: 'IIFE 如何提升性能.',
                  link: '/javascript/IIFE'
                },
                {
                  text: 'JS 的 AO 和 GO 你造吗？',
                  link: ''
                },
                {
                  text: '那些基础的面试题',
                  link: '/javascript/basejs'
                },
                {
                  text: '那些变态的面试题',
                  link: '/javascript/interview'
                }
              ] 
            },
            {
              text: 'ES6 / ES7 / ES8...',
              link: '/es/',
            },
            // 分类： Typescript
            {
              text: 'TypeScript',
              link: '/typescript/'
            },
            // 分类： Vue
            {
              text: 'Vue2.0',
              link: '/v2/'
            },
            // 分类： Vue
            {
              text: ' Vue3.0',
              link: '/v3/'
            },
            // 分类： 深入学习
            {
              text: 'Tricks',
              link: '/trick/',
              items: [
                {
                  text: '前端的一些小技巧 01',
                  link: '/trick/tricks'
                }
              ]
            }
          ]
        }
      ],
      '/views/dazzling/': {
        'base': '/views/dazzling',
        'items': [
          {
            'text': '花花世界',
            'link': '/index'
          }
        ]
      },
      '/views/blackhole/': {
        'base': '/views/blackhole',
        'items': [
          {
            'text': '世界之外',
            'link': '/index'
          }
        ]
      }
    }


    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  },
  markdown: {
    lineNumbers: true // JS代码块显示行号
  }
})



