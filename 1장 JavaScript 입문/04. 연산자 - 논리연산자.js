// NOT !
// AND &&
// OR ||

const a = !true;
console.log(a);

const b = true && true;
console.log(b);

const c = true || false;
console.log(c);

const value = !(true && false || true && false || !false);
// !(true && false || true && false || true)
// !(false || false || true)
// !(false || true)
// !(true)
// false
console.log(value);