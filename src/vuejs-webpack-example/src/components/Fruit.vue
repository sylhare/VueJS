<template>
  <div>
    <p>Fruits: {{ count }}</p>
    <label>Fruit</label>: <input v-model="fruity">
  </div>
</template>

<script>
import basket from '@/store/fruitStore'
import { mapState } from 'vuex'

export default {
  name: 'fruit',
  /*  data() {
    return {
      fruity: "Piripiri"
    }
  },  */
  computed: {
    fruity () {
      // return basket.state.fruits[0]
      console.log(basket.state.currentFruit)
      return basket.state.currentFruit
    },
    count () {
      return basket.state.fruits.length
    },
    ...mapState([' color '])
  },
  watch: {
    count (newCount, oldCount) {
      console.log(`We have ${newCount} fruits now, yaay!`)
    }
    /* color (val, oldVal) { //doesn't really work
      console.log('jaune!!')
      basket.commit('setCurrent', 'Banane')
    } */
  }
  /* created () {
    setTimeout(() => { this.color = 'jaune' }, 2000)
    setTimeout(() => { basket.commit('jaune') }, 2000)
  },  */
}
</script>
