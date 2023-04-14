<template>
  <div>
    <!-- <button @click="$store.commit('increment')">
      {{ $store.state.counter }}
    </button> -->
    <p>こちらはdefaultのlayout</p>
    <p>
      <span v-if="getStatus">ログイン状態1 ($store.getter)： </span>
      {{ $store.getters['sample/getStatus'] }}
    </p>
    <p>
      <span v-if="getStatus">ログイン状態2 (getter)： </span>
      {{ getStatus }}
    </p>
    <p><span v-if="getStatus">ログイン状態3 (state)： </span> {{ isStatus }}</p>
    <b-button class="test" @click="$store.dispatch('sample/signIn')">
      ログインする1 (actionのdispatch)
    </b-button>
    <button @click="setStatus({ isLogin: true })">
      ログインする2 (mutation)
    </button>
    <button @click="signIn(true)">
      ログインする3 (action)
    </button>
    <button @click="sayHello">
      ハロー
    </button>
    <button @click="toggleAction()">
      トグル
    </button>
    <div>
      <b-button id="show-btn" @click="showModal">
        Open Modal
      </b-button>
      <b-button id="toggle-btn" @click="toggleModal">
        Toggle Modal
      </b-button>

      <b-modal ref="my-modal" hide-footer title="Using Component Methods">
        <div class="d-block text-center">
          <h3>Hello From My Modal!</h3>
        </div>
        <b-button
          class="mt-3"
          variant="outline-danger"
          block
          @click="hideModal"
        >
          Close Me
        </b-button>
        <b-button
          class="mt-2"
          variant="outline-warning"
          block
          @click="toggleModal"
        >
          Toggle Me
        </b-button>
      </b-modal>
    </div>
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
  watch: {
    isStatus(newVal, oldVal) {
      // データの値が変化した時にコンソールに新しい値と古い値を出力
      console.log(newVal, oldVal)
    }
  },
  methods: {
    ...mapMutations('sample', ['setStatus']),
    ...mapActions('sample', ['signIn', 'toggleAction']),
    sayHello() {
      console.log('Hello!')
    },
    showModal() {
      this.$refs['my-modal'].show()
    },
    hideModal() {
      this.$refs['my-modal'].hide()
    },
    toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs['my-modal'].toggle('#toggle-btn')
    }
  }
}
</script>

<style lang="scss" scoped>
.test {
  color: red;
}
</style>
