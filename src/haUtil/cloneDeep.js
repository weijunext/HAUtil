/**
 * 深拷贝
 * @param {*} source
 * @param {WeakMap} weakMap
 * @returns {*} target
 */

// 可遍历对象
const iterations = [
  '[object Object]',
  '[object Array]',
  '[object Map]',
  '[object Set]',
];

function cloneDeep(source, weakMap = new WeakMap()) {
  if (source === null) return source;

  // 获取对象类型
  const type = Object.prototype.toString.call(source);

  // 处理不可遍历对象
  if (!iterations.includes(type)) {
    if (type === '[object Date]') return new Date(source);
    if (type === '[object RegExp]') return new RegExp(source);
    if (type === '[object Symbol]') return Symbol(source.description);
    if (type === '[object Function]') return source;
    // 剩余的一般是原始类型，直接返回
    return source;
  }

  // 创建 target 实例
  let target = new source.constructor(); // {} | [] | Map(0) | Set(0)

  // 处理循环调用
  const val = weakMap.get(source);
  if (val) return val;
  weakMap.set(source, target);

  if (type === '[object Map]') {
    source.forEach((value, key) => {
      target.set(key, cloneDeep(value));
    });
    return target;
  }

  if (type === '[object Set]') {
    source.forEach(value => {
      target.add(cloneDeep(value));
    });
    return target;
  }

  // 处理对象和数组
  for (const key in source) {
    target[key] = cloneDeep(source[key], weakMap);
  }
  return target;
}

module.exports = cloneDeep;
