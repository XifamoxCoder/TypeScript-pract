"use strict";
// let num:number = 500
// let num2:Number = new Number(500)
// let num3 = Number(5)
// num = num2
// num2 = num
const num = 5;
const strNum = num.toString();
const str = '5';
const numStr = +str;
const department = {
    name: 'web-dev',
    budget: 50000
};
function transformDepartment(department, amount) {
    return {
        name: department.name,
        projectBudget: amount
    };
}
const mainProject = transformDepartment(department, 4000);
