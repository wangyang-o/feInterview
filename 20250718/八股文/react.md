

1. react hooks 原理（背景，原理）

背景/目的：解决逻辑复用，解决class组件绑定this等问题，让函数组件拥有状态和副作用能力
原理：其核心原理是基于js 的闭包和函数式编程的思想，通过维护一个链表来存储和管理Hook 状态。hook的信息会伴随组件的创建和销毁一起创建和销毁。整个dom是一个fiber 树。每个组件的hooks的信息就在fiber节点上。


2. 说一说 react fiber（原因/背景，导致的问题，如何解决）

3. 合成事件机制（原因，如何解决）

4. useEffect 和 useLayoutEffect 的区别及使用场景

