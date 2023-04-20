## 主配置文件结构

1. main block：主配置段，即全局配置段，对http,mail都有效
2. events {}   // 事件驱动相关配置
3. http {}    // http/https协议相关配置段
4. mail {}    // mail协议相关配置段
5. stream {}  // stream服务器相关配置段


### main block
```
worker_processes number | auto   // 工作进程数, 一般设置为 CPU 物理核心数
...
```

### events
```
events {
    // # 每个 worker 支持的最大连接数, 一般设置为 cpu * 2048
    worker_connections  1024;
}
```

### http
- http块中可以包含多个server块,每个server块可以配置多个location块
```
http {
    // 各个server的公共配置
    server {
        // 每个server定义一个虚拟主机
        listen 80;                // 监听端口
        server_name localhost xx.xx;  // 虚拟主机名, 支持通配写法
        root  /usr/home/;         // 根目录
        alias rootPath;           // 路径别名
        location [OPERATOR] URL { // 指定URL的特性
            root /xx/;    // 对于特定 URL 对于的根目录
        }
    }
}
```
