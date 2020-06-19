## vuepress

### 配置示例一
```js
module.exports = {
  title: '鹤山市',
  description: '山东省立方',
  themeConfig: {
    nav: [
      {text: 'guide', link: '/guide/'}
    ],
    sidebar: [
      {
        title: '测试guide',
        collapsable: false, // 不折叠
        sidebarDepth: 1,  // h标题深度展示，1展示h2,2展示到h3
        // displayAllHeaders: true, // 全部展开
        children: [
          {
            title: '介绍',
            path: '/guide/'
          },
          {
            title: '测试1',
            path: '/guide/test1/'
          }
        ]

      }
    ]
  }
}
```

### 多个侧边栏

```js
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

```
