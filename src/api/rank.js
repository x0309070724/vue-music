/**
 * Created by 肖星 on 2017/7/15.
 */
import {commonParams, options} from './config'
import jsonp from 'common/js/jsonp'

export function getTopList() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg'
  const data = Object.assign({}, commonParams, {
    // 数据是从手机网页版qq音乐抓取的，所以有些配置信息有疑惑也影响不大，只要知道大概的意思就可以了
    platform: 'h5',
    needNewCode: 1
  })
  return jsonp(url, data, options)
}
export function getMusicList(topid) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg'
  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    needNewCode: 1,
    tpl: 3,
    page: 'detail',
    type: 'top',
    topid
  })
  return jsonp(url, data, options)
}
