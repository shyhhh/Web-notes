# DOM封装步骤详解
源码： [链接](https://github.com/shyhhh/dom-1/blob/main/src/dom.js)

## 增
```js
// 1.开始
window.dom = {}
dom.create = function(){}

// 优化
window.dom = {
  create = function(){}
}

// 优化
window.dom = {
  create: function(){}
}

// 最终优化
window.dom = {
  create(){}
}

// 2. 创建 create
// 在dom.js中
window.dom = {
  create(tagName){
    return document.createElement('tagName')
  }
}
// main.js 使用
dom.create('div')


// 3. 插入简化
(1) 通过字符串方法，有一个bug， 因为这个容器是 div, 那么 td 是无法放入 div 的
window.dom = {
  create(string){
    const container =  document.createElement('div')
    container.innerHTML = string
    return container.children[0]
  }
}
(2) 哪个标签是可以用任意元素而不会出错的？   template 
window.dom = {
  create(string){
    const container =  document.createElement('template')
    container.innerHTML = string.trim()
    return container.content.firstChild
  }
}

// main.js 使用
const div = dom.create('<td>hone</td>') 

// 4. 节点前后插入
window.dom = {
  after(node, node2){
    node.parentNode.insertBefore(node2, node.nextSibling)
  }，
  before(node, node2){
    node.parentNode.insertBefore(node2, node)
  }
} 

// 5. parentNode 里插入 node
window.dom = {
  append(parent, node){
    parent.appendChild(node2, node.nextSibling)
  }
} 
// 6. 用于新增父级节点  
window.dom = {
  wrap(node, parent){
    dom.before(node, parent)
    dom.append(parent, node)
  }
} 
```
## 删
```js
window.dom = {
  remove(node){
    node.parentNode.removeChild(node)
    return node // 返回移除的对象 
  },

  // 删除后代
  empty(node){
    const {childNodes} = node // 从 node 里获取 childNodes
    const array = []
    // 这里用 for 有一个坑, length 是随着 remove 时时变化的
    // for(let i = 0; i < childNodes.length; i++){
    //   dom.remove(childNodes[i])
    //   array.push(childNodes[i])
    // }
    // return array
    
    let x  = node.firstChild
    while(x){
      array.push(dom.remove(node.firstChild))
      x = node.firstChild
    }
    return array
  }
} 
```
## 改
```js
window.dom = {
  attr(node, name, value){ // 重载
    if(arguments.length === 3) {
      node.setAttribute(name, value)
    } else if(arguments.length === 2) {
      return node.getAttribute(name)
    }
  },
  text(node, string) {
    if(arguments.length === 2){
      if('innerText' in node){
        node.innerText = string 
      } else {
        node.textContent = string
      }
    } else if(arguments.length === 1) {
      if('innerText' in node){
        return node.innerText
      } else {
        return node.textContent
      }
    }
  },
  html(node, string){
    if(arguments.length === 2){
      node.innerHTML = string
    }else if(arguments.length === 1){
      return node.innerHTM
    }
  },
  style(node, name, value){
    if(arguments.length === 3){
      // node.style(div, 'color', 'red')
      node.style[name] = value
    }else if( arguments.length === 2){
      if(typeof name === 'string'){
        // node.style(color)
        return node.style.[name]
      } else if(name instanceof Object) {
        // node.style(div, {color: 'red'})
        for(let key in name){
          const object = name
          node.style[key] = object.key
        }
      }
    }
  },

} 
```