function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const getDog = async () => {
    await sleep(1000);
    return '멍멍이';
};

const getRabbit = async () => {
    await sleep(500);
    return '토끼';
};

const getTurtle = async () => {
    await sleep(3000);
    return '거북이';
};

// async function process() {
//     const dog = await getDog();
//     console.log(dog);
//     const rabbit = await getRabbit();
//     console.log(rabbit);
//     const turtle = await getTurtle();
//     console.log(turtle);
// }

// async function process() {
//     const start = Date.now();
//     const results = await Promise.all([getDog(), getRabbit(), getTurtle()]);
//     console.log(Date.now() - start);
//     console.log(results);
// }

async function process() {
    try {
        const [dog, rabbit, turtle] = await Promise.all([getDog(), getRabbit(), getTurtle()]);
    } catch (e) {
        console.log(e);
    }
    console.log(dog);
    console.log(rabbit);
    console.log(turtle);
}

async function process() {
    try {
        const first = await Promise.race([getDog(), getRabbit(), getTurtle()]);
    } catch (e) {
        console.log(e);
    }
    console.log(first);
}

process();