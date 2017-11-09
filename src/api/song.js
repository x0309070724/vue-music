/**
 * Created by 肖星 on 2017/7/14.
 */
import {commonParams} from './config'
import axios from 'axios'

/* 获取歌词,此方法获取的时候有host和referer限制，无法通过jsonp方式获取。所以采用axios服务端指定响应头的方式获取 */
export function getLyric(mid) {
  const url = '/api/lyric'
  const data = Object.assign({}, commonParams, {
    // 数据是从PC网页版qq音乐抓取的，所以有些配置信息有疑惑也影响不大，只要知道大概的意思就可以了
    hostUin: 0,
    platform: 'yqq',
    needNewCode: 0,
    pcachetime: +new Date(),
    songmid: mid,
    /* 由于不是使用的jsonp获取，所以此处必须指明json格式 */
    format: 'json'
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
