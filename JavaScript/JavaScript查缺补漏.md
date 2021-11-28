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

