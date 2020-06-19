module.exports = {
  title: '鹤山市',
  description: '山东省立方',
  themeConfig: {
    nav: [
      {text: 'guide', link: '/guide/'}
    ],
    sidebar: {
      '/guide/': [
        {
          title: '想到',
          collapsable: false,
          children: [
            {
              title: '介绍',
              path: '/guide/'
            },
            {
              title: 'one1',
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
      ]
    }
  }
}
