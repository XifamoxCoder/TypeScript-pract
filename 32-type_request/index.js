"use strict";
const dataFromControl = {
    water: 200,
    el: 350,
};
function checkReadings(data) {
    const dataFromUser = {
        water: 200,
        el: 350
    };
    if (data.el === dataFromUser.el && data.water === dataFromControl.water) {
        return true;
    }
    else
        return false;
}
const PI = 3.14;
let PIClone;
