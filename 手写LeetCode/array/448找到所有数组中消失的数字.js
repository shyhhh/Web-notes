var findDisappearedNumbers = function (nums) {
  let res = []
  let n = nums.length
  for (let num of nums) {
    let index = (num - 1) % n
    nums[index] += n
  }

  for (let [i, num] of nums.entries()) {
    if (num <= n) res.push(i + 1)
  }
  return res
};
