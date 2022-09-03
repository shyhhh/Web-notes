/**
 * 手写一个冒泡排序
 * 选择第1个和第2个数字，如果第1个>第2个，二者交换位置（假设是升序排列）。
 * 之后选择第2个和第3个数字，类似交换处理。
 * 一轮下来后，最大的数字会“冒泡”到最后一位。
 * 接下来，忽略已经排好的数字，对于剩下的数字再来一轮
 * ...
 * 直到所有的数字都排列完成。
 */
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
}

let arr = [1, 34, 4, 43, 13, 43]

bubbleSort(arr)

console.log(arr)
