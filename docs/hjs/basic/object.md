# 对象

## Object.assign 对象合并
> 相同的属性，后面会覆盖前面的对象；
> 可以合并数组，但会把数组视为对象进行合并；
> 可以实现浅拷贝；
```js
Object.assign([1,2,3], [4,5])

result: [4,5,3]
```

## Object.freeze 冻结
可以冻结一个对象，一个被冻结的对象再也不能被修改。
```js
const obj = {
  prop: 42
};

Object.freeze(obj);

obj.prop = 33;
// Throws an error in strict mode

console.log(obj.prop);
// expected output: 42
```
-------------------------------
-------------------------------

## blob 二进制大对象
[MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Blob)
- 转换为二进制数据，对二进制数据进行修改，如截取、分段；
- Blob url: Blob URL可以通过<code>URL.createObjectURL(blob)</code>创建，可作为文件得下载地址和作为图片资源地址。

## FileReader 
[MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader)
- <code>readAsArrayBuffer</code>，用于启动读取指定的 Blob 或 File 内容，读取完后会触发loadend事件，事件源中result为所读取的内容为buffer二进制流；
- <code>readAsDataURL</code>，... result 属性将包含一个data:URL格式的字符串（base64编码）以表示所读取文件的内容；
- <code>readAsText</code>，result返回转换后的字符串。

### 分片上传
```js
function uploadFile(file) {
  var chunkSize = 1024 * 1024; //每片1M大小
  var totalSize = file.size;
  var chunkQuantity = Math.ceil(totalSize/chunkSize); //分片总数
  var offset = 0; //偏移量

  var reader = new FileReader();
  reader.onload = function(e) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.overrideMineType("application/octet-stream");  // 约定传二进制数据格式
    
    xhr.onreadstatechange = function() {
      if(xhr.readyState === 4 && xhr.status ===200) {
        ++offset;
        if(offset === chunkQuantity) {
          alerrt("上传完成");
        } else if(offset === chunckQuantity-1) {
          blob = file.slice(offset*chunkSize, totalSize);
          reader.readAsArrayBuffer(blob);
        } else {
          blob = file.slice(offset*chunkSize, (offset+1)*chunckSize);
          reader.readAsArrayBuffer(blob);
        }
      }else {
        alert("上传出错")；
      }
    }

    if(xhr.sendAsBinary) {
      xhr.sendAsBinary(e.target.result);
    } else {
      xhr.send(e.target.result);
    }
  }
  var blob = file.slice(0, chunkSize);
  reader.readAsArrayBuffer(blob); // 
}
```




























