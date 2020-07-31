module.exports = {
  title: '笔记┉▓',
  description: 'rua rua ooo',
  base: '/doc/',
  themeConfig: {
    nav: [
      {text: 'guide', link: '/guide/'},
      {text: 'js关联', link: '/hjs/'},
      {text: 'css关联', link: '/hcss/'}
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'huskar',
          collapsable: false,
          children: [
            {
              title: '介绍',
              path: '/guide/'
            },
            // {
            //   title: '特色1',
            //   path: 'one'
            // },
            {
              title: '测试1',
              path: '/guide/test1/'
            },
            {
              title: '周四',
              path: '/guide/one'
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
            //   title: '字符串方法',
            //   path: '/hcss/basic/string'
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
