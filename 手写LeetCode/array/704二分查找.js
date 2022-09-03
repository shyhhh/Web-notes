/**
 * 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target ，
 * 写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
  链接：https://leetcode.cn/problems/binary-search

  示例 1:

  输入: nums = [-1,0,3,5,9,12], target = 9
  输出: 4
  解释: 9 出现在 nums 中并且下标为 4
 */
// 解法1 [left, right]  左闭右闭区间
var search = function (nums, target) {
    // right是数组最后一个数的下标，num[right]在查找范围内，是左闭右闭区间
    let left = 0, right = nums.length - 1;
    // 当left=right时，由于nums[right]在查找范围内，所以要包括此情况
    while (left <= right) {
        let mid = left + Math.floor((right - left)/2);
        // 如果中间数大于目标值，要把中间数排除查找范围，所以右边界更新为mid-1；如果右边界更新为mid，那中间数还在下次查找范围内
        if (nums[mid] > target) {
            right = mid - 1;  // 去左面闭区间寻找
        } else if (nums[mid] < target) {
            left = mid + 1;   // 去右面闭区间寻找
        } else {
            return mid;
        }
    }
    return -1;
};

// 解法2 [left, right)
var search = function(nums, target) {
  // right是数组最后一个数的下标+1，nums[right]不在查找范围内，是左闭右开区间
  let left = 0, right = nums.length;
  // 当left=right时，由于nums[right]不在查找范围，所以不必包括此情况
  while (left < right) {
      let mid = left + Math.floor((right - left)/2);
      // 如果中间值大于目标值，中间值不应在下次查找的范围内，但中间值的前一个值应在；
      // 由于right本来就不在查找范围内，所以将右边界更新为中间值，如果更新右边界为mid-1则将中间值的前一个值也踢出了下次寻找范围
      if (nums[mid] > target) {
          right = mid;  // 去左区间寻找
      } else if (nums[mid] < target) {
          left = mid + 1;   // 去右区间寻找
      } else {
          return mid;
      }
  }
  return -1;
};
