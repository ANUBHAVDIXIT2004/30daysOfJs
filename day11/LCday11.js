//2634. Filter Elements from Array
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let newarr = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i],i)) {
            newarr.push(arr[i]);
        }
    }
    return newarr;
};

//2626. Array Reduce Transformation
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let val = init;
    for (let i = 0; i < nums.length; i++) {
        val = fn(val, nums[i]);
    }
    return val;
};
