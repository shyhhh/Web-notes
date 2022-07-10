# JavaScript API 使用
## [window](https://developer.mozilla.org/zh-CN/docs/Web/API/Window)
1. window.location.search
   - **? 跳转 刷新** 包含一个URL中标识的 '?' 以及跟随其后的一串网页查询参数 [链接](https://developer.mozilla.org/zh-CN/docs/Web/API/Location/search)
2. window.location.hash
   - **# 不会刷新** 包含URL标识中的 '#' 和 后面URL片段标识符 [链接](https://developer.mozilla.org/zh-CN/docs/Web/API/Location/hash) 

## [Array](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)
1. concat() 连接两个或更多的数组，并返回数组
2. copyWithin() 从数组的指定位置拷贝元素到数组的另一个指定位置
   ```
      var a = ['a', 'b', 'c', 'd', 'e']
      a.copyWithin(0, 2, 3) // 在索引为 0 的这个位置， 从索引 2 到 3之间（不包括3的） 取索引 2 的位置，放到索引 0 的位置上替换之前的值 ['c', 'b', 'c', 'd', 'e']  这个a 也变了 
   ```
   copyWithin(1, 2, 4) 选中多个的话，他会依次替换原有数值
   ![copyWithin.png](https://i.loli.net/2021/12/02/za3BWVRnS5hJe2L.png)

3. every() 检测数值元素的每个元素是否都符合条件
4. fill() 使用一个固定值来全部填充数组
   ```
      var a = [0, 1, 2]
      a.fill(3)
      a // [3, 3, 3]

      var a = [0, 1, 2] 
      a.fill(3, 1)
      a // [0, 3, 3]
   ```
5. filter() 过滤
6. find() 返回符合传入测试（函数）条件的数组元素,从一堆对象里找出一堆对象, find()只找一个，filter可找多个
   ```js
   var a = [0, 1, 2] 
   a.find( (i) => i === 2 ) // 2
   var a = [{name:'a1',  {name: 'a2', value: 'xxx'}, {name: 'a3'}]
   a.find((item) => item.name === 'a2')  // {name: 'a2', value: 'xxx'}

   // 不用 find 
   for(let i = 0; i < a.length; i++){
      if(a[i].name === 'a2'){
         console.log(a[i])
      }
   }

   // find 和 filter 区别
   var a = [{name: 'a1', age: 80}, {name: 'a2', age: 18}, {name: 'a3', age: 18}]
   a.find(item => item.age === 18) // {name: 'a2', age: 18}
   a.filter(item => item.age === 18) // {name: 'a2', age: 18}, {name: 'a3', age: 18}
   ```
7. findIndex() 返回符合传入测试（函数）条件的数组元素索引
   
8. forEach() 数组每个元素都执行一次回调函数
9.  form() 通过给定的对象中创建一个数组 [MDN Array链接](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
   - Array.from 把不是数组的东西变成数组，常用于把伪数组（拥有数组的下标和length，没有数组的api）变成数组
   - ES5中 使用 `Array.prototype.splice.call(a, 0)` 把伪数组变成数组 这个a 是那个伪数组   
   - 以上 slice 做了这几件事
   ```js
      var a = { 0: '000',1: '111', 2: '222',length: 3}
      Array.prototype.splice.call(a, 0)
      // slice做了这几件事
      function slice(假数组){
         var b = []  // 这个可以写成 =>   var b = new Array()
         for(let i = 0; i < 假数组.length; i++){
            b[i] = 假数组[i]
         }
         return b
      }
   ```
   - ES6中 直接 a = Array.from(a) , from里面的 a 是伪数组
   - `Array.from({length: 5})`  它的意思是从一个没有任何下标的伪数组里弄出一个长度为5的数组
   ![伪数组.png](https://i.loli.net/2021/12/02/Mcr1NeUgLm25HiE.png)
   - 面试题 如何创建一个长度为 n 的数组，如果不用 new Array 该如何做？ 使用 Array.from 即可
     - 使用 new Array(5) 它的 bug 就是它没有下标，它会得到一个没有下标的数组，没有下标就无法 map 
     ![数组长度.png](https://i.loli.net/2021/12/02/XjWxkbFUdLh3Dmv.png)
     - map 不会去遍历那个不存在的下标的
     ![from.png](https://i.loli.net/2021/12/02/kV7cylnpv4RaXHO.png)
     - 创建一个长度为5的数组。`Array.from({length: 5})`, `Array.apply({length: 5})`
   - 面试题 请创建一个长度为 n ,但是每一项都是指定项的一个数组 => 请用一个函数创建 6 个 6
     - 如果写成这种函数就可以创建出来该如何做？n 几项， what 每一项填什么 => x(n, fill) x(6, 6) x(7, 7)  
      ```js
         // ES6
         function x(n, fill){
            return  Array.from({length: n}).map(v => fill )
            // 可以写成 return Array.from({length: n}.fill(fill))
         }

         // ES5
         function x(n, fill){
            return new Array(n+1).join(fill).split('')
         }
         // x(6, 6)
         // 首先创建一个长度为7的空数组 [_, _, _, _, _, _, _]
         // 然后空的和空的用 6 join 起来 [_,6 _,6 _,6 _,6 _,6 _,6 _]，于是得到6 个 6  [666666],最后 split 就会得到 ['6', '6', '6', '6', '6', '6']     
      ```
11. includes() 判断一个数组是否包含一个指定的值
12. indexOf() 搜索数组中的元素，并返回它所在的位置
13. isArr ay() 判断对象是否为数组
14. join() 把数组的所有元素放入一个字符串
15. keys() 返回数组的可迭代对象，包含原始数组的键（key）
16. lastIndexOf() 搜索数组中的元素，并返回它最后出现的位置
17. map() 通过指定函数处理数组的每个元素，并返回处理后的数
18. pop() 删除数组的最后一个元素并返回删除的元素  a.pop()
19. push() 向数组的末尾添加一个或更多的元素，并返回新的长度
20. reduce() 将数组元素计算为一个值（从左到右）
21. reverse() 反转数组的元素顺序
22. shift() 删除并返回数组的第一个元素
23. slice() 选取数组的一部分，并返回一个新数组
24. some() 检测数组元素中是否有元素符合指定条件
25. sort() 对数组的元素进行排序
26. splice() 从数组中添加或删除元素
27. toString() 把数组转换为字符串，并返回结果
28. unshift() 向数组的开头添加一个或更多元素，并返回新的长度
29. assign(a, b) 把b的值委派到a的上面，如果后面有，前面没有它会用后面的,后面的覆盖前面的,它的所有拷贝都是浅拷贝 
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
30. of() 创建一个具有可变数量参数的新数组实例，不考虑参数的数量或类型
   ![of.png](https://i.loli.net/2021/12/02/m6X4eyVUfwg5tMn.png)
31. entries() 一项一项的去读数组的 key 和 value
    ```
      var a = ['a', 'b', 'c', 'd']
      a.entries()  // 会得到一个可迭代对象
    ```
    ![entries.png](https://i.loli.net/2021/12/02/XvYUAsk3dmEN7oF.png)
   可迭代对象一项一项的遍历
32. keys 和 values 一样是可以把数组变成一个可迭代对象

注意: MDN中如果是 Array.xxx 就可以直接用，如果是 Array.prototype.xxx 既可以直接用也可以 数组.xxx ,前者存在数组函数中， 后者存在数组原型中   