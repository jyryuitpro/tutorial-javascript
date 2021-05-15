function print(person) {
    if (!person) {
        return;
    }
    console.log(person.name);
}

const person = {
    name: 'John'
};

print(person);

// falsy
console.log(!undefined);
console.log(!null);
console.log(!0);
console.log(!'');
console.log(!NaN);

// false
console.log(!false);

// 위 값을 제외한 모든 값은 truthly
console.log(!3);
console.log(!'hello');
console.log(!['array']);
console.log(![]);
console.log(!{});

const value = {a: 1};
// const value = {};

if (value) {
    console.log('value 가 Truthy 하네요.');
}

// const truthy = value ? true : false;
const truthy = !!value;
console.log(truthy);

