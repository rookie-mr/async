# async
对ES6 Promise 的原生实现，可用于不支持Promise的浏览器。
---
## install
npm install -g normal-async
## github
https://github.com/rookie-mr/async.git
### 基本用法
```javascript
var async = new Async(function (resolve, reject) {
    setTimeout(function () {
        resolve(9527)
        console.log(async)
    }, 2000)
    console.log(this)
})
async.then(function (data) {
    console.log(data)
}, function () {
    console.log('reject')
})
console.log(async)

Async.resolve()
Async.reject()
```