// jshint node: true, esversion: 6
"use strict";
const type = require('./estype');

// Primitive types
console.assert(type(null)                                     === 'null');
console.assert(type(undefined)                                === 'undefined');
console.assert(type()                                         === 'undefined');
console.assert(type(void(0))                                  === 'undefined');
console.assert(type("hello")                                  === 'string');
console.assert(type(`hello`)                                  === 'string');
console.assert(type('hello')                                  === 'string');
console.assert(type(100)                                      === 'number');
console.assert(type(true)                                     === 'boolean');
console.assert(type(false)                                    === 'boolean');
console.assert(type(Boolean(''))                              === 'boolean');
console.assert(type(NaN)                                      === 'NaN');
console.assert(type(10)                                       === 'number');
console.assert(type(10.10)                                    === 'number');
console.assert(type(Infinity)                                 === 'number');
console.assert(type(Number.MAX_VALUE)                         === 'number');
console.assert(type(Number(10))                               === 'number');
console.assert(type(function a() {})                          === 'function');
console.assert(type(() => {})                                 === 'function');
console.assert(type(function *() {yield true})                === 'function');
console.assert(type(new Function('return 1'))                 === 'function');
const GeneratorFunction = Object.getPrototypeOf(function*(){}).constructor;
console.assert(type(new GeneratorFunction('yield true;'))     === 'function');
console.assert(type(Symbol('h'))                              === 'symbol');
console.assert(type(Symbol.iterator)                          === 'symbol');

// Object
console.assert(type({})                                       === 'Object');
console.assert(type(new Object())                             === 'Object');
console.assert(type(Object.create(null))                      === 'Object');

// Wrappers
console.assert(type(new Boolean(1))                           === 'Boolean');
console.assert(type(new Boolean(false))                       === 'Boolean');
console.assert(type(new String('hola'))                       === 'String');
console.assert(type(new Number(10))                           === 'Number');
console.assert(type(new Number(10.10))                        === 'Number');

// Defined objects
console.assert(type([])                                       === 'Array');
console.assert(type(/^hello/)                                 === 'RegExp');
console.assert(type(new RegExp('^hello'))                     === 'RegExp');
console.assert(type(new Array(1, 2, 3))                       === 'Array');
console.assert(type(new Array())                              === 'Array');
console.assert(type(new ArrayBuffer(10))                      === 'ArrayBuffer');
console.assert(type(new DataView(new ArrayBuffer(10)))        === 'DataView');
console.assert(type(new Float32Array(10))                     === 'Float32Array');
console.assert(type(new Float64Array(10))                     === 'Float64Array');
console.assert(type(new Uint16Array(19))                      === 'Uint16Array');
console.assert(type(new Uint32Array(19))                      === 'Uint32Array');
console.assert(type(new Uint8Array(19))                       === 'Uint8Array');
console.assert(type(new Uint8ClampedArray(19))                === 'Uint8ClampedArray');
console.assert(type(new Date())                               === 'Date');
console.assert(type(new Date(2016,0,1))                       === 'Date');
console.assert(type(new Date(1472985071617))                  === 'Date');
console.assert(type(new Error())                              === 'Error');
console.assert(type(new EvalError())                          === 'EvalError');
console.assert(type(new RangeError())                         === 'RangeError');
console.assert(type(new ReferenceError())                     === 'ReferenceError');
console.assert(type(new SyntaxError())                        === 'SyntaxError');
console.assert(type(new TypeError())                          === 'TypeError');
console.assert(type(new URIError())                           === 'URIError');
console.assert(type(new Promise(function (a, b) {}))          === 'Promise');
console.assert(type(new Map([[0,1], [1,2], [2,3]]))           === 'Map');
console.assert(type(new Set([1, 2, 3]))                       === 'Set');
console.assert(type(new WeakMap())                            === 'WeakMap');
console.assert(type(new WeakSet())                            === 'WeakSet');

// Global objects
console.assert(type(Intl)                                     === 'Object');
console.assert(type(Intl.Collator)                            === 'function');
console.assert(type(Intl.DateTimeFormat)                      === 'function');
console.assert(type(Intl.NumberFormat)                        === 'function');
console.assert(type(JSON)                                     === 'JSON');
console.assert(type(Math)                                     === 'Math');

// Proxy and Reflect
console.assert(type(new Proxy({}, { }))                       === 'Object');
console.assert(type(Reflect)                                  === 'Object');

// Iterators
console.assert(type((new Set())[Symbol.iterator]())           === 'Set Iterator');
console.assert(type((new Map())[Symbol.iterator]())           === 'Map Iterator');
console.assert(type((new Array(10))[Symbol.iterator]())       === 'Array Iterator');
console.assert(type((new Uint16Array(19))[Symbol.iterator]()) === 'Array Iterator');
console.assert(type((new String('hola'))[Symbol.iterator]())  === 'String Iterator');

// Object from function
function Polygon(height, width) {
    this.height = height;
    this.width = width;
}
console.assert(type(Polygon)                                  === 'function');
console.assert(type(new Polygon(10, 10))                      === 'Polygon');

// Object from class
class Polygon2 {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}
console.assert(type(Polygon2)                                 === 'function');
console.assert(type(new Polygon2(10, 10))                     === 'Polygon2');

// Derived class
class MyDate extends Date {
    constructor(...args) {
        super(...args);
    }
}
console.assert(type(MyDate)                                   === 'function');
console.assert(type(new MyDate(2016, 0, 1))                   === 'MyDate');

class MyDate2 extends MyDate {
    constructor(...args) {
        super(...args);
    }
}
console.assert(type(MyDate2)                                  === 'function');
console.assert(type(new MyDate2(2016, 0, 1))                  === 'MyDate2');

process.exit(0);

