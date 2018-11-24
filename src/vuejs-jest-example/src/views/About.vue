<template>
  <div class="about">
    <h1>This is an about page</h1>
      <example/>
  </div>
</template>

<script>
// @ is an alias to /src
import Example from '@/components/ExampleHttp.vue';

export default {
  name: 'about',
  components: {
    Example,
  },
};
</script>
