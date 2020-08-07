import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
  name: ''
}

const store = new Vuex.Store({
  state,
  actions,
  mutations
})

export default store
