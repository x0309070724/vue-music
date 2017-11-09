/**
 * Created by 肖星 on 2017/7/10.
 */
import {commonParams, options} from './config'
import jsonp from 'common/js/jsonp'

export function getSingerList() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'
  const data = Object.assign({}, commonParams, {
    // 数据是从网页版qq音乐抓取的，所以有些配置信息有疑惑也影响不大，只要知道大概的意思就可以了
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: 1,
    hostuid: 0,
    platform: 'yqq',
    needNewCode: 0
  })
  return jsonp(url, data, options)
}
export function getSingerDetail(singerId) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'
  const data = Object.assign({}, commonParams, {
    // 数据是从网页版qq音乐抓取的，所以有些配置信息有疑惑也影响不大，只要知道大概的意思就可以了
    hostUin: 0,
    platform: 'yqq',
    needNewCode: 0,
    singermid: singerId,
    order: 'listen',
    begin: 0,
    num: 100,
    songstatus: 1
  })
  return jsonp(url, data, options)
}
