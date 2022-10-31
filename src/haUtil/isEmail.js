/**
 * 判断邮箱格式
 * @param {string} str
 * @returns {Boolean}
 */

function isEmailNum(str, type = 1) {
  return /^[A-Za-z0-9_\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$/.test(
    str
  );
}

module.exports = isEmailNum;
