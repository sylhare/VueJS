import Vue from 'vue'
import Vuex from 'vuex'
import { actions, mutations } from '@/store/example/index.js'

Vue.use(Vuex)

describe('actions', () => {
  let store
  let setDataMock
  beforeEach(() => {
    setDataMock = jest.fn()
    store = new Vuex.Store({
      state: { data: {} },
      mutations: mutations,
      actions: {
        getAsync: actions.getAsync
      }
    })
  })
  it('mocks an ajax calling using axios', () => {
    return store.dispatch('getAsync')
      .then(() => expect(store.state.data)
        .toEqual({ title: 'Mock with Jest' })
      )
  })
})
