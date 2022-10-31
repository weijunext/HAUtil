![图片](./assets/hautil.png)

# haUtil

前端工具库

## 安装下载

1、直接下载 `min` 目录下的`hautil.min.js`使用
2、使用npm安装

### 直接引入
```
<script src="hautil.min.js"></script>
<script>
    var debounce = hautil.debounce()
</script>
```
### npm/yarn
```
npm i -S hautil

yarn add hautil
```
完整引入
```
const hautils = require('hautil')
const debounce = hautil.debounce()
```
按需引入（推荐）
```
const getDebounce = require('hautil/debounce')
const debounce = getDebounce()
```
## 目录

```  
│
├── assets                           # 项目资源
├── test                             # 单元测试用例
├── .babelrc                         # babel配置
├── .gitignore                       # gitignore
├── LICENSE                          # LICENSE
├── package.json                     # package
├── webpack.config.js                # webpack配置
```