# vue3
[源码](https://github.com/vuejs/vue-next)

### v-model
1) 一个自定义组件上支持多 v-model； [文档](https://v3.cn.vuejs.org/guide/component-custom-events.html#v-model-%E5%8F%82%E6%95%B0)
```js
<ChildComponent v-model:title="pageTitle" v-model:content="pageContent" />

<!-- 是以下的简写： -->

<ChildComponent
  :title="pageTitle"
  @update:title="pageTitle = $event"
  :content="pageContent"
  @update:content="pageContent = $event"
/>
```
对于所有不带参数的 v-model，请确保分别将 prop 和 event 命名更改为 modelValue 和 update:modelValue
```js
// ChildComponent.vue

export default {
  props: {
    modelValue: String // 以前是`value：String`
  },
  emits: ['update:modelValue'],
  methods: {
    changePageTitle(title) {
      this.$emit('update:modelValue', title) // 以前是 `this.$emit('input', title)`
    }
  }
}
```
exam:
```js
<custom-input v-model="searchText"></custom-input>

app.component('custom-input', {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  template: `
    <input v-model="value">
  `,
  computed: {
    value: {
      get() {
        return this.modelValue
      },
      set(value) { this.$emit('update:modelValue', value)
      }
    }
  }
})
```
2) 自定义 v-model修饰符，自定义的修饰符会在组件中props中 <code>modelModifiers</code>中体现出来
```html
<div id="app">
  <my-component v-model.capitalize="myText"></my-component>
  {{ myText }}
</div>
```
```js
const app = Vue.createApp({
  data() {
    return {
      myText: ''
    }
  }
})

app.component('my-component', {
  props: {
    modelValue: String,
    modelModifiers: {
      default: () => ({})
    }
  },
  emits: ['update:modelValue'],
  methods: {
    emitValue(e) {
      let value = e.target.value
      if (this.modelModifiers.capitalize) {
        value = value.charAt(0).toUpperCase() + value.slice(1)
      }
      this.$emit('update:modelValue', value)
    }
  },
  template: `<input
    type="text"
    :value="modelValue"
    @input="emitValue">`
})

app.mount('#app')
```
> 对于带参数的 v-model 绑定，生成的 prop 名称将为 arg + "Modifiers"

### 自定义监听事件
用于实现删掉的 $one、$off、$once的功能实现
```js
// eventHub.js
const eventHub = new Vue()
export default eventHub

// ChildComponent.vue
import eventHub from './eventHub'
export default {
  mounted() {
    // 添加 eventHub 监听器
    eventHub.$on('custom-event', () => {
      console.log('Custom event triggered!')
    })
  },
  beforeDestroy() {
    // 移除 eventHub 监听器
    eventHub.$off('custom-event')
  }
}

// ParentComponent.vue
import eventHub from './eventHub'
export default {
  methods: {
    callGlobalCustomEvent() {
      eventHub.$emit('custom-event') // 当 ChildComponent 被挂载，控制台中将显示一条消息
    }
  }
}
```

### 自定义元素组件
```js
<!-- 不正确，不会渲染任何内容 -->
<tr v-is="blog-post-row"></tr>

<!-- 正确 -->
<tr v-is="'blog-post-row'"></tr>
```

### 指令的变化
```js
const MyDirective = {
  beforeMount(el, binding, vnode, prevVnode) {},  // 对应v2中的bind
  mounted() {},  // 对应inserted
  beforeUpdate() {}, // 新
  updated() {},   // componentUpdated
  beforeUnmount() {}, // 新
  unmounted() {}  // unbind
}
```
exam:
```html
<p v-highlight="'yellow'">高亮显示此文本亮黄色</p>
```
```js
const app = Vue.createApp({})

app.directive('highlight', {
  beforeMount(el, binding, vnode) {
    el.style.background = binding.value
  }
})
```

