/**
 * 手写插入排序
 * 原理分析：
 * 1.从第一个元素开始，该元素可以认为已经被排序
 * 2.取出下一个元素，在已经排序的元素序列中从后向前扫描
 * 3.把取出的元素放到已排序的元素中间的合适位置
 * 4.重复步骤 2～3
 */
 for(let i = 1; i < arr.length; i++) { // 认为第一个已经是排序好的，于是从 i = 1 开始
  for(let j = 0; j < i; j++) {
    if(arr[i] < arr[j]) {
      arr.splice(j, 0, arr[i])
      arr.splice(i+1, 1)
      break
    }
  }
}

// eg:

let isArray = [1, 34, 23, 25, 3, 6]

// i = 2, j = 1 时
isArray.splice(j, 0, isArray[i])  //  [1, 23, 34, 23, 25, 3, 6]
isArray.splice(i + 1, 1)  //  [1, 23, 34, 25, 3, 6]
