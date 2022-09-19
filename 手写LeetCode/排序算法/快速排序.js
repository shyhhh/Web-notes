/**
 * 手写快排
 * 1. 从数列中挑出一个元素，称为“基准”，
 * 重新排序数列，所有比基准值小的元素摆放在基准前面，所有比基准值大的元素摆在基准后面（相同的数可以到任何一边）。
 * 在这个分区结束之后，该基准就处于数列的中间位置。这个称为分区（partition）操作。
 * 递归地（recursively）把小于基准值元素的子数列和大于基准值元素的子数列排序。
 * 递归到最底部时，数列的大小是零或一，也就是已经排序好了。这个算法一定会结束，因为在每次的迭代（iteration）中，它至少会把一个元素摆到它最后的位置去。
 */
// 此方法过不了 力扣的 912 题
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr
  }
  let leftArr = []
  let rightArr = []
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] >= arr[0]) {
      rightArr.push(arr[i])
    } else {
      leftArr.push(arr[i])
    }
  }
  return quickSort(leftArr).concat(arr[0]).concat(quickSort(rightArr))
}

let arr = [10, 34, 21, 47, 3, 28]
quickSort(arr)
console.log(arr)
