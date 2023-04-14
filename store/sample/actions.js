export default {
  signIn({ commit }, requestResult) {
    console.log('action到達')
    // ここでミューテーションを呼び出し、外部とのAPI通信や非同期処理も行う
    commit('setStatus', { isLogin: requestResult })
  },
  toggleAction({ commit }) {
    console.log('action到達')
    // ここでミューテーションを呼び出し、外部とのAPI通信や非同期処理も行う
    commit('toggleMutation')
  }
}
