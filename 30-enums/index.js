"use strict";
const TOP = 'Top';
const RIGHT = 'Right';
var Directions;
(function (Directions) {
    Directions[Directions["TOP"] = 0] = "TOP";
    Directions[Directions["RIGHT"] = 1] = "RIGHT";
    Directions[Directions["LEFT"] = 2] = "LEFT";
    Directions[Directions["BOTTOM"] = 3] = "BOTTOM";
})(Directions || (Directions = {}));
var TimingFunc;
(function (TimingFunc) {
    TimingFunc["EASE"] = "ease";
    TimingFunc["EASE_IN"] = "ease-in";
    TimingFunc["LINEAR"] = "linear";
})(TimingFunc || (TimingFunc = {}));
var TimingFuncN;
(function (TimingFuncN) {
    TimingFuncN[TimingFuncN["EASE"] = 1] = "EASE";
    TimingFuncN[TimingFuncN["EASE_IN"] = 2] = "EASE_IN";
    TimingFuncN[TimingFuncN["LINEAR"] = 2] = "LINEAR";
})(TimingFuncN || (TimingFuncN = {}));
function frame(elem, dir, tFunc) {
    if (dir === Directions.RIGHT) {
        console.log(tFunc);
    }
}
frame('id', Directions.RIGHT, TimingFunc.LINEAR);
