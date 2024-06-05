// Challenge:

// Consider the following assignment below
// let first_number=15; 
// let second_number=17;

// Write 3 ways using Javascript code to swap the values of the code above above.

// The final output:
// first_number=17;
// second_number=15

// 1. Use temporary variables:
let first_number = 15;
let second_number = 17;

let temp = first_number;
first_number = second_number;
second_number = temp;

console.log(`first_number=${first_number}; second_number=${second_number}`);

// 2. Arthmetic oparation:
let first_number = 15;
let second_number = 17;

first_number = first_number + second_number;
second_number = first_number - second_number;
first_number = first_number - second_number;

console.log(`first_number=${first_number}; second_number=${second_number}`);

// 3. Using destructuring assignment
let first_number = 15;
let second_number = 17;

[first_number, second_number] = [second_number, first_number];

console.log(`first_number=${first_number}; second_number=${second_number}`);

