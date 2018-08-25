'use strict'


const fs = require('fs')

const extract = {

  /**
   * Extract one content.
   * @param  {String} filepath
   * @param  {String} annotation
   * @return {String} content
   */
  content: (filepath, annotation) => {
    return search(filepath, annotation)
  },

  /**
   * Extract array content.
   * @param  {String}   filepath
   * @param  {String}   annotation
   * @param  {String}   liststyle
   * @return {String[]} array of content OR false if NULL.
   */
  list: (filepath, annotation, liststyle = '-') => {
    let content = search(filepath, annotation)
    if (!content) return content

    let array = content.replace(liststyle, '').split(liststyle)
    return array.map(item => item.trim())
  },

  /**
   * Convert to itemize.
   * @param  {String[]} items
   * @param  {String}   liststyle
   * @return {String}   content of content OR false if NULL.
   */
  itemize: (items, liststyle = '・') => {
    return !Array.isArray(items) ? false : items.map(item => `${liststyle}${item}`).join('\n')
  },
}

/**
 * Find annotation.
 * @param  {String} filepath
 * @param  {String} annotation
 * @return {String} content of content OR false if NULL.
 */
const search = (filepath, annotation) => {
  let file = fs.readFileSync(filepath, 'utf8')
  let regex = new RegExp(`@${annotation}\([\\s\\S]*?\)(-->|@)`)
  let content = file.match(regex)

  return !content ? false : content[1].trim().replace(/\s{2,}/g, '\n')
}

module.exports = extract