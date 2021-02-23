# 数组

### 题目： 给定一个未排序的整数数组，找出其中没有出现的最小的正整数。
exam：
```js
// 例子1
输入: [1,2,0]
输出: 3

// 例子2
输入: [3,4,-1,1]
输出: 2

// 例子3
输入: [7,8,9,11,12]
输出: 1
```
> 你的算法的时间复杂度应为O(n)，并且只能使用常数级别的空间。
##### 思路
对给出的数组遍历，用数组中的值和对应数组中的位置大小进行比较，如果值小于位置的大小，那么把值作为索引去把此索引值对应的值和当前的值进行替换，目的为找出边界值，从而在再次循环中，去对比当前值和位置的大小，如果不相等,返回当前位置的大小，即为缺失的那个最小值。

##### 实现
```js
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
```






