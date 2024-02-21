"use strict";
function processing(data) {
    return data;
}
let newFunc = processing;
const num = 5;
const user = {
    login: 'dyt',
    age: 10,
    parents: {
        mother: 'ssa',
        father: 'no papa',
        secondFather: 'no papa',
        married: true
    }
};
const data2 = [5];
const depositMoney = (amount) => {
    console.log(`req to server with amount: ${amount}`);
    return amount;
};
depositMoney(599);
depositMoney('500');
// depositMoney(true)
