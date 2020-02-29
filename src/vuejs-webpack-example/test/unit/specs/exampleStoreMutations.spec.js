import Vue from 'vue'
import Vuex from 'vuex'
import { actions } from '@/store/example/index.js'
Vue.use(Vuex)

describe('actions', () => {
  let store
  let setDataMock
  beforeEach(() => {
    setDataMock = jest.fn()
    store = new Vuex.Store({
      state: { data: {} },
      mutations: {
        SET_DATA: setDataMock
      },
      actions: {
        getAsync: actions.getAsync
      }
    })
  })
  it('tests using a mock mutation but real store', () => {
    store.hotUpdate({
      mutations: { SET_DATA: setDataMock }
    })
    return store.dispatch('getAsync')
      .then((res) => {
        expect(setDataMock.mock.calls[0][1])
          .toEqual({ title: 'Mock with Jest' })
        expect(setDataMock.mock.calls).toHaveLength(1)
      })
  })
})
