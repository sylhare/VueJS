import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// provide the store using the "store" option.
// this will inject the store instance to all child components.
// with `store,`

export const createStore = () => new Vuex.Store({
  state: {
    count: 0,
    name: 'Tucker'
  },
  mutations: {
    increment (state) {
      state.count++
    },
    decrement: state => (state.count--), // mutation can be introduced like that too
    nominate: (state, data) => (state.name = data)
  }
})
export default createStore()
