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
    <hr>
    <fruit />
</div>
</template>

<script>
import Counter from '@/components/Counter'
import Parent from '@/components/Parent'
import Kid from '@/components/Kid'
import Fruit from '@/components/Fruit'
import basket from '@/store/fruitStore'

export default {
  data: function () {
    return {
      name: 'Bob'
    }
  },
  created () {
    // changing the value after a period of time would propagate to the child
    setTimeout(() => { this.name = 'John' }, 2000)
    setTimeout(() => { basket.commit('add', 'fraise') }, 2000)
  },
  watch: {
    // You can also set up a watcher for name here if you like
    name (n, o) { console.log(n + ' - ' + o) }
  },
  components: {
    Parent,
    Kid,
    Counter,
    Fruit
  }
}
</script>
