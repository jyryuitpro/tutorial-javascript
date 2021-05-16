// function work() {
//     const start = Date.now();
//     for (let i = 0; i < 1000000000; i++) {
//
//     }
//     const end = Date.now();
//     console.log(end - start + 'ms');
// }

// work();
// console.log('다음 작업');

// 브라우저 최소 지정 시간 4ms
// function work() {
//     setTimeout(() => {
//         const start = Date.now();
//         for (let i = 0; i < 1000000000; i++) {
//
//         }
//         const end = Date.now();
//         console.log(end - start + 'ms');
//     }, 0);
// }

// console.log('작업 시작!')
// work();
// console.log('다음 작업');

function work(callback) {
    setTimeout(() => {
        const start = Date.now();
        for (let i = 0; i < 1000000000; i++) {

        }
        const end = Date.now();
        console.log(end - start + 'ms');
        callback(end - start);
    }, 0);
}

console.log('작업 시작!')
work((ms) => {
    console.log('작업이 끝났어요!');
    console.log(ms + 'ms 걸렸다고 해요.');
});
console.log('다음 작업');