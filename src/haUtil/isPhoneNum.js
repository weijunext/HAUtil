/**
 * 判断是否为电话号码，会过滤掉空格和横杠
 * @param {string | number} str 手机号码
 * @returns {Boolean}
 */

function isPhoneNum(str, type = 1) {
  str = str
    .replace(/ /g, '')
    .replace(/-/g, '')
    .replace(/\(|\)|\（|\）/g, ''); // 去除空格、横杠和括号
  return /^(\+?0?86\-?)?1[3456789]\d{9}$/.test(str);
}

module.exports = isPhoneNum;
