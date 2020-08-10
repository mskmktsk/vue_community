import { SIGN_IN, SIGN_OUT } from './mutations-types'
export default {
  signInGithub(context, payload) {
    return new Promise((resolve, _) => {
      resolve(payload)
    })
  },
  signInGithubResult(context, payload) {
    return new Promise((resolve, _) => {
      context.commit(SIGN_IN, payload)
      resolve(payload)
    })
  }
}
