const numbers = [10, 20, 30, 40];

// const value = numbers.shift();
// const value = numbers.pop();
// console.log(value);
// console.log(numbers);

// numbers.unshift(5);
// console.log(numbers);

// push & pop
numbers.push(50);
const value = numbers.pop();
console.log(value);
console.log(numbers);

// unshift & shift
numbers.unshift(0);
// const value = numbers.shift();
console.log(numbers);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const concated = arr1.concat(arr2);
// const concated = [...arr1, ...arr2];
console.log(arr1);
console.log(arr2);
console.log(concated);

const array = [1, 2, 3, 4, 5];
console.log(array.join());
console.log(array.join(' '));
console.log(array.join(', '));
