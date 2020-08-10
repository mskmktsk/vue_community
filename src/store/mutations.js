import { SIGN_IN, SIGN_OUT } from './mutations-types'

export default {
  [SIGN_IN](state, payload) {
    state.name = payload.name
    state.isSignIn = true
  },
  [SIGN_OUT](state) {
    state.name = ''
    state.isSignIn = false
  }
}
