// import axios from 'axios'

// export const state = () => ({
//   isStatus: false
// })

// export const getters = {
//   // stateの状態を外部で取り出すときに使用する
//   getStatus: (state) => state.isStatus
// }

// export const mutations = {
//   setStatus(state, payload) {
//     // ここでstate（ストアの状態）を変更する
//     console.log('mutations到達')
//     state.isStatus = payload.isLogin
//   },
//   toggleMutation(state) {
//     // ここでstate（ストアの状態）を変更する
//     console.log('mutations到達')
//     state.isStatus = !state.isStatus
//   }
// }

// export const actions = {
//   signIn({ commit }) {
//     console.log('action到達')
//     // ここでミューテーションを呼び出し、外部とのAPI通信や非同期処理も行う
//     commit('setStatus', { isLogin: true })
//   },
//   toggleAction({ commit }) {
//     console.log('action到達')
//     // ここでミューテーションを呼び出し、外部とのAPI通信や非同期処理も行う
//     commit('toggleMutation')
//   }
// }
