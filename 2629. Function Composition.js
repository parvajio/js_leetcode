// Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

// The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

// The function composition of an empty list of functions is the identity function f(x) = x.

// You may assume each function in the array accepts one integer as input and returns one integer as output.

 

const functions = [(x) => x + 1, (x) => 2 * x];
const x = 4;

var compose = function (functions) {
    if(functions.length === 0){
        return function(x){
            return x;
        }
    }
  return function (x) {
    for (let i = functions.length-1; i >= 0; i--) {
       x = functions[i](x)
    }
    return x;
  };
};

console.log(compose(functions)(x))
