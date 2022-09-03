// 第一种解法
var findDuplicates = function (nums) {
  let res = []
  for (let i = 0; i < nums.length; i++) {
    let index = Math.abs(nums[i]) - 1
    if (nums[index] < 0) {
      res.push(Math.abs(nums[i]))
    }
    nums[index] = -nums[index]
  }
  return res
}

// 第二种
var findDuplicates = function (nums) {
  let n = nums.length
  let res = []
  for (let num of nums) {
    nums[(num - 1) % n] += n
  }
  for (let i = 0; i < nums.length; i++) {
    if(nums[i] > 2 * n) {
      res.push(i + 1)
    }
  }
  return res
};
