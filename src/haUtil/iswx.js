/**
 * 判断是否微信（不含企业微信）
 * @returns {Boolean}
 */

export function isWeixin() {
  const ua = navigator.userAgent.toLowerCase()
  return ua.includes('micromessenger') && !ua.includes('wxwork') // 微信 且 非企业微信
}

module.exports = isWeixin;