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

### 二叉树 二叉搜索树
二叉搜索树特点：
- 若任意节点的左子树不空，则左子树上所有节点的值均小于它的根节点的值；
- 若任意节点的右子树不空，则右子树上所有节点的值均大于它的根节点的值;
- 任意节点的左、右子树也需要满足左边小右边大的性质;

```js
class BinaryTreeNode {
  constructor(key, value) {
    // 指向父节点
    this.p = null;
    // 左节点
    this.left = null;
    // 右节点
    this.right = null;
    // 键
    this.key = key;
    // 值
    this.value = value;
  }
}
class BinaryTree {
  constructor() {
    this.root = null;
  }
  static createNode(key, value) {
    return new BinaryTreeNode(key, value);
  }
  search(key) {
    let p = this.root;
    if (!p) {
      return;
    }
    while (p && p.key !== key) {
      if (p.key < key) {
        p = p.right;
      } else {
        p = p.left;
      }
    }
    return p;
  }
  // 插入
  insert(node) {
    // 尾指针的父节点指针
    let p = this.root;
    // 尾指针
    let tail = this.root;
    while (tail) {
      p = tail;
      if (node.key < tail.key) {
        tail = tail.left;
      } else {
        tail = tail.right;
      }
    }
    if (!p) {
      this.root = node;
      return;
    }
    // 插入
    if (p.key < node.key) {
      p.right = node;
    } else {
      p.left = node;
    }
    node.p = p;
  }
  transverse() {
    return this.__transverse(this.root);
  }

  *__transverse(node) {
    if (!node) {
      return;
    }
    yield* this.__transverse(node.left);
    yield node;
    yield* this.__transverse(node.right);
  }
}
```
## 链表
### 反转链表
```js
//迭代写法
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
var reverseList = function(head){
    if(head == null || head.next == null){return head;}
    let pre = head;
    let temp = null;
    let cur = head.next
    while(cur != null){
        temp = cur.next;
        pre.next = cur.next;
        cur.next = head;
        head = cur;
        cur = temp;
        //[head, cur] = [cur, temp]; //解构赋值写法
    }
    return head；
}
```

### 合并两个排序的链表
输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的

```js
//迭代写法
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
var mergeTwoList = function(l1, l2){
 	if(!l1){return l2;}
    if(!l2){return l1;}
    let temp = new ListNode();
    let head = temp;  //保存头节点
    while(l1 && l2){
        if(l1.val < l2.val){
            temp.next = l1;
            l1 = l1.next;
        }else{
            temp.next = l2;
            l2 = l2.next;
        }
        temp = temp.next;
    }
    //当l1或l2为空时，跳出while循环，并将不为空的链表添加到temp.next
    if(!l1){temp.next = l2;}
    if(!l2){temp.next = l1;}
    return head.next;  //由于head头节点没有值，因此是返回head.next
}

//递归写法
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
var mergeTwoList = function(l1, l2){
	if(!l1){return l2;}
    if(!l2){return l1;}
    if(l1.val < l2.val){
        l1.next = mergeTwoList(l1.next, l2);
        return l1;
    }else{
        l2.next = mergeTwoList(l1, l2.next);
        return l2;
    }
}
```

