/* 
  Stable sort.
  Visualization:
  https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
  Time Complexity
    - Best case: O(n log(n)) linearithmic.
    - Average case: O(n log(n)) linearithmic.
    - Worst case: O(n log(n)) linearithmic.
  Space: O(n) linear
  steps:
    1. create a merge function to merge two already sorted arrays into a single
        sorted array.
      - you do NOT need to work in place, ok to use a new array
    2. create mergeSort function to sort the provided array
      - split the array in half and recursively merge the halves using the
          previously created merge function.
      - splitting of arrays stops when array can no longer be split.
      - an array of 1 item is by definition sorted, so two arrays of 1 item
          can therefore be merged into a sorted array.
*/
const merge = (a1, a2) => {
    const res = [];
    let idx1 = 0, idx2 = 0;

    while (idx1 < a1.length && idx2 < a2.length) {
        if (a1[idx1] < a2[idx2])
            res.push(a1[idx1++]);
        else 
            res.push(a2[idx2++]);
    }
    while (idx1 < a1.length) {
        res.push(a1[idx1++]);
    }
    while (idx2 < a2.length) {
        res.push(a2[idx2++]);
    }
    return res;
}

// merge
const sortedA1 = [];
const sortedB1 = [];
const expectedMerge1 = [];

const sortedA2 = [5];
const sortedB2 = [2];
const expectedMerge2 = [2, 5];

const sortedA3 = [3];
const sortedB3 = [2, 3, 4, 7];
const expectedMerge3 = [2, 3, 3, 4, 7];

const sortedA4 = [1, 2, 4, 5, 6, 9];
const sortedB4 = [3, 7, 8, 10];

// [1,2,3,4]
const expectedMerge4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(merge(sortedA1, sortedB1));
console.log(merge(sortedA2, sortedB2));
console.log(merge(sortedA3, sortedB3));
console.log(merge(sortedA4, sortedB4));
