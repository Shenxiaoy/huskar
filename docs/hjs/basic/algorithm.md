# 算法
## 二分
### 二分查找
思路：
1) 从有序数组的中间元素开始搜素，如果该元素正好是目标元素，则搜索过程结束，否则进行下一步
2) 如果目标元素大于或小于中间元素，则在数组大于或小于中间元素的那一半区域进行查找，然后重复第一步
3) 如果某一步数组为空，则表示找不到指定元素
```js
function binarySearch(arr, target){
	let low = 0,high = arr.length - 1;
	while(low <= high){
		let middle = parseInt((low + high)/2);
		if(target === arr[middle]){
			return middle;
		}else if(target > arr[middle]){
			low = middle + 1;
		}else{
			high = middle - 1;
		}
	}
	return -1;
}
```


## 排序
### 冒泡排序
在双循环中，通过相邻两项对比，把数值大的一项一直替换到右边（索引大的一边），这样每一轮循环就把最大的值放到数组的最右边，下一次循环对剩下的数组再进行冒泡替换。
```js
function bubbleSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j+1]) {
        var temp = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(bubbleSort(arr));
```

### 插入排序
在对数组对比，把较小的数值放到最左边，遍历过程中，每个对比值插入到左边的所有值中从高位索引起进行对比，值小的话就插入到前一项中，直到数组最左边。
```js
function insertionSort(arr) {
  var len = arr.length;
  var preIndex, current;
  for (var i = 1; i < len; i++) {
    preIndex = i - 1;
    current = arr[i];
    while(preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex+1] = arr[preIndex];
      preIndex--;
    }
    arr[preIndex+1] = current;
  }
  return arr;
}
```

### 快速排序
```js
var quickSort = function(arr) {
　　if (arr.length <= 1) {//如果数组长度小于等于1无需判断直接返回即可
        return arr;
    }
　　var pivotIndex = Math.floor(arr.length / 2);//取基准点
　　var pivot = arr.splice(pivotIndex, 1)[0];//取基准点的值,splice(index,1)函数可以返回数组中被删除的那个数
　　var left = [];//存放比基准点小的数组
　　var right = [];//存放比基准点大的数组
　　for (var i = 0; i < arr.length; i++){ //遍历数组，进行判断分配
　　　　if (arr[i] < pivot) {
　　　　　　left.push(arr[i]);//比基准点小的放在左边数组
　　　　} else {
　　　　　　right.push(arr[i]);//比基准点大的放在右边数组
　　　　}
　　}
         //递归执行以上操作,对左右两个数组进行操作，直到数组长度为<=1；
　　return quickSort(left).concat([pivot], quickSort(right));
};
```