/**
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。
 * 如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
   请必须使用时间复杂度为 O(log n) 的算法。

  链接：https://leetcode.cn/problems/search-insert-position
 */
var searchInsert = function (nums, target) {
  if (target < nums[0]) {
    return 0
  } else if (target > nums[nums.length - 1]) {
    return nums.length
  } else {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === target) {
        return i
      } else if (nums[i] < target && nums[i + 1] > target) {
        return i + 1
      }
    }
  }
};
