const dog = {
    name: '멍멍이'
};

function getName(animal) {
    // if (animal) {
    //     return animal.name;
    // }
    // return undefined;
    return animal && animal.name;
}

const name = getName(dog);
console.log(name);

// 앞 : true / 결과 : 뒤
// 뒤 : false / 결과 : false

// 연산결과 : 'hello'
console.log(true && 'hello');

// 연산결과 : false
console.log(false && 'hello');

// 연산결과 : 'bye'
console.log('hello' && 'bye');

// 연산결과 : null
console.log(null && 'hello');

// 연산결과 : undefined
console.log(undefined && 'hello');

// 연산결과 : ''
console.log('' && 'hello');

// 연산결과 : 0
console.log(0 && 'hello');

// 연산결과 : 1
console.log(1 && 'hello');

// 연산결과 : 1
console.log(1 && 1);

const object = {name: 1};

const name = object && object.name;
console.log(name);

const namelessDog = {
    name: '',
}

function getName(animal) {
    const name = animal && animal.name;
    // if (!name) {
    //     return '이름이 없는 동물입니다.';
    // }
    // return name;
    return name || '이름이 없는 동물입니다.';
}

const name = getName(namelessDog);
console.log(name);

// 연산결과 : 'hello'
console.log(false || 'hello');

// 연산결과 : '이름없다'
console.log('' || '이름없다');

// 연산결과 : '널이다~'
console.log(null || '널이다~');

// 연산결과 : 'defined 되지 않았다!'
console.log(undefined || 'defined 되지 않았다!');

// 연산결과 : 'NaN이다~'
console.log(NaN || 'NaN이다~');

// 연산결과 : '제로다'
console.log(0 || '제로다');

console.log(1 || '음?');
console.log(true || '여기 안본다.');
console.log('와아' || '여기 안봐요');
console.log([] || '노노');