### 异步组件 实现组件懒加载
```js
import { defineAsyncComponent } from 'vue'
import ErrorComponent from './components/ErrorComponent.vue'
import LoadingComponent from './components/LoadingComponent.vue'

// 不带选项的异步组件
const asyncPage = defineAsyncComponent(() => import('./NextPage.vue'))

// 带选项的异步组件
const asyncPageWithOptions = defineAsyncComponent({
  loader: () => import('./NextPage.vue'),
  delay: 200,
  timeout: 3000,
  errorComponent: ErrorComponent,
  loadingComponent: LoadingComponent
})
```


## vue3 diff
在响应数据发生变化事，触发对应的dep依赖watcher，最后引起render渲染，触发新旧vnode的diff，根据diff的结果去对真实dom的添加、删除、移动等操作。

先通过设置静态标记做初步筛选，对无更改的静态dom做静态提升，筛选出需要比对的dom节点。

diff算法核心也就是真正发挥作用的地方是在新旧VNode有多个children的时候。

### 新旧子节点对比
1) 对于不存在key值得情况，对新旧children长度进行比对，对多余的节点进行删除或添加；如果老节点长度大于新节点，删除多出来的节点，如果新的节点长度大于老节点的数量，添加多出的检点；对于公共部分进行patch一一比对，进行dom的删除、替换等操作。
2) 对于存在key值得情况，对新旧子节点两端进行对比，就是children节点队列前后缀比对，找到节点不同的的索引节点，从而决定操作dom的起止点；如果有一边节点全部比对完，那么直接对多出的节点部分进行添加删除。
3) 新旧节点没有比对完，而出现了节点不同的情况，那么接下来就是对剩下不同的节点进行处理比对，这样是diff最核心的比对部分；
4) 遍历剩下需要比对的新vnode，把具有key值得节点的key和其节点对应的下标以键值对形式存入对象，然后在创建一个数组，值全部为0，长度为遍历新vnode的长度；
5) 然后再遍历需要比对的旧vnode节点，如果节点上key存在，从上一步key、下标生成的对象中找出要移动的节点下标newIndex；然后在上步中创建的数组中，以新节点的下标在数组中的位置为下标，存入旧节点的索引下标；也就是把0改为旧节点的索引；如果节点上key不同，只能在新对应节点中patch比对查找newIndex；如果没有找到删除点前节点；
6) 根据存入索引的数组，如果有值为0，说明没有旧节点在新节点队列中的对应，创建其一个新节点；然后生成一个最长上升子序列，对其他未在稳定序列的节点进行统一移动插入操作。

> 文章参考——[渲染器](http://hcysun.me/vue-design/zh/essence-of-comp.html#%E7%BB%84%E4%BB%B6%E7%9A%84%E4%BA%A7%E5%87%BA%E6%98%AF%E4%BB%80%E4%B9%88)，介绍了虚拟dom的结构、生成、渲染等内容。


## 响应式系统
通过proxy 对响应对象进行代理，在处理代理过程中需注意的几点
- 代理嵌套对象，在get中判断get value是否是对象，从而对获取的嵌套对象值进行懒代理
- 数组的修改包括索引值的修改的和数组长度的变化，会触发两次set，通过判断key是否存在判断是否是新增而进行优化。
- 对同一对象重复代理的兼容，通过 WeakMap实例存储 对象和代理对象的映射，从而判断是否是已代理过的对象。

> 依赖收集，在渲染器对模板解析的过程中，对响应数据解析触发器代理的get方法，添加dep实例类存储watcher监听器，watcher中包含了传入其中的虚拟dom、组件实例，回调等，这样，在下一次触发响应式数据时，就能找到对应存储的依赖，从而去遍历deps中的watchers，触发update方法，进行diff对比、render等流程的处理。[代码参考](https://ld246.com/article/1571125135432)

### reactive

### ref

### toRef

### toRefs

### effect
effect 的作用主要是在响应式数据处理的过程进行依赖的收集，然后在数据更新的时候触发依赖。
- effect对入参fn进行属性添加等改造后生成依赖项，存入依赖队列中，在set后对依赖的队列进行遍历执行。
- [参考1](https://blog.csdn.net/qq_29582173/article/details/109851515)
- [参考2](https://github.com/cangshudada/vue3.0-reactivity-analyze) ***
- 源码在reactivity/effect.ts

简单来描述：
1) 把effect中入参回调加工处理，给回调添加很多配置参数，如id、active、isEffect、deps等，然后传全局变量activeEffect,方便下一步处理；
2) effect中回调函数中涉及到响应数据，我们称此回调为响应数据处理副作用，涉及到响应数据，就会触发代理中的get方法，在get中，会调用track方法，进行副作用依赖的收集。在track中，通过WeakMap存储响应对象及对象key值通过map、set数据结构去存储副作用回调，也就是存储的activeEffect。
3) 那么在触发响应数据set方法，调用了trigger函数，目的就是获取此响应数据对应的依赖，然后执行，保证数据的同步。


### computed
1) 在computed上定义了一个get方法，返回的value值则是 effect副作用的调用。对effect options传入了 两个参数，一个是lazy：true，表示懒加载，不立即执行其副作用依赖；另一个参数为scheduler回调，回调中会把dirty 赋值为true；在响应数据set的时候，会调用scheduler，这样就会重新调用effect依赖，进行重新计算；不过没有响应数据set，那么还是取缓存的值。之所以感觉到比较绕，是computed是使用effec做响应处理，为达到目的，通过配置参数兼容整个effect去实现。
2) 其中涉及到的一些细节，比如在通过dirty判断是否重新计算时，在get回调和scheduler中，又调用了track和trigger，这样减少了对应的依赖获取 判断的步骤。

