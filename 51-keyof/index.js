"use strict";
let debts = 'debts';
const keys = 'name';
function printDebts(company, name, debts) {
    console.log(`Company ${company[name]}, debts: ${company[debts]}`);
}
const google = {
    name: 'Google',
    debts: 123511,
    departments: {
        sales: 'sales',
        develor: 'dev'
    },
    managment: {
        owner: 'Jogn'
    }
};
printDebts(google, 'name', 'debts');
const keys2 = 'debts';
