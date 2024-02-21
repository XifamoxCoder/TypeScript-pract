"use strict";
const salary = 500;
const userData = '{"isBirthdayData": true, "ageData": 40, "userNameData": "john"}';
const userObj = JSON.parse(userData);
console.log(userObj);
const isOkay = true;
let movement = false;
if (isOkay) {
    movement = 'moving';
}
