import add, {multiply} from '../src/tools'

describe('method add', function () {

  it('should add two numbers', () => {
    assert.equal(add(1, 2), 3)
  })

  it('should add two characters', () => {
    assert.equal(add('a', 'b'), 'ab')
  })

})

describe('method multiply', () => {

  it('should multiply numbers', () => {
    assert.equal(multiply(5, 10), 50)
  })

  it('should throw error if multiplier is string', () => {
    const buggyFunction = () => multiply('x', 10)
    assert.throws(buggyFunction)
  })

})
