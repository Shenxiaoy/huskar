# nginx 
[文档](https://www.nginx.cn/doc/)

### gzip 压缩
```shell
   #开启gzip压缩
    gzip on;
    #http的协议版本
    gzip_http_version 1.0;
    #IE版本1-6不支持gzip压缩，关闭
    gzip_disable 'MSIE[1-6].';
    #需要压缩的文件格式 text/html默认会压缩，不用添加
    gzip_types text/css text/javascript application/javascript image/jpeg image/png image/gif;
    #设置压缩缓冲区大小，此处设置为4个8K内存作为压缩结果流缓存
    gzip_buffers 4 8k;
    #压缩文件最小大小
    gzip_min_length 1k;
    #压缩级别1-9
    gzip_comp_level 9;
    #给响应头加个vary，告知客户端能否缓存
    gzip_vary on;
    #反向代理时使用
    gzip_proxied off;
```
```shell
location ~ .*\. (jpg|png|gif)$ {
    gzip off;
    root /data/www/images;
}
location ~ .*\. (html|js|css)$ {
    gzip on;
    gzip_min_length 1k; 
    gzip_http_version 1.1; 
    gzip_comp_level 9;
    gzip_types text/css application/javascript;
    root /data/www/html;
}
```

### 请求限制
限制主要有两种类型：
- 连接频率限制： limit_conn_module
- 请求频率限制： limit_req_module

```shell
limit_conn_zone $binary_remote_addr zone=conn_zone:1m;
limit_req_zone $binary_remote_addr zone=req_zone:1m rate=1r/s;
server {
    listen       80;
    server_name  localhost;
 
    #charset koi8-r;
    #access_log  /var/log/nginx/log/host.access.log  main;
 
 
    location / {
        root /opt/app/code;
        #limit_conn conn_zone 1;
        #limit_req zone=req_zone burst=3 nodelay;
        #limit_req zone=req_zone burst=3;
        #limit_req zone=req_zone;
        index  index.html index.htm;
    }
```
我们看到上面为定义zone，第二行是请求定义，表示对远程请求进行每秒一次的请求限制。这里的binary_remote_addr和remote_addr代表的含义是一样的（远程主机的IP）只是使用binary_remote_addr存储一个IP会比remote_addr省10个字节。burst 参数往后延迟3个请求 nodelay 立即返回。

### 防盗链
#### refer方式实现防盗链

```shell
server {
   listen 80;
   server_name www.imcati.com refer-test.imcati.com;
   root /usr/share/nginx/html;
   location ~*\.(gif|jpg|jpeg|png|bmp|swf)$ {
        valid_referers none blocked www.imcati.com;
        if ($invalid_referer) {
            return 403;
           }
      }
   }

# valid_referers: 指定资源访问是通过以下几种方式为合法，即白名单。
# none：允许缺失的头部访问。
# blocked：允许referer没有对应值的请求。
# server_names：若referer站点域名与server_name中本机配的域名一样允许访问。
```
#### 签名方式实现防盗链
```shell
server {
    listen       80;
    server_name  www.imcati.com refer-test.imcati.com;
    root /usr/share/nginx/html;

    location ~*\.(gif|jpg|jpeg|png|bmp|swf)$ {
        accesskey on;
        accesskey_hashmethod md5;
        accesskey_arg "key";
        accesskey_signature "mypass$remote_addr";
    }
}

# accesskey on | off: 模块开关
# accesskey_hashmethod md5|sha—1: 签名加密方式
# accesskey_arg: GET参数名称
# accesskey_sign: 加密规则
```

### 跨域 反向代理 转发
```shell
server {
    listen   80;
    server_name   localhost; #
    location / {
        proxy_pass http://shenxiaoyu.cn
    }
}
```

### 负载均衡
简单配置，待实践补充
```shell
// Upstream指定后端服务器地址列表
upstream balanceServer {
    server 10.1.22.33:12345;
    server 10.1.22.34:12345;
    server 10.1.22.35:12345;
}
```
