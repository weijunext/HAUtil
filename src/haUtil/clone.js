/**
 * 浅拷贝
 * @param {Object} source
 * @returns {Object}
 */
function clone(source) {
  const result = Object.assign({}, source);
  return result;
}

module.exports = clone;
