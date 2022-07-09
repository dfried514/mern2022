//Calculating prime numbers:
// Number.prototype.isPrime = function() {
//     for( let i=2; i<=Math.sqrt(this); i++ ) {
//         if( this % i === 0 ) {
//             return false;
//         }
//     }
//     return true;
// }
// const nth_prime = n => {
//     const { performance } = require('perf_hooks');
//     const start = performance.now();
//     let primeCount = 0;
//     let num = 2; // for math reasons, 1 is considered prime
//     while( primeCount < n ) {
//         if( num.isPrime() ) {
//             primeCount++;
//         }
//         num++;
//     }
//     console.log(`The ${n}th prime number is ${num-1}`);
//     console.log(`This took ${performance.now() - start} milliseconds to run`);
// }
// nth_prime(10000);
// nth_prime(100000);
// nth_prime(1000000);
//output:
// The 10000th prime number is 104729
// This took 858.0283360481262 milliseconds to run
// The 100000th prime number is 1299709
// This took 18904.314173936844 milliseconds to run
// The 1000000th prime number is 15485863
// This took 526985.417361021 milliseconds to run

//Fibonacci:
// recursive
// function rFib( n ) {
//     if ( n < 2 ) {
//         return n;
//     }
//     return rFib( n-1 ) + rFib( n-2 );
// }
// console.log(rFib(20));
// // iterative
// function iFib( n ) {
//     const vals = [ 0, 1 ];
//     while(vals.length-1 < n) {
//         let len = vals.length;
//         vals.push( vals[len-1] + vals[len-2] );
//     }
//     return vals[n];
// }
// console.log(iFib(20));
//recursive implementation is O(n^2), much slower than:
//iterative implementation is O(n)

//Reversing a string:
//const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
// const reversed1 = story.split("").reverse().join("");
//console.log(reversed1);

// const reversed2 = s => {
//     let reverse = '';
//     for (let i = s.length - 1; i >= 0; i--) {
//         reverse += s[i];
//     }
//     return reverse;
// }
// console.log(reversed2(story));
// reversed2 is much faster; it uses a single pass over the string
// reversed1 first enters each character into a new array, reverses that array,
// then creates a new string from the characters in the array