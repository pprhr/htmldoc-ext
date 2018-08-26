# htmldoc-ext

[![npm version](https://badge.fury.io/js/htmldoc-ext.svg)](https://badge.fury.io/js/htmldoc-ext)
[![Build Status](https://travis-ci.org/pprhr/htmldoc-ext.svg?branch=master)](https://travis-ci.org/pprhr/htmldoc-ext)
[![Maintainability](https://api.codeclimate.com/v1/badges/df078c4bc3d6e365faad/maintainability)](https://codeclimate.com/github/pprhr/htmldoc-ext/maintainability)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Usage

Extract annotation content.<br>
You are free to specify the annotation.


**./index.html**
```html
<!--
  @description descriptiondescription
           description
           descriptiondescription
  @note notenotenote
  @date 2018/08/26
  @url
    - https://111.com
    - https://222.com
    - https://333.com
  @name index.html
  @list ・1111111  ・2222222  ・3333333
-->
```

<br>

**Single item.**
```javascript
const htmldoc = require('htmldoc-ext')
const targetFile = './index.html'


let note = htmldoc.content(targetFile, 'note')
// -> notenotenote

let description = htmldoc.content(targetFile, 'description')
// -> descriptiondescription\ndescription\ndescriptiondescription

let date = htmldoc.content(targetFile, 'date')
// -> 2018/08/26
```

<br>

**Multiple items.**
```javascript
const htmldoc = require('htmldoc-ext')
const targetFile = './index.html'


let url = htmldoc.list(targetFile, 'url')
// -> ["https://111.com", "https://222.com", "https://333.com"]

let list = htmldoc.list(targetFile, 'list', '・')
// -> ["1111111", "2222222", "3333333"]
```

<br>

**Convert to Preferred list style.**
```javascript
const htmldoc = require('htmldoc-ext')
const targetFile = './index.html'


let url = htmldoc.list(targetFile, 'url')

let list = htmldoc.list(url)
// -> "・1111111\n・2222222\n・3333333"

let list = htmldoc.list(url, '> ')
// -> "> 1111111\n> 2222222\n> 3333333"

```


## License

MIT © [pprhr](https://github.com/pprhr)