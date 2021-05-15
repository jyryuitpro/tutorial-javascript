const numbers = [10, 20, 30, 40];

const index = numbers.indexOf(30);
console.log(index);

const spliced = numbers.splice(index, 1);
console.log(spliced);
console.log(numbers);

// 기존 배열을 수정하지 않음
const sliced = numbers.slice(0, 2);
console.log(sliced);
console.log(numbers);