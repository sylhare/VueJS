<template>
<div>
    <p> Kid prop value {{title}} </p>
    </div>
</template>

<script>
export default {
  name: 'kid',
  props: ['title'],
  watch: {
    // This would be called anytime the value of title changes
    title (newValue, oldValue) {
      console.log('new: ' + newValue + ' - old: ' + oldValue)
    }
  }
}
</script>
