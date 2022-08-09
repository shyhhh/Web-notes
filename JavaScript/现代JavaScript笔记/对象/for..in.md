# for...in
为了遍历一个对象的所有键（key），可以使用一个特殊形式的循环：for..in。
```js
for (key in object) {
  // 对此对象属性中的每个键执行的代码
}
```
```js
let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  // keys
  alert( key );  // name, age, isAdmin
  // 属性键的值
  alert( user[key] ); // John, 30, true
}
```
## 像对象一样排序
“有特别的顺序”：整数属性会被进行排序，其他属性则按照创建的顺序显示。

为了解决电话号码的问题，我们可以使用非整数属性名来 欺骗 程序。只需要给每个键名加一个加号 "+" 前缀就行了。
## 总结
对象是具有一些特殊特性的关联数组。

它们存储属性（键值对），其中：

- 属性的键必须是字符串或者 symbol（通常是字符串）。
- 值可以是任何类型。
我们可以用下面的方法访问属性：

- 点符号: obj.property。
- 方括号 obj["property"]，方括号允许从变量中获取键，例如 obj[varWithKey]。
其他操作：

- 删除属性：`delete obj.prop`。
- 检查是否存在给定键的属性：`"key" in obj`。
- 遍历对象：`for(let key in obj)` 循环。

# 对象引用和复制
- 赋值了对象的变量存储的不是对象本身，而是该对象“在内存中的地址” —— 换句话说就是对该对象的“引用”。

- 当一个对象变量被复制 —— 引用被复制，而该对象自身并没有被复制。
## 克隆与合并，Object.assign
```js
let user = {
  name: "John",
  age: 30
};

let clone = {}; // 新的空对象

// 将 user 中所有的属性拷贝到其中
for (let key in user) {
  clone[key] = user[key];
}

// 现在 clone 是带有相同内容的完全独立的对象
clone.name = "Pete"; // 改变了其中的数据

alert( user.name ); // 原来的对象中的 name 属性依然是 John
```
我们也可以使用 `Object.assign` 方法来达成同样的效果。
```js
Object.assign(dest, [src1, src2, src3...])
```
- 第一个参数 dest 是指目标对象。
- 更后面的参数 src1, ..., srcN（可按需传递多个参数）是源对象。
- 该方法将所有源对象的属性拷贝到目标对象 dest 中。换句话说，从第二个开始的所有参数的属性都被拷贝到第一个参数的对象中。
- 调用结果返回 dest。
```js
let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// 将 permissions1 和 permissions2 中的所有属性都拷贝到 user 中
Object.assign(user, permissions1, permissions2);
```
如果被拷贝的属性的属性名已经存在，那么它会被覆盖

我们也可以用 Object.assign 代替 for..in 循环来进行简单克隆：
```js
let user = {
  name: "John",
  age: 30
};

let clone = Object.assign({}, user);
```
## 深层克隆
 lodash 库的 _.cloneDeep(obj)。
```js
var objects = [{ 'a': 1 }, { 'b': 2 }];

var deep = _.cloneDeep(objects);
console.log(deep[0] === objects[0]);
```
使用 const 声明的对象也是可以被修改的
```js
const user = {
  name: "John"
};

user.name = "Pete"; // (*)

alert(user.name); // Pete
```
## 总结
对象通过引用被赋值和拷贝。换句话说，一个变量存储的不是“对象的值”，而是一个对值的“引用”（内存地址）。因此，拷贝此类变量或将其作为函数参数传递时，所拷贝的是引用，而不是对象本身。

所有通过被拷贝的引用的操作（如添加、删除属性）都作用在同一个对象上。

为了创建“真正的拷贝”（一个克隆），我们可以使用 Object.assign 来做所谓的“浅拷贝”（嵌套对象被通过引用进行拷贝）或者使用“深拷贝”函数，例如 _.cloneDeep(obj)。

# 垃圾回收
## 可达性（Reachability）
“可达”值是那些以某种方式可访问或可用的值。它们一定是存储在内存中的。

这里列出固有的可达值的基本集合，这些值明显不能被释放。

比方说：

- 当前执行的函数，它的局部变量和参数。
- 当前嵌套调用链上的其他函数、它们的局部变量和参数。
- 全局变量。
- （还有一些内部的）
这些值被称作 根（roots）。

如果一个值可以通过引用链从根访问任何其他值，则认为该值是可达的。

比方说，如果全局变量中有一个对象，并且该对象有一个属性引用了另一个对象，则**该 **对象被认为是可达的。而且它引用的内容也是可达的。下面是详细的例子。
## 总结
- 垃圾回收是自动完成的，我们不能强制执行或是阻止执行。
- 当对象是可达状态时，它一定是存在于内存中的。
- 被引用与可访问（从一个根）不同：一组相互连接的对象可能整体都不可达，正如我们在上面的例子中看到的那样。
