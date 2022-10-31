var requestAnimFrame = (function() {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, 1000 / 60);
    }
  );
})();

/**
 * rAF 定时器
 *
 * 用法：
 * const cbFun = rafInterval(fun, 2000)
 * cbFun()
 */
function rafInterval(fn, delay = 1000) {
  let start = 0;
  function fun() {
    const timestamp = new Date().valueOf();
    if (start === undefined) start = timestamp;
    if (timestamp - start > delay) {
      start = timestamp;
      fn.apply(this, arguments);
    }
    requestAnimFrame(fun);
  }
  return function() {
    requestAnimFrame(fun);
  };
}

module.exports = rafInterval;
