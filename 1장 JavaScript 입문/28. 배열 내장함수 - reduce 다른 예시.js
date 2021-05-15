const alpahbets = ['a', 'a', 'a', 'b', 'c', 'c', 'd', 'e'];

// acc['a'] === acc.a
const counts = alpahbets.reduce((acc, current) => {
    if (acc[current]) {
        acc[current] += 1;
    } else {
        acc[current] = 1;
    }
    return acc;
}, {});

console.log(counts);