const a = 1;
if (a + 1 === 2) {
    const a = 2;
    console.log('if문 안의 a 값은 ' + a);
}
console.log('if문 밖안의 a 값은 ' + a);

const b = 10;

if (b > 15) {
    console.log('a가 15보다 큽니다.');
} else {
    console.log('a가 15보다 크지 않습니다.');
}

if (b === 5) {
    console.log('5 입니다!');
} else if (b === 10) {
    console.log('10 입니다!');
} else if (b === 7) {
    console.log('7 입니다!');
} else {
    console.log('5도 아니고 10도 아닙니다. 7도 아니네요.');
}