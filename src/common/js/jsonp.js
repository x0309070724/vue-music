/**
 * Created by 肖星 on 2017/7/3.
 */
import originJSONP from 'jsonp'

// 将jsonp函数作为一个Promise对象进行导出，导入的时候就不用加{}了
export default function jsonp(url, data, option) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
  return new Promise((resolve, reject) => {
    // 调用原始的jsonp进行交互
    originJSONP(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

// return url === a=zhangsan&b=lisi
function param(data) {
  let url = ''
  for (let k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    // 对URI链接进行解码操作
    url += `&${k}=${decodeURIComponent(value)}`
  }
  return url ? url.substring(1) : ''
}
