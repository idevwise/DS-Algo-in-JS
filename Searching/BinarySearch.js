function binarySearch(list, item) {
    let low = 0, high = list.length-1, mid = 0;
    while (low <= high) {
        mid = Math.floor((low+high)/2);
        if (list[mid] === item) {
            return mid;
        } else if (list[mid] < item) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}

// Test
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 7));
