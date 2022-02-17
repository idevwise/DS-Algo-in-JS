function insertionSort(arr) {
    let key;
    for(let i = 1; i < arr.length; i++) {
        key = arr[i];
        for(let j=i-1; j>=0; j--) {
            if(key <= arr[j]) {
                arr[j+1] = arr[j];
                arr[j] = key;
            } 
        }
    }
}

const arr = [5,4,3,2,1, 17, 20, 11, 1999, 3445, 2000, 122];
insertionSort(arr);
console.log(arr);