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
    var workers = [
        { id: 1, Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, Category: Category.QA },
        { id: 2, Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, Category: Category.BusinessAnalyst },
        { id: 3, Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, Category: Category.Developer },
        { id: 4, Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, Category: Category.Designer }
    ];
    return workers;
}
;
function getWorkerByID(id) {
    let arrowFunc = getAllworkers().find(worker => worker.id === id);
    if (arrowFunc) {
        return arrowFunc;
    }
    else {
        return undefined;
    }
}
function printWorker(w) {
    console.log(`\n${w.Name} ${w.surname} got salary ${w.salary}`);
}
printWorker(getWorkerByID(1));
const logPrize = { prize: 'Car' };
function getPrize(p) {
    console.log(p);
}
getPrize(logPrize);
let authorName = "J. R. R. Tolkien";
let authorEmail = "jrrtolkien@gmail.com";
let booksPublished = 45;
const favoriteAuthor = { name: authorName, email: authorEmail, numBooksPublished: booksPublished };
class UniversityLibrarian {
    constructor(name, email, department) {
        this.name = name;
        this.email = email;
        this.department = department;
    }
    assistCustomer(custName) {
        console.log(`${this.name} is assisting ${custName}`);
    }
}
let favoriteLibrarian = { name: "Petro Petrov", email: "ppetrov@gmail.com", department: "Administration" };
let myLibrarian = new UniversityLibrarian(favoriteLibrarian.name, favoriteLibrarian.email, favoriteLibrarian.department);
myLibrarian.assistCustomer("Jean");
class ReferenceItem {
    get publisher() {
        return (this._publisher).toUpperCase();
    }
    set publisher(newPublisher) {
        this._publisher = newPublisher;
    }
    constructor(title, year) {
        this.title = title;
        this.year = year;
        this._publisher = "";
        this.title = title;
        this.year = year;
    }
    printItem() {
        console.log(`\n${this.title} was published in ${this.year}`);
        console.log(`\nDepartment: ${ReferenceItem.department}`);
    }
}
ReferenceItem.department = "High fantasy";
class Encyclopedia extends ReferenceItem {
    constructor(title, year, edition) {
        super(title, year);
        this.edition = edition;
    }
    printItem() {
        console.log(`\nEdition: ${this.edition}`);
    }
    printCitation() {
        console.log(`\nTitle: ${this.title}, year: ${this.year}`);
    }
}
let refBook = new Encyclopedia("Atlas of the World", 2003, 11);
refBook.printItem();
refBook.printCitation();
//# sourceMappingURL=Lab2.js.map