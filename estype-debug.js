function typeDebug(value) {
    "use strict";
    var r;
    if (typeof value === 'object') {
        if (value === null) {
            return 'null';
        }
        if (typeof value.constructor === 'function' &&
            (r = Function.prototype.toString.call(value.constructor)
                .match(/^\n?(function|class)\s*(\w*)/)[2]) !== 'Object') {
            if (r === '') {
                return value.constructor.name || 'anonymous function';
            }
            return r;
        }
        return Object.prototype.toString.call(value).match(/\s(.*)\]/)[1];
    } else if (typeof value === 'number') {
        return isNaN(value) ? 'NaN' : 'number';
    }
    return typeof value;
}

module.exports = typeDebug;