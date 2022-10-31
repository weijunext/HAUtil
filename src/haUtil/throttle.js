/**
 * 节流
 *
 * 用法：
 * const cbFun = throttle(fun, 2000)
 * cbFun()
 */
function throttle(fn, delay = 1000) {
  let old = 0;
  return function() {
    let now = new Date().valueOf();
    if (now - old > delay) {
      fn.apply(this, arguments);
      old = now;
    }
  };
}

module.exports = throttle;
