"use strict";
const user = {
    login: 'yser',
    password: 'qwerty',
    age: 5,
    addr: 'faf2'
};
const userFreeze = {
    login: 'yser',
    password: 'qwerty',
    age: 5,
};
// userFreeze.age = 1418
// userFreeze.password = '14'
let dbName;
sendUserData(user, 'sd');
function sendUserData(obj, db) {
    var _a;
    dbName = "12345";
    console.log((_a = obj.parents.father) === null || _a === void 0 ? void 0 : _a.toLowerCase(), db.toLowerCase());
}
const basicPorts = [3000, '3001', '5555'];
// basicPorts[0] = 5
