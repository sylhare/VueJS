import { actions } from '@/store/example/index.js'

describe('actions', () => {
  it('tests with a mock commit', () => {
    let count = 0
    let data
    let mockCommit = (state, payload) => {
      data = payload
      count += 1
    }
    actions.getAsync({ commit: mockCommit })
      .then(() => {
        expect(count).toBe(1)
        expect(data).toEqual({ title: 'Mock with Jest' })
      })
  })
})
