/**
 * 防抖
 *
 * 用法：
 * const cbFun = debounce(fun, 2000)
 * cbFun()
 */
function debounce(fn, delay = 1000) {
  let timer = null;
  return function() {
    if (timer !== null) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, delay);
  };
}

module.exports = debounce;
