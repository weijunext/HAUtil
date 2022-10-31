/**
 * 判断是否为电话号码，会过滤掉空格和横杠
 * @param {string | number} str 电话号码
 * @returns {Boolean}
 */

function isPhoneNum(str, type = 1) {
  str = str
    .replace(/ /g, '')
    .replace(/-/g, '')
    .replace(/\(|\)|\（|\）/g, ''); // 去除空格、横杠和括号
  return /^(\d{3,4})?[0-9]{7,8}$/.test(str);
}

module.exports = isPhoneNum;
