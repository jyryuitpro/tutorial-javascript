const ironMan = {
    name: '토니 스타크',
    actor: '로버트 다우니 주니어',
    alias: '아이언맨',
};

const {name} = ironMan;
console.log(name);

const captainAmerica = {
    name: '스티븐 로저스',
    actor: '크리스 에반스',
    alias: '캡틴 아메리카',
};

console.log(ironMan);
console.log(captainAmerica);

// function print(hero) {
//     const {alias, name, actor} = hero;
//     const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
//     console.log(text);
// }

function print({alias, name, actor}) {
    const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
    console.log(text);
}

print(ironMan);
print(captainAmerica);


