/**
 * 金额超出三位加 ','
 * @param {string} num 金额
 * @param {string} locales 本地化配置，默认zh-CN
 * @param {object} options 本地化配置，默认{ style: 'currency', currency: 'CNY' }
 * @returns {string}
 */
function amountFormat(
  num,
  locales = 'zh-CN',
  options = { style: 'currency', currency: 'CNY' }
) {
  return num ? Number(num).toLocaleString(locales, options) : '0';
}

module.exports = amountFormat;
