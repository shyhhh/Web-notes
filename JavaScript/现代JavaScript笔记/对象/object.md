# 基础知识
- 列表中的最后一个属性应以**逗号**结尾,这叫做尾随（trailing）或悬挂（hanging）逗号。这样便于我们添加、删除和移动属性，因为所有的行都是相似的。
- 点符号要求 key 是有效的变量标识符。这意味着：不包含空格，不以数字开头，也不包含特殊字符（允许使用 $ 和 _）。使用方括号，可用于任何字符串`xxx.["1xxx ˚∆©ƒ≈œßå"]`
## 计算属性
```js
let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // 属性名是从 fruit 变量中得到的
};
```
## 属性值简写
用已存在的变量当做属性名。
```js
function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ……其他的属性
  };
}

function makeUser(name, age) {
  return {
    name, // 与 name: name 相同
    age,  // 与 age: age 相同
    // ...
  };
}
```
## 属性存在性测试，“in” 操作符
能够被访问任何属性。即使属性不存在也不会报错！
```js
let user = { name: "John", age: 30 };

alert( "age" in user ); // true，user.age 存在
alert( "blabla" in user ); // false，user.blabla 不存在。
```
那就是属性存在，但存储的值是 undefined 的时候：
```js
let user = { name: "John", age: 30 };

alert( "age" in user ); // true，user.age 存在
alert( "blabla" in user ); // false，user.blabla 不存在。
```
