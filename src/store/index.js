/**
 * Created by 肖星 on 2017/7/11.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)
// 如果是开发环境，则使用严格的debug模式
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  strict: debug,
  // 在控制台输出状态改变的相关日志信息
  plugins: debug ? [createLogger()] : []
})
