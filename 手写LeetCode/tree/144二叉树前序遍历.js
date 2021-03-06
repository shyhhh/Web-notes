
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  const result = []

  const preorder = (root)=>{
    if(!root) return
    const stack = [root]

    while(stack.length){
      const n = stack.pop()
      result.push(n.val)
      if(n.right) stack.push(n.right)
      if(n.left) stack.push(n.left)
    }
  }
  preorder(root)
  return result
}



// εεΊιε

const x = (root) =>{
  if(!root) return

  console.log(root.val)
  x(root.left)
  x(root.right)
}


const preorderTraversal = (root) =>{
    const result = []
    const x = (root)=>{
      const stack = [root]

      while(stack.length){
        const n = stack.pop()
        result.push(n.val)
        if(n.right) stack.push(n.right)
        if(n.left) stack.push(n.left)
      }
    }
    x(root)
    return result
}
