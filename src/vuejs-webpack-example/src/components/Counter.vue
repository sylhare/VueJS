<template>
    <div>
        <p>{{ count }} for '{{ name }}' </p>
        <p>
            <button @click="increment">+</button>
            <input placeholder="Enter your name"
                   v-model="inputName"
                   @input="nominate"/>
            <button @click="decrement">-</button>
        </p>
    </div>
</template>

<script>
import store from '@/counterStore'

export default {
  name: 'counter',
  data () {
    return {
      inputName: '',
    }
  },
    
  computed: {
    count () {
      return store.state.count
    },
    name () {
      return store.state.name
    }  
  },
  methods: {
    increment () {
      store.commit('increment')
    },
    decrement () {
      store.commit('decrement')
    },
    nominate () {   
      store.commit('nominate', this.inputName)
    }  
  }
}
</script>
