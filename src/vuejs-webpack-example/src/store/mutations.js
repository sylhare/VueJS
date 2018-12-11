import * as types from './mutation_types'

export default {
  [types.REQUEST_USERS] (state) {
    state.isLoading = true
  },
  [types.RECEIVE_USERS_SUCCESS] (state, data) {
    // Do any needed data transformation to the received payload here
    state.users = data
    state.isLoading = false
  },
  [types.REQUEST_USERS_ERROR] (state, error) {
    state.isLoading = false
  },
  [types.REQUEST_ADD_USER] (state, user) {
    state.isAddingUser = true
  },
  [types.RECEIVE_ADD_USER_SUCCESS] (state, user) {
    state.isAddingUser = false
    state.users.push(user)
  },
  [types.REQUEST_ADD_USER_ERROR] (state, error) {
    state.isAddingUser = true
    state.errorAddingUser = error
  }
}
