# new Vue 发生了什么

1. 调用 Vue 方法，实例化 vue 对象，通过 Vue.prototype 挂在各种属性和方法
2. 调用内部 mixin 再 vue 上挂在一些方法属性
3. 调用 \_init 方法初始化
4. 初始化生命周期相关变量和属性，包括事件监听器和 render 函数 相关变量
5. 调用 beforeCreate 钩子函数
6. 初始化数据，包括 props、methods、data、computed 和 watch 等选项
7. 调用 created 钩子函数
8. 在整个 \_init 方法最后会调用$mount 方法。
9. 在$mount 会做一个转换，如果存在 template 选项，则将模板编译为渲染函数，否则直接将 render 选项作为渲染函数
10. 调用 beforeMount 钩子函数，在挂载之前执行。
11. 调用 render 方法。
12. 生成 vnode,调用 update 方法。
13. update 方法里再去调用 patch 方法
14. 将虚拟 DOM 转化为真实 DOM 并插入到页面中，完成挂载。
15. 调用 mounted 钩子函数，在挂载之后执行。


