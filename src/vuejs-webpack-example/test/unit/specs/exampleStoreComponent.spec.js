import Vue from 'vue'
import Vuex from 'vuex'
import { shallowMount } from 'vue-test-utils'
import AsyncButton from '@/src/components/StoreExample'

Vue.use(Vuex)

describe('AsyncButton', () => {
  let store
  let actions
  let state
  beforeEach(() => {
    state = { data: {} }
    actions = {
      getAsync: jest.fn()
    }

    store = new Vuex.Store({
      state,
      actions
    })
  })
  it('dispatches an getAsync action', () => {
    const wrapper = shallowMount(AsyncButton, {
      store
    })
    wrapper.find('button').trigger('click')
    expect(actions.getAsync.mock.calls).toHaveLength(1)
  })
  it('displays data from the state', () => {
    store.replaceState({
      data: 'Mock with replaceState'
    })
    const wrapper = shallowMount(AsyncButton, {
      store
    })
    expect(wrapper.text().trim().includes('Mock with replaceState'))
      .toBe(true)
  })
})
