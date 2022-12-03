"use strict";
function getAllworkers() {
    let workers = [
        { Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000 },
        { Name: 'Petro', surname: 'Petrov', available: true, salary: 1500 },
        { Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600 },
        { Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300 }
    ];
    return workers;
}
function logFirstAvailable(arr) {
    console.log(`Кількість робітників: ${arr.length}`);
    console.log(`Доступні робітники:`);
    for (var w of arr) {
        if (w.available == true) {
            console.log(w.Name, w.surname);
        }
    }
}
logFirstAvailable(getAllworkers());
//# sourceMappingURL=Lab1.js.map