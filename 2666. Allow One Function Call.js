/**
 * @param {Function} fn
 * @return {Function}
 */
let fn = (a, b, c) => a + b + c;

var once = function (fn) {
    let count = 0;
      return function (...args) {
        if (count === 0) {
          count++;
          return fn(...args);
        }
      };
    };

let onceFn = once(fn);
console.log(onceFn(1, 2, 3));
console.log(onceFn(1, 2, 3));
/**
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
