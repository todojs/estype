(function (root) {
    "use strict";

    // type
    function type(value) {
        var r;
        return (
            (typeof value === 'object') ?
                (value === null) ?
                    'null' :
                    (typeof value.constructor === 'function' &&
                    (r = value.constructor.name) !== 'Object') ?
                        (r === '' || r === undefined) ?
                        Function.prototype.toString.call(value.constructor)
                            .match(/^\n?(function|class)(\w?)/)[2] || 'anonymous' :
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