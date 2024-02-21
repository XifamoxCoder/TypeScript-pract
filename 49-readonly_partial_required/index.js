"use strict";
const arr = [1, 2, 3];
const arr1 = [1, 2, 3];
const roarr = ['dadw'];
const state = {
    data: {
        name: 'John'
    }
};
const strictState = {
    data: {
        name: 'dads'
    },
    tag: 'fa'
};
function action(state) {
    state.data.name = 'asd';
}
