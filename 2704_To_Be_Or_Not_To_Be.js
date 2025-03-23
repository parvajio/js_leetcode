
var expect = function(val) {
    return {
        toBe: function(newVal){
            if(newVal === val) {
                return true}
            else{
                throw new Error("Not Equal");
            }
        },
        notToBe: function(newVal){
            if(newVal !== val){
                return true;
            }else{
                throw new Error("Equal");
            }
        }
    }
};

expect(5).toBe(5)

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */