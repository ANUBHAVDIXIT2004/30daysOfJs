//2629. Function Composition
/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    return function(x) {
        return functions.reduceRight((acc, fn) => fn(acc), x);
    };
};


/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

//2666. Allow One Function Call

/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let called = false;
    let result;
    
    return function(...args) {
        if (!called) {
            called = true;
            result = fn(...args);
            return result;
        } else {
            return undefined;
        }
    };
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
