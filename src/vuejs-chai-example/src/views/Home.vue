<template>
  <div class="home">
    <img alt="Logo" src="../assets/logo.png">
    <hey msg="Welcome to Vue JS"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Hey from '@/components/Hey.vue'

export default {
  name: 'home',
  components: {
    Hey
  }
}
</script>
