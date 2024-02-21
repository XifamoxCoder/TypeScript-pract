"use strict";
function printMsg(msg) {
    if (Array.isArray(msg)) {
        msg.forEach((m) => console.log(m));
    }
    else if (isNumber(msg)) {
        console.log(msg, 1);
    }
    else {
        console.log(msg, 0);
    }
    console.log(msg, 5);
}
printMsg(4);
// function isNumber(n: string[] | number | boolean): n is number {
//   return typeof n === 'number'
// }
function isNumber(n) {
    return typeof n === 'number';
}
function isCar(car) {
    return car.wheels.number !== undefined;
}
function isShip(ship) {
    return "sail" in ship;
}
const car1 = {
    name: 'car',
    engine: 'v7'
};
function repairVahicle(vehicle) {
    // if (isCar(vehicle)) {
    //   vehicle.wheels
    // } else if (isShip(vehicle)) {
    //   vehicle
    // } else {
    //   vehicle.wings
    // }
    switch (vehicle.name) {
        case 'car':
            console.log(vehicle.wheels * 2);
            break;
        case 'ship':
            console.log(vehicle.sail);
            break;
        case 'airplane':
            console.log(vehicle.wings);
            break;
        default:
            // const smth: never = vehicle
            console.log('Oops');
    }
}
repairVahicle(car1);
