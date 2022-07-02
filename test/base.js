var Async = require('../index.js')
var async = new Async(function (resolve, reject) {
    setTimeout(function () {
        resolve(9527)
        // reject(9527)
        console.log('async', async)
    }, 2000)
    console.log('this:', this)
})
async.then(function (data) {
    setTimeout(function () {
        console.log('data 1:', data)
    })
}, function (err) {
    console.log('then err', err)
}).then(function (data) {
    console.log('data 2:', data)
}).catch(function (err) {
    console.log('catch err', err)
}).finally(function () {
    console.log('finally')
}) 