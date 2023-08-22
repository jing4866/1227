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
      { text: '技术世界', link: '/techblog/' },
      { text: '花花世界', link: '/dazzling/' },
      { text: '世界之外', link: '/blackhole/' }
    ],

    sidebar: {
      '/techblog/': [
        {
          text: '技术世界',
          base: '/techblog',
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
                  text: '你不知道的CSS01',
                  link: '/css/unknowcss01'
                },
                {
                  text: '你不知道的CSS02',
                  link: '/css/unknowcss02'
                }
              ] 
            },
            // 分类： JS
            {
              text: 'Javascript / ES6',
              link: '/javascript/',
              items: [
                {
                  text: 'JS 的那些报错信息.',
                  link: '/javascript/jsErrorType'
                },
                {
                  text: 'Object 真的是空对象吗？',
                  link: '/javascript/objIsEmpty'
                },
                {
                  text: 'JS 的 AO 和 GO 你造吗？',
                  link: '/javascript/objIsEmpty'
                }
              ] 
            },
            // 分类： Typescript
            {
              text: 'Typescript',
              link: '/typescript/'
            },
            // 分类： Vue
            {
              text: 'Vue2.0 / Vue3.0',
              link: '/javascript/'
            },
            // 分类： 深入学习
            {
              text: 'Tricks',
              link: '/trick/'
            }
          ]
        }
      ],
      '/dazzling/': {
        'base': '/dazzling',
        'items': [
          {
            'text': '花花世界',
            'link': '/index'
          }
        ]
      },
      '/blackhole/': {
        'base': '/blackhole',
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
  }
})



