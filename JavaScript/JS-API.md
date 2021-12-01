# JavaScript API 使用
## [window](https://developer.mozilla.org/zh-CN/docs/Web/API/Window)
1. window.location.search
   - **? 跳转 刷新** 包含一个URL中标识的 '?' 以及跟随其后的一串网页查询参数 [链接](https://developer.mozilla.org/zh-CN/docs/Web/API/Location/search)
2. window.location.hash
   - **# 不会刷新** 包含URL标识中的 '#' 和 后面URL片段标识符 [链接](https://developer.mozilla.org/zh-CN/docs/Web/API/Location/hash) 

## [Array](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)
1. concat() 连接两个或更多的数组，并返回数组
2. copyWithin() 从数组的指定位置拷贝元素到数组的另一个指定位置
3. every() 检测数值元素的每个元素是否都符合条件
4. fill() 使用一个固定值来填充数组
5. filter() 过滤
6. find() 返回符合传入测试（函数）条件的数组元素
7. findIndex() 返回符合传入测试（函数）条件的数组元素
8. forEach() 数组每个元素都执行一次回调函数
9. form() 通过给定的对象中创建一个数组
10. includes() 判断一个数组是否包含一个指定的值
11. indexOf() 搜索数组中的元素，并返回它所在的位置
12. isArr ay() 判断对象是否为数组
13. join() 把数组的所有元素放入一个字符串
14. keys() 返回数组的可迭代对象，包含原始数组的键（key）
15. lastIndexOf() 搜索数组中的元素，并返回它最后出现的位置
16. map() 通过指定函数处理数组的每个元素，并返回处理后的数
17. pop() 删除数组的最后一个元素并返回删除的元素  a.pop()
18. push() 向数组的末尾添加一个或更多的元素，并返回新的长度
19. reduce() 将数组元素计算为一个值（从左到右）
20. reverse() 反转数组的元素顺序
21. shift() 删除并返回数组的第一个元素
22. slice() 选取数组的一部分，并返回一个新数组
23. some() 检测数组元素中是否有元素符合指定条件
24. sort() 对数组的元素进行排序
25. splice() 从数组中添加或删除元素
26. toString() 把数组转换为字符串，并返回结果
27. unshift() 向数组的开头添加一个或更多元素，并返回新的长度
28. assign(a, b) 把b的值委派到a的上面，如果后面有，前面没有它会用后面的,后面的覆盖前面的,它的所有拷贝都是浅拷贝 
    ```js
    var a = {a1: 1, a2: 2}
    var b = {b1: 1, b2: 2, b3: 3}

    Object.assign(a, b) //  打印出a => {a1: 1,a2: 2,b1: 1,b2: 2,b3: 3}
    
    var a = {a:1, b:2}
    var b = {a: '你'}
    var c = {a: '说', c1: 1, c2: 2}

    Object.assign(a, b) //  打印出a => {a: '你', b: 2}
    Object.assign(a, b, c) // 先把 b 的弄的 a 的上面来，在把 c 的弄到 a 的上面来 打印出 a => {a: '说', b: 2, c1: 1, c2: 2}
    ```
    因为 assign 是浅拷贝所以它有一个问题,改新的值的时候很容易改了旧的值（bug） 
    ```js
      var a = {a1: 'a', a2: 2}
      var b = {obj: {name: 'b'}} 

      Object.assign(a, b)

      a.obj.name = 'c'
      console.log(b.obj.name) // c
    ```
      [MDN assign](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
      toString()、__proto__ 不可枚举的属性
      不会跳过 值为 null 和 undefined 的源对象（依然会拷贝）
