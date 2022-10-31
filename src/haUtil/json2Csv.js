/**
 * JSON 数据转成 CSV 文件导出
 * @param {Array} list 要导出的JSON数据
 * @param {Array} cols 表头名称，格式如：['ID', '姓名', '性别']，默认用第一条数据的key
 * @param {Array} keys 表头使用的key，格式如：['id', 'name', 'gender']，需要和cols一一对应，否则导出数据有问题，默认用第一条数据的key
 * @param {string} fileName 导出的文件名称，不含日期前缀和文件类型后缀的部分
 *
 * 用法：
 * json2Csv(list, cols, keys, fileName)
 */

function json2Csv(list, cols, keys, fileName = '数据明细') {
  if (
    !(
      list instanceof Array &&
      cols instanceof Array &&
      keys instanceof Array &&
      typeof fileName === 'string'
    )
  ) {
    console.log('参数格式错误');
    return;
  }
  if (list.length === 0) return;

  if (cols.length === 0) cols = Object.keys(list[0]);
  if (keys.length === 0) keys = Object.keys(list[0]);
  fileName = fileName || '数据明细';

  let title = cols;
  let jsonKey = keys;
  let data = list;
  let str = [];
  str.push(title.join(',') + '\n');
  for (let i = 0; i < data.length; i++) {
    let temp = [];
    for (let j = 0; j < jsonKey.length; j++) {
      temp.push(data[i][jsonKey[j]]);
    }
    str.push(temp.join(',') + '\n');
  }
  let uri =
    'data:text/csv;charset=utf-8,\ufeff' + encodeURIComponent(str.join(''));
  let downloadLink = document.createElement('a');
  downloadLink.href = uri;
  downloadLink.download =
    new Date().toISOString().substring(0, 10) + '-' + fileName + '.csv';
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}

module.exports = json2Csv;
