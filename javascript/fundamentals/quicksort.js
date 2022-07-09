const quicksort = arr => {
    const partition = (s, e) => {
        let i = s;
        let j = e;
        // random pivot value
        const pivotVal = arr[Math.floor(Math.random() * (e - s + 1) + s)];
        // move elements that are less than pivot to left of pivot
        // move elements that are greater than pivot to right of pivot
        while (i < j) {
            // iterating from left, while element less than pivot value
            while (i < j && arr[i] < pivotVal) { 
                i++;
            }
            // iterating from right, while element greater than pivot value
            while (j > i && arr[j] > pivotVal) {
                j--;
            }
            // until iterations meet, return that index as pivot position
            // elements on left are less than pivot, on right are greater than pivot
            // may be swapping pivot value, which is ok
            if (i == j) return j;
            // otherwise, swap a small value on right for large value on left
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    const qsort = (s, e) => {
        // call partition function recursively
        // each pass divides the problem into two sub-problems
        const pivot = partition(s, e);
        if (pivot > s) qsort(s, pivot - 1);
        if (pivot < e) qsort(pivot + 1, e);
    }
    qsort(0, arr.length - 1);
    return arr;
}

const arr = [4,8,5,7,1,6,10,2,3,9];
console.log(quicksort(arr));

// best and average time complexity: O(nlogn)
// worst time complexity: O(n^2)
// worst case is when pivot is chosen to be element that causes swaps at every iteration
// if pivot was smallest or largest element
