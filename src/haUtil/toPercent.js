/**
 * 转换百分比
 * @param {number} num
 * @param {number} total
 * @returns {string} 百分比
 */
function toPercent(num, total) {
  let str =
    num >= 0 && total > 0 ? Number(((num / total) * 100).toFixed(2)) : 0;
  return str;
}

module.exports = toPercent;
