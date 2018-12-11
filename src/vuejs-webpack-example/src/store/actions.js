import * as types from './mutation_types'
import axios from 'axios'
import createFlash from 'flash'

export const requestUsers = ({ commit }) => commit(types.REQUEST_USERS)
export const receiveUsersSuccess = ({ commit }, data) => commit(types.RECEIVE_USERS_SUCCESS, data)
export const receiveUsersError = ({ commit }, error) => commit(types.REQUEST_USERS_ERROR, error)

export const fetchUsers = ({ state, dispatch }) => {
  dispatch('requestUsers')

  axios.get(state.endpoint)
    .then(({ data }) => dispatch('receiveUsersSuccess', data))
    .catch((error) => {
      dispatch('receiveUsersError', error)
      createFlash('There was an error')
    })
}

export const requestAddUser = ({ commit }) => commit(types.REQUEST_ADD_USER)
export const receiveAddUserSuccess = ({ commit }, data) => commit(types.RECEIVE_ADD_USER_SUCCESS, data)
export const receiveAddUserError = ({ commit }, error) => commit(types.REQUEST_ADD_USER_ERROR, error)

export const addUser = ({ state, dispatch }, user) => {
  dispatch('requestAddUser')

  axios.post(state.endpoint, user)
    .then(({ data }) => dispatch('receiveAddUserSuccess', data))
    .catch((error) => dispatch('receiveAddUserError', error))
}
