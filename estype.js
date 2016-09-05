function typeDEBUG(value) {
    "use strict";
    var r;
    if (typeof value === 'object') {
        if (value === null) {
            return 'null';
        }
        if (typeof value.constructor === 'function' &&
            (r = Function.prototype.toString.call(value.constructor).match(/^\n?(function|class)\s*(\w*)/)[2]) !== 'Object') {
            return r;
        }
        return Object.prototype.toString.call(value).match(/\s(.*)\]/)[1];
    } else if (typeof value === 'number') {
        return isNaN(value) ? 'NaN' : 'number';
    }
    return typeof value;
}

function type(value) {
    "use strict";
    var r;
    return (
        (typeof value === 'object') ?
            (value === null) ?
                'null' :
                (typeof value.constructor === 'function' &&
                (r = Function.prototype.toString.call(value.constructor).match(/^\n?(function|class)\s*(\w*)/)[2]) !== 'Object') ?
                    r :
                    Object.prototype.toString.call(value).match(/\s(.*)\]/)[1]
            :
            (typeof value === 'number') ?
                (isNaN(value)) ?
                    'NaN' :
                    'number'
                :
                typeof value
    );
}


function type99(value) {
    "use strict";
    return (
        typeof value === 'object' ?
            value === null ?
                'null'
                : typeof value.constructor === 'function' ?
                value.constructor.name !== undefined ?
                    value.constructor.name !== 'Object' ?
                        value.constructor.name
                        : Object.prototype.toString.call(value).match(/\s(.*)\]/)[1]
                    : value.constructor.toString().match(/^\n?function\s(.*)\(/)[1]
                : Object.prototype.toString.call(value).match(/\s(.*)\]/)[1]
            : typeof value === 'number' ?
            isNaN(value) ? 'NaN' : 'number'
            : typeof value
    );
}
function type2(value) {
    "use strict";
    if (typeof value === 'object') {
        if (value === null) {
            return 'null';
        }
        if (typeof value.constructor === 'function') {
            if (value.constructor.name !== undefined) {
                if (value.constructor.name !== 'Object') {
                    return value.constructor.name;
                } else {
                    return Object.prototype.toString.call(value).match(/\s(.*)\]/)[1]
                }
            } else {
                return value.constructor.toString().match(/^[.\n]function\s(.*)\(/)[1]
            }
        } else {
            return Object.prototype.toString.call(value).match(/\s(.*)\]/)[1];
        }
    } else if (typeof value === 'number') {
        return isNaN(value) ? 'NaN' : 'number';
    } else {
        return typeof value;
    }
}
function type0(value) {
    "use strict";
    if (typeof value === 'object') {
        if (value === null) {
            return 'null';
        }
        if (typeof value.constructor !== 'function' || value.constructor.name === undefined) {
            return Object.prototype.toString.call(value).match(/\s(.*)\]/)[1];
        } else {
            if (value.constructor.name !== 'Object') {
                return value.constructor.name;
            } else {
                return Object.prototype.toString.call(value).match(/\s(.*)\]/)[1]
            }
        }
    } else if (typeof value === 'number') {
        return isNaN(value) ? 'NaN' : 'number';
    } else {
        return typeof value;
    }
}
function type3(value) {
    "use strict";
    return (
        (typeof value === 'object') ?
            (value === null) ?
                'null'
                : (typeof value.constructor !== 'function') ?
                Object.prototype.toString.call(value).match(/\s(.*)\]/)[1]
                : (value.constructor.name === undefined) ?
                value.constructor.toString().match(/^\n?function\s(.*)\(/)[1]
                : value.constructor.name
            : (typeof value === 'number') ?
            isNaN(value) ? 'NaN' : 'number'
            : typeof value
    );
}


module.exports = type;