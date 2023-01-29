const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }

let newObj=Object.assign(objA, objB);
console.log(newObj);