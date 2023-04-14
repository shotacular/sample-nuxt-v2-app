export default {
  setStatus(state, payload) {
    // ここでstate（ストアの状態）を変更する
    console.log('mutations到達')
    state.isStatus = payload.isLogin
  },
  toggleMutation(state) {
    // ここでstate（ストアの状態）を変更する
    console.log('mutations到達')
    state.isStatus = !state.isStatus
  }
}
