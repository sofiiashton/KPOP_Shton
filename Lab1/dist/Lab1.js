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
        { Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, Category: Category.QA },
        { Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, Category: Category.BusinessAnalyst },
        { Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, Category: Category.Developer },
        { Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, Category: Category.Designer }
    ];
    return workers;
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
//# sourceMappingURL=Lab1.js.map