### watch

### watchEffect



#### 自定义 loader 用户实现css隔离
项目中新建一个loader.js，例如下面例子在根目录中新建 <code>preloader.js</code>
```js
const getOptions = require("loader-utils").getOptions
module.exports = function loader(source) {
  const options = getOptions(this)
  console.log(options, "start")  // options 则是在此loader下配置参数
  return source
}

```

在vue/cli 配置中引入自定义的loader，目的是匹配所有的src/下所有 .vue文件,并把style 中的样式类名统一添加前缀
```js
  chainWebpack: config => {
    config.module
      .rule("vue")
      .test(/\.vue$/)
      .use("vue-loader")
      .loader("vue-loader")
      .end()
      .use(path.resolve("./preloader.js"))
      .loader(path.resolve("./preloader.js"))
      .end()
    config.resolve.alias
      .set("@", resolve("./src"))
      .set("API", resolve("./src/api/index.js"))
  },
```
##### 使用 loader-utils 获取loader的配置项，进行动态loader配置化
```js
// vue.cofig.js
...
...
.use(path.resolve("./preloader.js"))
.tap(() => {
  return { type: 333 }
})
.loader(path.resolve("./preloader.js"))
.end()

```
- [参考文档](https://www.webpackjs.com/contribute/writing-a-loader/)

##### 插件
- https://www.webpackjs.com/api/plugins/#tapable


### 添加jest单元测试
> 参考 vue test utils [官方文档](https://vue-test-utils.vuejs.org/zh/api/wrapper/#emittedbyorder)

一个vue组件的单元测试例子
```js
/**
 * @ shallowMount : 只考虑组件本身元素的渲染，不包括子组件的渲染；
 * @ mount：与 shallowMount相反，会渲染包括子组件深度渲染解析到html文档元素上
 */
import { shallowMount, mount, createLocalVue } from "@vue/test-utils"
import Search from "@/components/pageModule/search/index.vue"
import Router from "vue-router"
import ElementUI from "element-ui"
const localVue = createLocalVue()
localVue.use(Router)
localVue.use(ElementUI)

const searchForm1 = {
  gInput: {
    name: "输入框",
    widget: "g-input"
  }
}
describe("pageModule search of module", () => {
  it("配置的查询表单组件是否加载成功", () => {
    const wrapper = mount(Search, {
      propsData: { searchForm: searchForm1 },
      localVue
    })
    // expect(wrapper.exists()).toBe(true)
    const dom = wrapper.find("input")
    expect(dom.classes()).toContain("el-input__inner")
  })
})

```


