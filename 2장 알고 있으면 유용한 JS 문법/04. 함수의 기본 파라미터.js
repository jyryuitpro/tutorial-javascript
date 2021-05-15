function calculateCircleArea(r = 1) {
    return Math.PI * r * r;
}

// const calculateCircleArea = (r = 1) => {
//     return Math.PI * r * r;
// };

// const calculateCircleArea = (r = 1) => Math.PI * r * r;

// function calculateCircleArea(r) {
//     const radius = r || 1;
//     return Math.PI * radius * radius;
// }

const area = calculateCircleArea(4);
console.log(area);