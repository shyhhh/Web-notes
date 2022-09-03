/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
  let n = nums.length;
  let res = new Array(n).fill(0);
  let i = 0, j = n - 1, k = n - 1;
  while (i <= j) {
      let left = nums[i] * nums[i],
          right = nums[j] * nums[j];
      if (left < right) {
          res[k--] = right;
          j--;
      } else {
          res[k--] = left;
          i++;
      }
  }
  return res;
};
