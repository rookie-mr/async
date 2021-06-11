var Async = require('../index.js')
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