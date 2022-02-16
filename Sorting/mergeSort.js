function mergeSort(arr, l, r) {
    if (l >= r) {
        return;
    }
    const m = l + parseInt((r-l)/2);
    mergeSort(arr, l, m);
    mergeSort(arr, m+1, r);
    merge(arr, l, m, r);
}

function merge(arr, l, m, r) {
    const a1 = [], a2 = [];
    const len1 = m-l+1, len2 = r-m;
    let i;
    for(i=0; i<len1; i++) {
        a1[i] = arr[l+i];
    }
    a1[i] = Number.POSITIVE_INFINITY;
    for(i=0; i<len2; i++) {
        a2[i] = arr[m+i+1];
    }
    a2[i] = Number.POSITIVE_INFINITY;
    
    i = 0;
    let j = 0, k = l;
    while (i < len1 || j < len2) {
        if (a1[i] <= a2[j]) {
            arr[k] = a1[i];
            i++;
        } else {
            arr[k] = a2[j];
            j++;
        }
        k++;
    }

    while (a1[i] < Number.POSITIVE_INFINITY) {
        arr[k] = a1[i];
        i++;
        k++;
    }

    while (a2[j] < Number.POSITIVE_INFINITY) {
        arr[k] = a2[j];
        j++;
        k++;
    }

}

const arr = [5,4,3,2,1];
mergeSort(arr, 0, 4);
console.log(arr);