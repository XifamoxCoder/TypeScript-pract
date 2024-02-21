"use strict";
// Condition ? true : false
// SomeType extends OtherType ? TrueType : FalseType
const str = 'Hellos';
const user = {
    created: 'created'
};
// function calculateDailyCalories(str: string): IDataFromUser
// function calculateDailyCalories(num: number): IDataFromBase
function calculateDailyCalories(numOfStr) {
    if (typeof numOfStr === 'string') {
        const obj = {
            weight: numOfStr
        };
        return obj;
    }
    else {
        const obj = {
            calories: numOfStr
        };
        return obj;
    }
}
