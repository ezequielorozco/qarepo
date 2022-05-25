import { delayAsync } from './helpers'

describe('delayAsync', () => {
  it('should resolve the returned promise after the given amount of miliseconds', done => {
    let resolved = false
    delayAsync(500).then(() => {
      resolved = true
    })
    setTimeout(() => {
      expect(resolved).toBe(true)
      done()
    }, 500)
  })
})
