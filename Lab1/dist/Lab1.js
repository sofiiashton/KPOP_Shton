"use strict";
var Category;
(function (Category) {
    Category[Category["BusinessAnalyst"] = 0] = "BusinessAnalyst";
    Category[Category["Developer"] = 1] = "Developer";
    Category[Category["Designer"] = 2] = "Designer";
    Category[Category["QA"] = 3] = "QA";
    Category[Category["ScrumMaster"] = 4] = "ScrumMaster";
})(Category || (Category = {}));
;
function getAllworkers() {
    let workers = [
        { id: 1, Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, Category: Category.QA },
        { id: 2, Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, Category: Category.BusinessAnalyst },
        { id: 3, Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, Category: Category.Developer },
        { id: 4, Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, Category: Category.Designer }
    ];
    return workers;
}
;
console.log(`\nМасив робітників:`);
for (var w of getAllworkers()) {
    console.log(w);
}
function logFirstAvailable(arr) {
    console.log(`\nКількість робітників: ${arr.length}`);
    console.log(`\nДоступні робітники:`);
    for (var w of arr) {
        if (w.available == true) {
            console.log(w.Name, w.surname);
        }
    }
}
logFirstAvailable(getAllworkers());
function getWorkersNamesByCategory(cat) {
    let surnames = [];
    for (var w of getAllworkers()) {
        if (w.Category == cat) {
            surnames.push(w.surname);
        }
    }
    if (surnames.length == 0) {
        return undefined;
    }
    else {
        return surnames;
    }
}
let myCategory = Category.Designer;
if (typeof getWorkersNamesByCategory(myCategory) === 'undefined') {
    console.log(`\nУ масиві немає робітників, які належать категорії ${myCategory}.`);
}
else {
    console.log(`\nПрізвища робітників, які належать категорії ${Category[myCategory]}:`);
    var mySurnames = getWorkersNamesByCategory(myCategory);
    for (var i in mySurnames) {
        console.log(mySurnames[i]);
    }
}
console.log(`\nІмена та прізвища робітників, які належать категорії Developer:`);
getAllworkers().forEach(worker => {
    if (worker.Category == 1) {
        console.log(worker.Name, worker.surname);
    }
});
let workerID = 1;
function getWorkerByID(id) {
    let arrowFunc = getAllworkers().find(worker => worker.id === workerID);
    return arrowFunc;
}
if (typeof (getWorkerByID(workerID)) === 'undefined') {
    console.log(`\nУ масиві немає робітників за індексом ${workerID}.`);
}
else {
    console.log(`\nРобітник за індексом ${workerID}:`);
    console.log(getWorkerByID(workerID));
}
function createCustomerID(name, id) {
    return name + " " + id;
}
let myID = createCustomerID("Ann", 10);
console.log(`\nФункція createCustomerID: ${myID}`);
let IDGenerator = (name, id) => name + " " + id;
console.log(`\nСтрілочна функція: ${IDGenerator("Ann", 10)}`);
function createCustomer(name, age, city) {
    if (age && city) {
        console.log(`${name}, ${age}, ${city}`);
    }
    else if (age) {
        console.log(`${name}, ${age}`);
    }
    else {
        console.log(`${name}`);
    }
}
console.log("\nВиклик функції одним параметром:");
createCustomer("Sam");
console.log("\nВиклик функції з двома параметрами:");
createCustomer("Sam", 26);
console.log("\nВиклик функції з двома параметрами:");
createCustomer("Sam", 26, "New Jersey");
//# sourceMappingURL=Lab1.js.map