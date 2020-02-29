<template>
  <div>
    <button @click="getAsync">Get Async</button>
    {{ $store.state.data }}
  </div>
</template>
<script>
// https://codeburst.io/a-pattern-for-mocking-and-unit-testing-vuex-actions-8f6672bdb255
export default {
  name: 'AsyncButton',
  methods: {
    getAsync () {
      this.$store.dispatch('getAsync')
    }
  }
}
</script>
