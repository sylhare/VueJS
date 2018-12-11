import Vue from 'vue'
import { createStore } from '@/store/index.js'
import GitlabVuex from '@/components/GitlabVuex.vue'

describe('GitlabVuex', () => {
  let store
  let vm
  let Component

  beforeEach(() => {
    Component = Vue.extend(GitlabVuex)
  })

  afterEach(() => {
    vm.$destroy()
  })

  it('should show a user', () => {
    const user = {
      name: 'Foo',
      age: '30'
    }

    store = createStore()

    // populate the store
    store.dispatch('addUser', user)

    vm = new Component({
      store,
      propsData: {}
    }).$mount()
  })
})
