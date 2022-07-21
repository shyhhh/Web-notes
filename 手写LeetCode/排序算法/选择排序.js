/**
 * 手写选择排序
 * 原理分析：
 * 第一轮；从数组中找到最小的数字，和第一个数字交换位置
 * 第二轮：从第二个数字开始，找到最小的数字，和第二个数字交换位置
 */
function sectionSort(arr) {
  for (let min = i = 0; i < arr.length /*i 代表轮数*/ ; i++) {
    // 第一轮 当 i = 0 时，我们认为 i = 0 的下标就是最小值
    min = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j
      }
    }
    [ arr[i], arr[min]] = [arr[min], arr[i] ] // 把每轮的第一个和当前轮的最小值互换位置
  }
}
