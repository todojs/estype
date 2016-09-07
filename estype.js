function type(value) {
    "use strict";
    var r;
    return (
        (typeof value === 'object') ?
            (value === null) ?
                'null' :
                (typeof value.constructor === 'function' &&
                (r = Function.prototype.toString.call(value.constructor)
                    .match(/^\n?(function|class)\s*(\w*)/)[2]) !== 'Object') ?
                    (r === '') ?
                        value.constructor.name || 'anonymous function' :
                        r
                    :
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

module.exports = type;