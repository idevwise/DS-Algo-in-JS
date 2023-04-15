/**
 * Space-complexity O(1), time-complexity O(n^2).
 * Note: There's another solution, where the sorted array is saved in
 * a sparate array. Space-complexity is O(n). The following solution
 * is preferred due to lower space-complexity.
 */
function selectionSort(arr) {
  if (!arr) {
    return;
  }
  console.log(`Unsorted: ${arr}`);
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let smallestIdx = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[smallestIdx]) {
        smallestIdx = j;
      }
    }
    swap(arr, i, smallestIdx);
  }
  console.log(`Sorted: ${arr}`);
}

function swap(arr, i, j) {
  const temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
}

selectionSort([0, 4, -1, -2, 3, 6]);
selectionSort([5, 4, 3, 12, 65, 12, 8, 121, 2, 45, 321, 2, 1]);
selectionSort([1, 2, 3, 4, 5]);
