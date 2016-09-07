(function (root) {
    "use strict";
    function type(value) {
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

    // Export for node and browser
    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            module.exports = type;
        }
        exports.type = type;
    } else {
        root.type = type;
    }

})(this);