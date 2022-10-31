/**
 * 文件大小单位适配，自动转换B、K、M、G单位
 * @param {number | string} fileSize 文件大小，以B为单位
 * @returns {string}
 */
function translateFileSize(fileSize) {
  if (fileSize === null || typeof fileSize === 'undefined' || fileSize === '') {
    return '—';
  }
  if (fileSize < 1024) {
    fileSize = fileSize + 'B';
  } else if (fileSize < 1024 * 1024) {
    fileSize = Math.floor((fileSize * 10) / 1024) / 10 + 'K';
  } else if (fileSize < 1024 * 1024 * 1024) {
    fileSize = Math.floor((fileSize * 10) / (1024 * 1024)) / 10 + 'M';
  } else {
    fileSize = Math.floor((fileSize * 10) / (1024 * 1024 * 1024)) / 10 + 'G';
  }
  return fileSize;
}

module.exports = translateFileSize;
