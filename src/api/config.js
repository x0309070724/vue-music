/**
 * Created by 肖星 on 2017/7/3.
 * 此文件配置一些公共的参数信息
 */

// 数据是从手机网页版qq音乐抓取的，所以有些配置信息有疑惑也影响不大，只要知道大概的意思就可以了
export const commonParams = {
  g_tk: 5381,
  inCharset: 'utf-8',
  outCharset: 'utf-8',
  notice: 0,
  format: 'jsonp'
}

export const options = {
  param: 'jsonpCallback'
}

export const ERR_OK = 0
