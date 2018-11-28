<template>
<div>
    <p> Childs myname prop value: {{myname}} </p>
    <button @click="updatename"> Click to update child prop and emit back to parent </button>
    </div>
</template>

<script>
export default {
  name: 'child',
  props: ['myname'],
  methods: {
    updatename: function () {
      this.myname = 'new name'
      this.$emit('nameupdated', this.myname)
    }
  }
}
</script>
