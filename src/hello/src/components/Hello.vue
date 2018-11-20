<template>
  <div>
    <div class="message">
      {{ message }}
    </div>
    Entrez un username : <input v-model="username">
    <div v-if="error" class="error">
      Choisissez un username de plus de 7 characteres.
    </div>
  </div>
</template>

<script>
export default {
  name: 'Foo',

  data () {
    return {
      message: 'Bienvenue sur le tutoriel VueJs',
      username: ''
    }
  },

  computed: {
    error () {
      return this.username.trim().length < 7
    }
  }
}
</script>