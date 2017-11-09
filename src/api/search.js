/**
 * Created by 肖星 on 2017/7/15.
 */
import {commonParams, options} from './config'
import jsonp from 'common/js/jsonp'

export function getHotKey() {
  const url = 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg'
  const data = Object.assign({}, commonParams, {
    // 数据是从手机网页版qq音乐抓取的，所以有些配置信息有疑惑也影响不大，只要知道大概的意思就可以了
    platform: 'h5',
    needNewCode: 1
  })
  return jsonp(url, data, options)
}

export function search(query, page, zhida, perpage) {
  const url = 'https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp'
  const data = Object.assign({}, commonParams, {
    // 数据是从手机网页版qq音乐抓取的，所以有些配置信息有疑惑也影响不大，只要知道大概的意思就可以了
    platform: 'h5',
    needNewCode: 1,
    uin: 0,
    w: query,
    perpage,
    n: perpage,
    zhidaqu: 1,
    catZhida: zhida ? 1 : 0,
    t: 0,
    flag: 1,
    ie: 'utf-8',
    sem: 1,
    aggr: 0,
    p: page,
    remoteplace: 'txt.mqq.all'
  })
  return jsonp(url, data, options)
}
