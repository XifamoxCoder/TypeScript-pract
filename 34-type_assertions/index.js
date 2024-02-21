"use strict";
const fetchData = (url, method) => {
    console.log(method);
};
const reqOptions = {
    url: 'https://someurl.com',
    method: 'GET'
};
const str = 'str';
const method = 'GET';
fetchData('qqq', 'GET');
// fetchData(reqOptions.url, reqOptions.method as "GET")
fetchData(reqOptions.url, reqOptions.method);
const box = document.querySelector('.box');
const input = document.querySelector('input');
const someNumber = input.value;
console.log(someNumber * 3);
let a = 'value';
let b = { f: 100 };
let c = [];
let value = 'value';
let arr = ['sb', 'sdd'];
let obj = { f: 100 };
let T0 = value;
// let T5 = (Math.round(Math.random() * 1) ? 'yes' : 'no') as const
