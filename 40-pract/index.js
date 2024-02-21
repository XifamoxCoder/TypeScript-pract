"use strict";
var Status;
(function (Status) {
    Status["Available"] = "available";
    Status["NotAvailable"] = "not available";
})(Status || (Status = {}));
function isAvaiable(res) {
    if (res.status === Status.Available) {
        return true;
    }
    else {
        return false;
    }
}
function checkAnimalData(animal) {
    if (isAvaiable(animal)) {
        return animal.data;
    }
    else {
        return `${animal.data.message}, you can try in ${animal.data.nextUpdateIn}`;
    }
}
const animal = {
    status: Status.Available,
    data: {
        animal: 'cat',
        location: 'pisapopa',
        breed: 'yes'
    }
};
const animal2 = {
    status: Status.NotAvailable,
    data: {
        message: 'test',
        nextUpdateIn: new Date()
    }
};
console.log(checkAnimalData(animal2));
