"use strict";
// let smth: unknown
// smth = 'str'
// let data: string[] = smth
// data.find(e => e)
// const someValue: unknown = 10
// someValue.method()
function fetchData(data) {
    if (typeof data === 'string') {
        console.log(data.toLowerCase());
    }
}
const userData = '{"isBirthdayData": true, "ageData": 40, "userNameData": "john"}';
function safeParse(s) {
    return JSON.parse(s);
}
const data = safeParse(userData);
function transferData(d) {
    if (typeof d === 'string') {
        console.log(d.toUpperCase());
    }
    else if (typeof d === 'object' && d) {
        console.log(data);
    }
    else {
        console.error('Error');
    }
}
transferData(data);
try {
    if (1) {
        throw new Error("error");
    }
}
catch (e) {
    if (e instanceof Error) {
        console.log(e.message);
    }
    else if (typeof e === 'string') {
        console.log(e.toUpperCase());
    }
}
