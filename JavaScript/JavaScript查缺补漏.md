# JavaScript查缺补漏

## 1. setTimeout()

```javascript
setTimeout() // 等一哈执行
setInterval() // 每隔一哈执行， 不建议使用， 不能灵活变通
// (1). 
let n = 0    
let step = ()=> {
  setTimeout( ()=> {
    console.log(n += 1)
  }, 1000)
}

step()
step()

// (2). 使用*递归*以下方法替代 setInterval(), 将会变得灵活
// 每隔1秒打印一次（+1）
let n = 0
let step = ()=> {
  setTimeout( ()=> {
    console.log(n += 1)
    step()
  }, 1000)
}

step()

// (3). 添加条件， 即可限定在一定的条件下  
let n = 0
let step = ()=> {
  setTimeout( ()=> {
    console.log(n += 1)
    n < 10 && step() 
  }, 1000)
}

step()  // 打印1～10

let n = 0
let step = ()=> {
  setTimeout( ()=> {
    if(n >= 10) {return} 
    console.log(n += 1)
    step()
  }, 1000)
}

step() // 打印1～10

```

## 2. String
### String API
`substring()` 方法返回一个字符串在开始索引到结束索引之间的一个子集, 或从开始索引直到字符串的末尾的一个子集。

`str.substring(indexStart[, indexEnd])`

[MDN解释](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/substring)

## 3. 使用 parcel 打开 
`yarn global add parcel`  使用 VSCode/WebStorm 的打开服务，会有缓存问题 

## 4. 所有的等于号的意思是 复制， JS 里面没有指针（C语言里的指针，在JS里是没有的，指针是可以动的，JS里没有可以动的指向内存的东西） 
eg: 
```js
  var a = 1
  var b = a
  b =  2
  console.log(a) // 1
```
代码解析:  1 **在 stack 区**，a = 1,意思是指让 1  与 a 关联; b = a, '='赋值的意思就是把 a 的东西**复制**给 b, a 指向了 1，那就把 1 复制一份并指向 b, 这两个 1 没有任何关系，此时 b = 2, 就把 2 对应的东西复制到 b ，把之前的1改成了2， 和 a 指向的那个 1，没有任何关系。
![图](https://i.loli.net/2021/12/01/Up8OnCbDSAd3oRH.png)
```js
  var a = {name: 'a'}
  var b = a
  b.name = 'b'
  console.name(a.name)
```
代码解析: 对象储存在heap(堆)区，把这个对象的地址放在stack(栈)里面，指向变量区的 a， 当 b = a时，在栈里面复制一份a的地址，然后指向b,当我改 b.name 的时候 a.name 也会变，因为他们是同一个地址，指向了对象
![对象拷贝.png](https://i.loli.net/2021/12/01/1TRguIHFz7nJZck.png)

## 5. 深拷贝和浅拷贝
**深拷贝**指两者之间没有任何交集，说的就是如果你要拷贝的话，除了 stack 内存拷贝，可不可以把我 heap 内存也拷贝出来，可以做到我改了b.name ，我 a.name 不受影响，这怎么可能呢？没错，对于大都数语言来说 **深拷贝 是不可能的**

```js
  var data = {d: '100mb'}
  window.fn = function(){
    return data
  }
```
假想的深拷贝
![假想的深拷贝](https://i.loli.net/2021/12/01/AmHh1t6YKdxeDlI.png)
以上情况不可能，因为我不知道我这个函数引用了 data（看代码就可以看出来啊？那我隐藏起来呢？）
```js
  var data = {d: '100mb'}
  window.fn = function(){
    xxxx // 我把data隐藏起来
  }
```
不看代码的话是根本不可能知道我引用了哪些内存的，故完美的深拷贝是不可能的，所能做到的是尽量看到一块内存就拷贝一块内存。\
完美深拷贝是不可能的，我们永远耶无法知道一个函数它用了哪些数据，除非去看它的源码，故所有的编程语言默认给的都是浅拷贝 \
**浅拷贝**   `b = a` 这就是一个浅拷贝，在stack中，把 a 上面的东西（不管啥 地址等等）直接拷贝给 b （复制）, 然后不管heap（堆）里面有什么 \
**深拷贝** 除了你这个地址之外，你里面的每一个内存我全部都要复制一遍，中间少了一个就不是完美的深拷贝了（你拷贝一个对象你会去看它的源代码吗？（不可能预测到别人的代码是咋写的） 不会，所以深拷贝不了，因为我不知道在别人把代码给我之前知道怎么去拷贝这个对象） \

## 6.函数
```js
  function fn(a, b) {
    return coonsole.log(a+b)
  }
```
一个函数当我去执行的时候，执行之后把 fn() 这个整体看成一个结果/值，这个值就是这个函数 return 的值， 没有写 return 这个函数就是 `return undefined` 