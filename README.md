# estype
EcmaScript Type Checker.


## Installation

Installing with npm:

```bash
$ npm install estodojs --save
```

This module does not have dependencies.

## Usage

In a browser:

```html
<script src="estype.js"></script>
```

In Node.js:

```js
var type = require('estype');
```


Usage example:

```js
var type = require('./estype');

var today = new Date();
if (type(today) === 'Date') {
    console.log('It\'s a date');
}

var obj = {};
if (type(obj) === 'Object') {
    console.log('It\'s an Object');
}

class MyClass extends Date {
}
var myObj = new MyClass();
if (type(myObj) === 'MyClass') {
    console.log('It\'s an instance of MyClass');
}

var result = Math.abs('text');
if (type(result) === 'NaN') {
    console.log('It\'s not a number');
}

```

## Testing and complete reference of results

For testing and as a complete reference of available results, you can see https://github.com/todojs/estype/blob/master/test.js

### Contributor

* Pablo Almunia ([github:pabloalmunia](https://github.com/pabloalmunia) or [@pabloalmunia](https://twitter.com/pabloalmunia))

