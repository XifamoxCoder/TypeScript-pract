"use strict";
// Condition ? true: false
const str = 'Hello';
const user = {
    created: 'created'
};
function calculateDailyCalories(numOrStr) {
    if (typeof numOrStr === 'string') {
        const obj = {
            weight: numOrStr
        };
        return obj;
    }
    else {
        const obj = {
            calories: numOrStr
        };
        return obj;
    }
}
