function increaseAndPrint(n, callback) {
    setTimeout(() => {
        const increased = n + 1;
        console.log(increased);
        if (callback) {
            callback(increased);
        }
    }, 1000);
}

increaseAndPrint(0, n => {
    increaseAndPrint(n, n => {
        increaseAndPrint(n, n => {
            increaseAndPrint(n, n => {
                increaseAndPrint(n, n => {
                    console.log('작업 끝!');
                })
            });
        });
    });
});

// 성공 : resolve, 실패 : reject
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('result');
        reject(new Error());
    }, 1000);
});

myPromise.then(result => {
    console.log(result);
}).catch(e => {
    console.error(e);
});

function increaseAndPrint(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const value = n + 1;
            if (value === 5) {
                const error = new Error();
                error.name = 'ValueIsFiveError';
                reject(error);
                return;
            }
            console.log(value);
            resolve(value);
        });
    }, 1000);
}

// increaseAndPrint(0).then(n => {
    console.log('result: ', n);
    // return increaseAndPrint(n);
// }).then(n => {
    console.log('result: ', n);
    // return increaseAndPrint(n);
// }).then(n => {
    console.log('result: ', n);
    // return increaseAndPrint(n);
// }).then(n => {
    console.log('result: ', n);
    // return increaseAndPrint(n);
// }).then(n => {
    console.log('result: ', n);
    // return increaseAndPrint(n);
// }).catch(e => {
//     console.error(e);
// });

increaseAndPrint(0)
    .then(increaseAndPrint)
    .then(increaseAndPrint)
    .then(increaseAndPrint)
    .then(increaseAndPrint)
    .catch(e => {
    console.error(e);
    });
