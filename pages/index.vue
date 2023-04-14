<template>
  <div>
    <!-- <button @click="$store.commit('increment')">
      {{ $store.state.counter }}
    </button> -->
    <p>
      ログイン状態1 ($store.getter)： {{ $store.getters['sample/getStatus'] }}
    </p>
    <p>ログイン状態2 (getter)： {{ getStatus }}</p>
    <p>ログイン状態3 (state)： {{ isStatus }}</p>
    <button @click="$store.dispatch('sample/signIn')">
      ログインする1 (actionのdispatch)
    </button>
    <button @click="setStatus({ isLogin: true })">
      ログインする2 (mutation)
    </button>
    <button @click="signIn">
      ログインする3 (action)
    </button>
    <button @click="sayHello">
      ハロー
    </button>
    <button @click="toggleAction">
      トグル
    </button>
  </div>
</template>

<script>
// import { createNamespacedHelpers } from 'vuex'
// const {
//   mapMutations,
//   mapActions,
//   mapGetters,
//   mapState
// } = createNamespacedHelpers('sample')
import { mapMutations, mapActions, mapGetters, mapState } from 'vuex'

export default {
  computed: {
    ...mapState('sample', ['isStatus']),
    ...mapGetters('sample', ['getStatus'])
  },
  methods: {
    sayHello() {
      console.log('Hello!')
    },
    ...mapMutations({
      setStatus: 'sample/setStatus'
    }),
    ...mapActions('sample', ['signIn', 'toggleAction'])
  }
}
</script>

<style lang="scss" scoped></style>
