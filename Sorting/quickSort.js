//Divide and Conquer
/*
Complexity:
Avg case - O(nlogn). as below, with a random pivot.
Best case - O(nlogn). When pivot is from the middle of the array when sorted.
Worst case - O(n^2). For example, in a sorted array with a logic to 
select first element as the pivot.
*/
import {randInt} from '../util.js';
function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    //const pivot = arr[0];
    const randIdx = randInt(0, arr.length);
    const pivot = arr[randIdx];
    console.log(arr.length, randIdx, pivot);
    const left = [], right = [];
    //modified the loop to work with random pivot
    for (let i=0; i<arr.length; i++) {
        if (i != randIdx) {
            (arr[i] <= pivot) ? left.push(arr[i]) : right.push(arr[i]);
        }
    }
    return quickSort(left).concat(pivot).concat(quickSort(right));
}

console.log(quickSort([5, 4, 3, 12, 65, 12, 8, 121, 2, 45, 321, 2, 1]));
//console.log(quickSort([5, 4, 3, 12, 65, 12]));