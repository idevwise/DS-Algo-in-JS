function selectionSort(arr) {
    console.log(`Unsorted: ${arr}`);
    let smallest, index, temp;
    for (let i=0; i<arr.length; i++) {
        smallest = arr[i];
        index = -1;
        for (let j=i+1; j<arr.length; j++) {
            if (arr[j] < smallest) {
                smallest = arr[j];
                index = j;
            }
        }
        if (index != -1) {
            temp = arr[i];
            arr[i] = arr[index];
            arr[index] = temp;
        }
    }
    console.log(`Sorted: ${arr}`);
}

selectionSort([5, 4, 3, 12, 65, 12, 8, 121, 2, 45, 321, 2, 1]);