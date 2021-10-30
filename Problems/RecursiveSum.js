//Recursive Sum of numbers in an array.
function recursiveSum(arr) {
    //Base condition
    if (arr.length === 0) {
        return 0;
    }
    //Recursion
    return arr.shift() + recursiveSum(arr);
}

console.log(`Sum of [1, 2, 3, 4, 5, 6] = ${recursiveSum([1,2,3, 4, 5, 6])}`);