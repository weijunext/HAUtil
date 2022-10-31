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

## 工具类说明

### 数据处理
| 工具类   | 用途                                           |
| ------ | ---------------------------------------------- |
|clone |    浅拷贝|
|cloneDeep |    深拷贝|
|randomNum |    任意范围随机数|
|toPercent |    数字转百分比|
|translateFileSize |    文件单位自适应|

### 金额处理
| 工具类   | 用途                                           |
| ------ | ---------------------------------------------- |
|amountFormat |    金额超出三位加逗号|
### 事件处理
| 工具类   | 用途                                           |
| ------ | ---------------------------------------------- |
|debounce |    防抖|
|throttle |    节流|
|rafInterval |    定时器|

### 文件处理
| 工具类   | 用途                                           |
| ------ | ---------------------------------------------- |
|downloadFile |    导出文件|
|json2Csv |    json导出csv文件|
### 格式校验
| 工具类   | 用途                                           |
| ------ | ---------------------------------------------- |
|isEmail |    是否邮箱|
|isIdCard |    是否身份证|
|isPhoneNum |    是否手机号|
|isTelNum |    是否座机号码|

## 目录

```  
│
├── assets                           # 项目资源
├── dist                             # 发布npm包文件
├── example                          # 示例
├── min                              # 最小包
├── src                              # 核心源码
├── .babelrc                         # babel配置
├── .gitignore                       # gitignore
├── LICENSE                          # LICENSE
├── package.json                     # package
├── webpack.config.js                # webpack配置
```

## 计划
- [x] 开源常用工具类
- [x] 发布npm包
- [ ] 完善测试用例
- [ ] 用gitbook完善使用文档