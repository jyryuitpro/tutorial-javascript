const array = [1, 2, 3, 4, 5, 6, 7, 8];

// const squared = [];

// for (let i = 0; i < array.length; i++) {
//     squared.push(array[i] * array[i]);
// }

// array.forEach(n => {
//     squared.push(n * n);
// });

const square = n => n * n;
// const squared = array.map(square);
const squared = array.map(n => n * n);

console.log(squared);

const items = [
    {
        id: 1,
        text: 'hello'
    },
    {
        id: 2,
        text: 'bye'
    },
];

const texts = items.map(item => item.text);
console.log(texts);

const superheroes = [
    '아이언맨',
    '캡틴 아메리카',
    '토르',
    '닥터스트레인지',
];

// 특정 값고 일치하는 것을 찾을 때
// const index = superheroes.indexOf('토르');
// console.log(index);

const todos = [
    {
        id: 1,
        text: '자바스크립트 입문',
        done: true,
    },
    {
        id: 2,
        text: '함수 배우기',
        done: true,
    },
    {
        id: 3,
        text: '객체와 배열 배우기',
        done: true,
    },
    {
        id: 4,
        text: '배열 내장함수 배우기',
        done: false,
    },
];

// 특정 값을 조건으로 찾아서 몇 번째에 있는지 알려줌
const index = todos.findIndex(todo => todo.id === 3);
console.log(index);

// 값 자체를 반환
const todo = todos.find(todo => todo.done === false);
console.log(todo);

