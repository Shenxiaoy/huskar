
var firstMissingPositive = function (nums) {
  var len = nums.length;
  if (len <= 0) {
    return 1;
  }
  for (var i = 0; i < len; i++) {
    if (nums[i] > 0) {
      while(nums[i] < i + 1 && nums[i] != nums[nums[i] -1]) {
        var tempIndex = nums[i] - 1;
        var temp = nums[i];
        nums[i] = nums[tempIndex];
        nums[tempIndex] = temp;
      }
    }
  }

  for (var i = 0; i < len; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }

  return nums.length + 1;
};
console.log('=====+++', firstMissingPositive([5,6,7]))