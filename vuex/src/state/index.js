import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 创建状态仓库
export default new Vuex.Store({
    state: {
      num: 88
    },
    // 定义状态改变函数
    mutations: {
      increase: function (state) {
        state.num += 1
      },
      reduce: function (state) {
        state.num -= 20
      }
    },
    actions: {
      // context:上下文对象
      reduceAction: function (context) {
        // setTimeout(function () {
          context.commit('reduce')
        // }, 1000)
      }
    },
    getters: {
      getNum(state) {
        return state.num > 0 ? state.num : 0
      }
    }
  })