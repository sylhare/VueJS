/* eslint-disable */
<template>
<div>
    This is a test
    <hr>
    <parent/>
    <hr>
    <kid :title="name"></kid>
    <hr>
    <counter />
</div>
</template>

<script>
import Counter from '@/components/Counter'
import Parent from '@/components/Parent'
import Kid from '@/components/Kid'

export default {
  data: function () {
    return {
      name: 'Bob'
    }
  },
  created () {
    // changing the value after a period of time would propagate to the child
    setTimeout(() => { this.name = 'John' }, 2000)
  },
  watch: {
    // You can also set up a watcher for name here if you like
    name (n, o) { console.log(n + ' - ' + o) }
  },
  components: {
    Parent,
    Kid,
    Counter
  }
}
</script>
