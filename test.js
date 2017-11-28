'use strict'

const assert = require('assert')
const getOwnProperty = require('.')

describe('getOwnProperty()', function () {
  it('should return an object’s own property', function () {
    assert.strictEqual(getOwnProperty({hello: 'world'}, 'hello'), 'world')
  })

  it('should return undefined when trying to get an Object prototype property', function () {
    assert.strictEqual(typeof Object.prototype.toString, 'function')
    assert.strictEqual(typeof getOwnProperty({}, 'toString'), 'undefined')
  })
})
