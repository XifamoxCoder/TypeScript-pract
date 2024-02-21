"use strict";
function proccesingData(data, options) {
    data.length;
    switch (typeof data) {
        case "string":
            return `${data}, speed ${options}`;
            break;
        case "number":
            return `${data}, speed: ${options}`;
            break;
        default:
            return "Not valid";
    }
}
let res1 = proccesingData([1], 'fast');
let res2 = proccesingData(["1"], 'slow');
const res3 = proccesingData([12], 'slow');
function processing(data) {
    return data;
}
let newFunc = processing;
const saver = {
    // processing(data) {
    //   console.log(data)
    //   return data;
    // }
    processing: processing
};
