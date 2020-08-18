class MyPromise {
  static PENDING = 'pending';
  static FULFILLED = 'fulfilled';
  static REJECTED = 'rejected'
  constructor(executor) {
    this.status = MyPromise.PENDING;
    this.value = null;
    this.reason = null;
    this.callbacks = []
    try {
      executor(this.resolve, this.reject);
    } catch (error) {
      this.reject(error)
    }
  }
  resolve = (value) => {
    if (this.status == MyPromise.PENDING) {
      this.status = MyPromise.FULFILLED;
      this.value = value
      setTimeout(() => {
        this.callbacks.map(callback => {
          // console.log(callback)
          callback.onFulfilled(value)
        })
      });
      // console.log(this.callbacks);
    }
  }
  reject = (reason) => {
    if (this.status == MyPromise.PENDING) {
      this.status = MyPromise.REJECTED;
      this.reason = reason
      setTimeout(() => {
        this.callbacks.map(callback => {
          callback.onRejected(reason)
        })
      });
    }
  }
  then(onFulfilled, onRejected) {
    if (typeof onFulfilled !== 'function') {
      // console.log('-------------------')
      onFulfilled = value => value
    }
    if (typeof onRejected !== 'function') {
      onRejected = value => value
    }
    // console.log(this)

    return new MyPromise((resolve, reject) => {
      if (this.status == MyPromise.PENDING) {
        this.callbacks.push({
          onFulfilled: (value) => {
            try {
              let result = onFulfilled(value);
              resolve(result)
            } catch (error) {
              reject(error);
            }
          },
          onRejected: (value) => {
            try {
              let result = onRejected(value);
              resolve(result)
            } catch (error) {
              reject(error);
            }
          }
        })
      }
      if (this.status == MyPromise.FULFILLED) {
        setTimeout(() => {
          try {
            // console.log(onFulfilled(this.value))
            let result = onFulfilled(this.value)
            if (result instanceof MyPromise) {
              result.then(value => {
                resolve(value)
              }, reason => {
                reject(reason);
              })
            } else {
              resolve(result)
            }
          } catch (error) {
            reject(error)
          }
        });
      }
      if (this.status == MyPromise.REJECTED) {
        setTimeout(() => {
          try {
            let result = onRejected(this.value)
            resolve(result)
          } catch (error) {
            onRejected(error)
          }
        });
      }
    })
  }
}


