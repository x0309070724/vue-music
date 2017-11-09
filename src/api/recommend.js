/**
 * Created by 肖星 on 2017/7/3.
 */
import {commonParams, options} from './config'
import jsonp from 'common/js/jsonp'
import axios from 'axios'

export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const data = Object.assign({}, commonParams, {
    // 数据是从手机网页版qq音乐抓取的，所以有些配置信息有疑惑也影响不大，只要知道大概的意思就可以了
    platform: 'h5',
    uid: 0,
    needNewCode: 1
  })
  return jsonp(url, data, options)
}
/* 获取歌单,此方法获取的时候有host和referer限制，无法通过jsonp方式获取。所以采用axios服务端指定响应头的方式获取 */
export function getDiscList() {
  const url = '/api/getDiscList'
  const data = Object.assign({}, commonParams, {
    // 数据是从PC网页版qq音乐抓取的，所以有些配置信息有疑惑也影响不大，只要知道大概的意思就可以了
    rnd: Math.random(),
    hostUin: 0,
    platform: 'yqq',
    needNewCode: 0,
    categoryId: 10000000,
    sortId: 5,
    sin: 0,
    ein: 29,
    /* 由于不是使用的jsonp获取，所以此处必须指明json格式 */
    format: 'json'
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getSongList(disstid) {
  const url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg'
  const data = Object.assign({}, commonParams, {
    disstid,
    platform: 'yqq',
    needNewCode: 0,
    type: 1,
    json: 1,
    utf8: 1,
    onlysong: 0,
    hostUin: 0
  })
  return jsonp(url, data, options)
}
