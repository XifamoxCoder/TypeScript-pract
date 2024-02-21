"use strict";
// const test: null = null
// const test2: any = null
// function getRndData() {
//   if (Math.random() < 0.5) {
//     return null
//   } else {
//     return '  Some data  '
//   }
// }
// const data = getRndData()
// const trimmedData = data ? data.trim() : null
let id = Symbol("id");
const data = {
    [id]: 1
};
console.log(data[id]);
const num1 = 1n;
const num2 = 2n;
console.log(num1 + num2);
