# htmldoc

![Travis (.org)](https://img.shields.io/travis/pprhr/htmldoc/master.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)


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

**Single item.**
```javascript
const htmldoc = require('htmldoc')
const targetFile = './index.html'


let note = htmldoc.content(targetFile, 'note')
// -> notenotenote

let description = htmldoc.content(targetFile, 'description')
// -> descriptiondescription\ndescription\ndescriptiondescription

let date = htmldoc.content(targetFile, 'date')
// -> 2018/08/26
```

**Multiple items.**
```javascript
const htmldoc = require('htmldoc')
const targetFile = './index.html'


let url = htmldoc.list(targetFile, 'url')
// -> ["https://111.com", "https://222.com", "https://333.com"]

let list = htmldoc.list(targetFile, 'list', '・')
// -> ["1111111", "2222222", "3333333"]
```

**Convert to Preferred list style.**
```javascript
const htmldoc = require('htmldoc')
const targetFile = './index.html'


let url = htmldoc.list(targetFile, 'url')

let list = htmldoc.list(url)
// -> "・1111111\n・2222222\n・3333333"

let list = htmldoc.list(url, '> ')
// -> "> 1111111\n> 2222222\n> 3333333"

```



## License

MIT © [pprhr](https://github.com/pprhr)