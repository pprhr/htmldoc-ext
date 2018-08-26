const htmldoc = require('../index')
const chai = require('chai')
const assert = chai.assert

const htmlfile = './test/test.html'


describe('content', function() {
  const contentFunc = htmldoc.content

  it('content 1', () => {
    let actual = contentFunc(htmlfile, 'description')
    let expected = 'descriptiondescription\ndescription\ndescriptiondescription'
    assert.strictEqual(actual, expected)
  })

  it('content 2', () => {
    let actual = contentFunc(htmlfile, 'note')
    let expected = 'notenotenote'
    assert.strictEqual(actual, expected)
  })

  it('content 3', () => {
    let actual = contentFunc(htmlfile, 'aaaaaaaaaa')
    let expected = false
    assert.strictEqual(actual, expected)
  })
})

describe('list', function() {
  const listFunc = htmldoc.list

  it('list 1', () => {
    let actual = listFunc(htmlfile, 'url')
    assert.isArray(actual)
  })

  it('list 2', () => {
    let actual = listFunc(htmlfile, 'url')
    assert.include(actual, 'https://111.com')
    assert.include(actual, 'https://222.com')
    assert.include(actual, 'https://333.com')
  })

  it('list 3', () => {
    let actual = listFunc(htmlfile, 'list', '・')
    assert.include(actual, '1111111')
    assert.include(actual, '2222222')
    assert.include(actual, '3333333')
  })

  it('list 4', () => {
    let actual = listFunc(htmlfile, 'list', '/')
    let expected = '・1111111\n・2222222\n・3333333'
    assert.include(actual, expected)
  })

  it('list 5', () => {
    let actual = listFunc(htmlfile, 'aaaaaaaaaa')
    let expected = false
    assert.strictEqual(actual, expected)
  })
})

describe('itemize', function() {
  const listFunc = htmldoc.list
  const itemizeFunc = htmldoc.itemize

  it('itemize 1', () => {
    let array = listFunc(htmlfile, 'url')
    let actual = itemizeFunc(array)
    let expected = '・https://111.com\n・https://222.com\n・https://333.com'
    assert.strictEqual(actual, expected)
  })

  it('itemize 2', () => {
    let array = listFunc(htmlfile, 'url')
    let actual = itemizeFunc(array, '⭐︎')
    let expected = '⭐︎https://111.com\n⭐︎https://222.com\n⭐︎https://333.com'
    assert.strictEqual(actual, expected)
  })

  it('itemize 3', () => {
    let actual = itemizeFunc('aaaaaaa')
    let expected = false
    assert.strictEqual(actual, expected)
  })
})