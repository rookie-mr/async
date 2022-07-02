var Async = function (fn) {
    this.name = 'Async'
    this._state = 'pending'
    if (typeof fn !== 'function') {
        throw new Error('The Param Of Async Must Be Typeof Function !')
        return null
    }
    var resolve = (function (data) {
        this._state = 'fulfilled'
        typeof this._resolve === 'function' && this._resolve(data) 
        return this
    }).bind(this)
    var reject = (function (err) {
        this._state = 'reject'
        typeof this._catch === 'function' ? this._catch(err) : (typeof this._reject === 'function' && this._reject(data) && this._reject(err))
        return this
    }).bind(this)
    fn.call(this, resolve, reject)
    typeof this._finally === 'function' && this._finally() 
}
Async.prototype.then = function (resolve, reject) {
    this._resolve = resolve
    this._reject = reject
}
Async.prototype.catch = function (reject) {
    this._catch = reject
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