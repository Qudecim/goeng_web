import { createStore } from 'vuex'

const store = createStore({
    state () {
      return {
        count: 0,
        isAuthenticated: false,
        errors_text: []
      }
    },
    mutations: {
      increment (state) {
        state.count++
      },
      authentificate (state) {
        state.isAuthenticated = true
      },
      notifyErrorAdd (state, error_text) {
        state.errors_text.unshift(error_text)
      },
      notifyErrorRemove (state) {
        state.errors_text.pop()
      },
    },
    actions: {
      notifyError (context, error_text) {
        context.commit('notifyErrorAdd', error_text)
        setTimeout(() => {
          context.commit('notifyErrorRemove')
        }, 3000)
      }
    }
  })

  export default store