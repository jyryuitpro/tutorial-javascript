const dog = {
    name: '멍멍이',
    age: 2,
    cute: true,
    sample: {
        a: 1,
        b: 2,
    },
    'key with space': 'asdf',
};

console.log(dog);
console.log(dog.name);
console.log(dog.age);

const ironMan = {
    name: '토니 스타크',
    actor: '로버트 다우니 주니어',
    alias: '아이언맨',
};

const captainAmerica = {
    name: '스티븐 로저스',
    actor: '크리스 에반스',
    alias: '캡틴 아메리카',
};

console.log(ironMan);
console.log(captainAmerica);

function print(hero) {
    const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor} 입니다.`;
    console.log(text);
}

print(ironMan);
print(captainAmerica);


