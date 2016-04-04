'use strict'

var assert = require('assert')
var getStock = require('./')

describe('test', function(){

  it('success: get one stock', function(done) {
    var stocks = ['yhoo']
    getStock(stocks).then(function (res) {
      assert.ok(res)
      assert.ok(res.results)
      assert(stocks.length, res.count)
      done()
    })
  })

  it('success: get two stocks', function(done) {
    var stocks = ['yhoo', 'TFSC']
    getStock(stocks).then(function (res) {
      assert.ok(res)
      assert.ok(res.results)
      assert(stocks.length, res.count)
      done()
    })
  })

  it('success: get invalid stocks', function(done) {
    var stocks = ['yhoosad', 'TFSCsd']
    getStock(stocks).then(function (res) {
      assert.ok(res)
      assert.ok(res.results)
      assert(stocks.length, res.count)
      done()
    })
  })

  it('fail: pass in string', function(done) {
    var stocks = 'strict'
    getStock(stocks).catch(function (res) {
      assert.ok(res)
      done()
    })
  })

  it('fail: pass in undefined', function(done) {
    var stocks
    getStock(stocks).catch(function (res) {
      assert.ok(res)
      done()
    })
  })

  it('fail: pass in empty array', function(done) {
    var stocks = []
    getStock(stocks).catch(function (res) {
      assert.ok(res)
      done()
    })
  })
})