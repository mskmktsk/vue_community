import types from './mutations-types'

export default {
  [types.CHANGE_NAME] (state, payload) {
    state.name = payload.name
  }
}
