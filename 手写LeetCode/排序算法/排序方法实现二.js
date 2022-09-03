// 生成长度为n的随机数组成的数组
function randomArray(n) {
  var result = []
  for (var i = 0; i < n; i++) {
    result.push(Math.random() * n | 0)  // n 以内的随机数， ｜ 0 的意思是取整
  }
  return result
}

// 判断一个数组是不是升序(非递减)的
function isSorted(ary) {
  for (var i = 1; i < ary.length; i++) {
    if (ary[i] < ary[i - 1]) {
      return false
    }
  }
  return true
}


/**
 * 冒泡排序
 * 时间复杂度: O(n*n)
 * 空间复杂度: O(1)
 */
function bubbleSort(ary) {
  for (var stop = ary.length - 1; stop >= 1; stop--) {
    var 换过 = false
    for (var i = 0; i < stop; i++) {
      if (ary[i] > ary[i + 1]) {
        换过 = true
        var t = ary[i + 1]
        ary[i + 1] = ary[i]
        ary[i] = t
      }
    }
    if (!换过) {
      break
    }
  }
  return ary
}
  
/**
 * 选择排序
 * 时间复杂度: n*n
 * 空间复杂度: 1
 *
 */
function selectSort(ary) {

  // 起点最多只需到倒数第二个位置
  for (var start = 0; start < ary.length - 1; start++) {

    // 用来记录无序范围内最小元素的下标
    // 先假设起点元素是最小的
    var minIdx = start

    // 找从起点的下一位开始的最小元素的下标
    for (var i = start + 1; i < ary.length; i++) {
      if (ary[i] < ary[minIdx]) {
        minIdx = i
      }
    }

    // 把最小元素换到当前起点位置
    var t = ary[start]
    ary[start] = ary[minIdx]
    ary[minIdx] = t
  }

  return ary
}


/**
 * 插入排序
 * 时间复杂度: n*n
 * 空间复杂度: 1
 *
 */
function insertSort(ary) {
  // i指向无序部分的第一个
  for (var i = 1; i < ary.length; i++) {
    var value = ary[i]
    for (var j = i - 1; j >= 0; j--) {
      if (ary[j] > value) {
        ary[j + 1] = ary[j]
      } else {
        break
      }
    }
    ary[j + 1] = value
  }
  return ary
}

/**
 *
 * 归并排序
 * 时间复杂度: n*log(n)
 * 空间复杂度: n + log(n)
 */
function mergeSort(ary) {
  if (ary.length < 2) {
    return ary
  }
  // 拆分
  var mid = Math.floor(ary.length / 2)
  var left = ary.slice(0, mid)
  var right = ary.slice(mid)
  // 排序
  mergeSort(left)
  mergeSort(right)
  // 合并有序子数组
  var i = 0
  var j = 0
  var k = 0
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      ary[k] = left[i]
      k++
      i++
    } else {
      ary[k] = right[j]
      k++
      j++
    }
  }
  while (i < left.length) {
    ary[k] = left[i]
    k++
    i++
  }
  while (j < right.length) {
    ary[k] = right[j]
    k++
    j++
  }

  // 返回
  return ary
}

/**
 *
 * 快速排序简单版本
 * 时间复杂度: n*log(n)
 * 空间复杂度: n + log(n)
 */
function quickSort(ary) {
  if (ary.length < 2) {
    return ary.slice()
  }
  // 随机选数
  var num = ary.at(Math.random() * ary.length | 0)

  // 对原数组基于选择的数分组,小于它的,等于它的,大于它的分别在一组里
  var left = []
  var middle = []
  var right = []
  for (var i = 0; i < ary.length; i++) {
    if (ary[i] < num) {
      left.push(ary[i])
    } else if (ary[i] > num) {
      right.push(ary[i])
    } else if (ary[i] == num) {
      middle.push(ary[i])
    }
  }

  // 对第一组和第三组递归进行排序
  var sortedLeft = quickSort(left)
  var sortedRight = quickSort(right)
  // 拼接这三个数组并返回
  return sortedLeft.concat(middle, sortedRight)
}
