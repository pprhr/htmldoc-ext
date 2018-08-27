# htmldoc-ext

[![npm version](https://badge.fury.io/js/htmldoc-ext.svg)](https://badge.fury.io/js/htmldoc-ext)
[![Build Status](https://travis-ci.org/pprhr/htmldoc-ext.svg?branch=master)](https://travis-ci.org/pprhr/htmldoc-ext)
[![Maintainability](https://api.codeclimate.com/v1/badges/df078c4bc3d6e365faad/maintainability)](https://codeclimate.com/github/pprhr/htmldoc-ext/maintainability)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Usage

Extract annotation content.<br>
You are free to specify the annotation.


```javascript
const htmldoc = require('htmldoc-ext')


const filepath = './index.html'
```

```html
<!--
  @description descriptiondescription
           description
           descriptiondescription
  @testtest notenotenote
  @date 2018/08/26
  @url
    - https://111.com
    - https://222.com
    - https://333.com
  @name index.html
  @list ・1111111  ・2222222  ・3333333
-->

<!DOCTYPE html>
<html>
<head>
  <title>./index.html</title>
</head>
<body>

</body>
</html>
```

**Single item**
```javascript
let test = htmldoc.content(filepath, 'testtest')
// -> notenotenote

let description = htmldoc.content(filepath, 'description')
// -> descriptiondescription\ndescription\ndescriptiondescription

let date = htmldoc.content(filepath, 'date')
// -> 2018/08/26
```

**Multiple items**
```javascript
let url = htmldoc.list(filepath, 'url')
// -> ["https://111.com", "https://222.com", "https://333.com"]

let list = htmldoc.list(filepath, 'list', '・')
// -> ["1111111", "2222222", "3333333"]
```

**Convert to Preferred list style**
```javascript
let array = ["1111111", "2222222", "3333333"]

let circleList = htmldoc.itemize(array)
// -> "・1111111\n・2222222\n・3333333"

let arrowList = htmldoc.itemize(array, '> ')
// -> "> 1111111\n> 2222222\n> 3333333"
```


## License

[The MIT License](https://raw.githubusercontent.com/pprhr/htmldoc-ext/master/LICENSE).