const value = 'hello!';

function myFunction() {
    console.log('myFunction: ');
    console.log(value);
}

function otherFunction() {
    console.log('otherFunction: ');
    const value = 'bye!';
    console.log(value);
}

myFunction();
otherFunction();

console.log('global scope:' );
console.log(value);

function myFunction2() {
    const value = 'bye!';
    const anotherValue = 'world';
    function functionInside() {
        console.log('functionInside: ');
        console.log(value);
        console.log(anotherValue);
    }

    functionInside();
}

myFunction2();
console.log('global scope:' );
console.log(value);
// console.log(anotherValue);

function myFunction3() {
    const value = 'bye!';
    if (true) {
        const value = 'world';
        console.log('block scope:');
        console.log(value);
    }
    console.log('function scope: ');
    console.log(value);
}

myFunction3();
console.log('global scope:' );
console.log(value);
