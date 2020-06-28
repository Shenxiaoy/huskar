module.exports = {
  title: '鹤山市',
  description: 'rua rua ooo',
  themeConfig: {
    nav: [
      {text: 'guide', link: '/guide/'},
      {text: 'js关联', link: '/hjs/'}
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'gome-ui',
          collapsable: false,
          children: [
            {
              title: '介绍',
              path: '/guide/'
            },
            {
              title: '特色1',
              path: 'one'
            },
            {
              title: '测试1',
              path: '/guide/test1/'
            },
            // {
            //   title: 'sss444',
            //   path: '/guide/one/'
            // }
          ]
        },
        {
          title: '测试1',
          collapsable: false
        }
      ],
      '/hjs/': [
        {
          title: '基础',
          collapsable: false,
          children: [
            {
              title: '常用js-api',
              path: '/hjs/'
            },
            {
              title: '数组方法',
              path: '/hjs/basic/array'
            },
            {
              title: '字符串方法',
              path: '/hjs/basic/string'
            },
            {
              title: '深入理解',
              path: '/hjs/basic/depapi'
            }
          ]
        },
        {
          title: '随记',
          collapsable: false,
          children: [
            {
              title: '工作笔记',
              path: '/hjs/notes/'
            }
          ]
        }
      ]
    }
  }
}
