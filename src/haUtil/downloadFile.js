/**
 * 导出文件
 * @param {string} biteData 字节流
 * @param {string} title 文件名
 * @param {string} ext 文件后缀
 */
function downloadFile(biteData, title = '导出', ext = 'xls') {
  let blob = new Blob([biteData], { type: 'application/octet-binary' });
  let downloadElement = document.createElement('a');
  let href = window.URL.createObjectURL(blob);
  downloadElement.target = '_blank';
  downloadElement.href = href;
  downloadElement.download = `${title}.${ext}`; // 文件名
  document.body.appendChild(downloadElement);
  downloadElement.click();
  document.body.removeChild(downloadElement);
  window.URL.revokeObjectURL(href); // 释放掉blob对象
}

module.exports = downloadFile;
