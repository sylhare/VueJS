import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const basket = new Vuex.Store({
  state: {
    fruits: ['orange', 'banana'],
    color: 'huhh?',
    currentFruit: 'orange'
  },
  getters: {
    fruitsCount (state) {
      return state.fruits.length
    }
  },
  mutations: {
    add: (state, fruit) => (state.fruits.push(fruit)),
    setCurrent: (state, fruit) => (state.currentFruit = fruit),
    jaune: (state) => (state.color = 'jaune')
  }
})

export default basket
