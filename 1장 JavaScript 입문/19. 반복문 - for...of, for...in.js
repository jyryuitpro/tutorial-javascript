const numbers = [10, 20, 30, 40, 50];

for (let number of numbers) {
    console.log(number);
}

const doggy = {
    name: '멍멍이',
    sound: '멍멍',
    age: 2,
};

console.log(Object.entries(doggy));
console.log(Object.keys(doggy));
console.log(Object.values(doggy));

console.log(doggy.name);

for (let key in doggy) {
    console.log(`${key}: ${doggy[key]}`);

}