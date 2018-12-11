<template>
<div>
    <p> Parents data name value: {{name}} </p>
    <br />
    <child :myname="name" @nameupdated="name=$event"></child>
</div>
</template>

<script>
import child from '@/components/Child'

export default {
  name: 'parent',
  data () { return { name: 'original name' } },
  components: { child }
}
</script>
