module.exports = {
  title: '笔记┉▓',
  description: '前端笔记 JavaScript css',
  head: [
    ['link', { rel: 'icon', href: '/bike.png' }]
  ],
  base: '/doc/',
  themeConfig: {
    nav: [
      { text: 'guide', link: '/guide/' },
      { text: 'js关联', link: '/hjs/' },
      { text: 'css关联', link: '/hcss/' }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'huskar',
          collapsable: false,
          children: [
            {
              title: '哈斯卡',
              path: '/guide/'
            },
            {
              title: '性能优化',
              path: '/guide/performance/'
            },
            {
              title: 'node应用',
              path: '/guide/node/'
            },
            {
              title: 'interview',
              path: '/guide/interview/basic'
            }
          ]
        },
        {
          title: '动画',
          collapsable: false,
          children: [
            {
              title: '3d动画',
              path: '/guide/animation/3d'
            }
          ]
        },
        {
          title: '服务端',
          collapsable: false,
          children: [
            {
              title: 'nginx',
              path: '/guide/server/nginx'
            }
          ]
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
              title: '算法',
              path: '/hjs/basic/algorithm'
            },
            {
              title: '深入理解',
              path: '/hjs/basic/depapi'
            },
            {
              title: '对象方法',
              path: '/hjs/basic/object'
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
            },
            {
              title: '公式',
              path: '/hjs/notes/math/formula'
            },
            {
              title: '动效动画',
              path: '/hjs/animation/'
            }
          ]
        }
      ],
      '/hcss/': [
        {
          title: '基础',
          collapsable: false,
          children: [
            {
              title: '常用api',
              path: '/hcss/'
            },
            {
              title: '布局',
              path: '/hcss/basic/layout'
            },
            // {
            //   title: 'grid布局',
            //   path: '/hcss/grid/'
            // },
            // {
            //   title: '深入理解',
            //   path: '/hcss/basic/depapi'
            // }
          ]
        },
        {
          title: '随记',
          collapsable: false,
          children: [
            {
              title: '工作笔记',
              path: '/hcss/notes/'
            }
          ]
        }
      ]
    }
  }
}
