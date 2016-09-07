function type(value) {
    "use strict";
    var r;
    if (typeof value === 'object') {
        if (value === null) {
            return 'null';
        }
        if (typeof value.constructor === 'function' &&
            (r = value.constructor.name) !== 'Object') {
            if (r === '' || r === undefined) {
                return Function.prototype.toString.call(value.constructor)
                    .match(/^\n?(?:function|class)\s*([^\s(]*)/)[1] || 'anonymous';
            }
            return r;
        }
        return Object.prototype.toString.call(value).match(/\s(.*)\]/)[1];
    } else if (typeof value === 'number') {
        return isNaN(value) ? 'NaN' : 'number';
    }
    return typeof value;
}

module.exports = type;