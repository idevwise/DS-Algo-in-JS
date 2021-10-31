function recursiveBinarySearch(list, item, low, high) {
    if (low > high) {
        return -1;
    }
    const mid = Math.floor((high+low)/2);

    if (item === list[mid]) {
        return mid;
    }
    
    if (item < list[mid]) {
        return recursiveBinarySearch(list, item, low, mid-1);
    }

    if (item > list[mid]) {
        return recursiveBinarySearch(list, item, mid+1, high);
    }
    
}

const list = [1,2,3,4,5,6,7,8,9];
console.log(recursiveBinarySearch(list, 5, 0, list.length-1));