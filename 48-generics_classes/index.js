"use strict";
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayMyFullName(surname) {
        if (typeof surname !== 'string') {
            return `I have only name: ${this.name}`;
        }
        else {
            return `${this.name} ${surname}`;
        }
    }
}
class AdminUser extends User {
}
const ivan = new User('Ivan', 30);
console.log(ivan.sayMyFullName('Smith'));
const nameData = 'Alex';
const ageData = 53;
const alex = new User(nameData, ageData);
