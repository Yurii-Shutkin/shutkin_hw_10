const arr = [1, 2, 3, 4, 5];
let sum = 0;

// Task 4

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

// let i = 0;
// while (i < arr.length) {
//     sum += arr[i];
//     i++;
// }

// let i = 0;
// do {
//     sum += arr[i];
//     i++;
// } while (i < arr.length);


// Task 5

// for (let i = 0; i < arr.length; i++) {
//     sum += (arr[i] ** 2);
// }

// let  i = 0;
// while (i < arr.length) {
//     sum += Math.pow(arr[i], 2);
//     i++;
// }

// let i = 0;
// do {
//     sum += Math.pow(arr[i], 2);
//     i++
// } while (i < arr.length);

console.log (sum);