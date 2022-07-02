var Async = function (fn) {
    this.name = 'Async'
    this._state = 'pending'
    if (typeof fn !== 'function') {
        throw new Error('The Param Of Async Must Be Typeof Function !')
        return null
    }
    var resolve = (function (data) {
        if (this._state !== 'pendding') throw new Error('State Can Not Be Modify!')
        this._state = 'fulfilled'
        // typeof this._resolve === 'function' && this._resolve(data)
        // 支持 then 的链式调用
        for (var i = 0; i < this._resolve.length; i++) {
            typeof this._resolve[i] === 'function' && this._resolve[i](data)
        } 
        typeof this._finally === 'function' && this._finally() 
    }).bind(this)
    var reject = (function (err) {
        if (this._state !== 'pendding') throw new Error('State Can Not Be Modify!')
        this._state = 'rejected'
        typeof this._catch === 'function' ? this._catch(err) : (typeof this._reject === 'function' && this._reject(err))
        typeof this._finally === 'function' && this._finally() 
    }).bind(this)
    fn.call(this, resolve, reject)
}
Async.prototype.then = function (resolve, reject) {
    this._resolve.push(resolve)
    this._reject = reject
    return this
}
Async.prototype.catch = function (reject) {
    this._catch = reject
    return this
}
Async.prototype.finally = function (cb) {
    this._finally = cb
}
Async.resolve = function (any) {
    if(any instanceof Async) return any
    return new Async(function(resolve) {
        resolve(any)
    })
}
Async.reject = function (any) {
    if(any instanceof Async) return any
    return new Async(function(resolve, reject) {
        reject(any)
    })
}
Async.all = function () {

}
Async.race = function () {
    
}
Async.allSettled = function () {
    
}
Async.any = function () {
    
}

module.exports = Async