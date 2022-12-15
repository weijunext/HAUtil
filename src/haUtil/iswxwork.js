/**
 * 判断是否企业微信
 * @returns {Boolean}
 */

 export function isWxWork() {
  const ua = navigator.userAgent.toLowerCase()
  return ua.includes('wxwork')
}

module.exports = isWxWork;