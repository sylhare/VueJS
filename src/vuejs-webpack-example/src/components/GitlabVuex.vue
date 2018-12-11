<script>
import { mapActions, mapState, mapGetters } from 'vuex'
import store from '@/store'

export default {
  store,
  computed: {
    ...mapGetters([
      'getUsersWithPets'
    ]),
    ...mapState([
      'isLoading',
      'users',
      'error'
    ])
  },
  methods: {
    ...mapActions([
      'fetchUsers',
      'addUser'
    ]),

    onClickAddUser (data) {
      this.addUser(data)
    }
  },

  created () {
    this.fetchUsers()
  }
}
</script>
<template>
  <ul>
    <li v-if="isLoading">
      Loading...
    </li>
    <li v-else-if="error">
      {{ error }}
    </li>
    <template v-else>
      <li
        v-for="user in users"
        :key="user.id"
      >
        {{ user }}
      </li>
    </template>
  </ul>
</template>
