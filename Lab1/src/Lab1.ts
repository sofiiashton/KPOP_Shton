// Категорії робітників
enum Category { 
    BusinessAnalyst, 
    Developer, 
    Designer, 
    QA, 
    ScrumMaster};

// 1. Базові типи
function getAllworkers() {
    let workers = [
    {id: 1, Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, Category: Category.QA},
    {id: 2, Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, Category: Category.BusinessAnalyst},
    {id: 3, Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, Category: Category.Developer},
    {id: 4, Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, Category: Category.Designer}
    ]
    return workers;
    };
    
// Виведення всіх робітників
console.log(`\nМасив робітників:`)
for(var w of getAllworkers()) {
    console.log(w)
}

// Функція, яка виводить доступних робітників
function logFirstAvailable(arr:any[]=getAllworkers()) {
    
    // кількість робітників
    console.log(`\nКількість робітників: ${arr.length}`)

    // імя та прізвище доступного робітника
    console.log(`\nДоступні робітники:`)
    
    for(var w of arr) {
        if(w.available==true) {
            console.log(w.Name, w.surname)
        }
    }
}

logFirstAvailable(getAllworkers());

// 2. Enum. Функція, що виводить прізвища робітників, які належать вказаній категорії
function getWorkersNamesByCategory(cat:Category = Category.Designer) {

    let surnames:string[] = [];

    for(var w of getAllworkers()) {
        if(w.Category==cat) {
            surnames.push(w.surname)
        }
    }

    if(surnames.length==0) {
        // empty array
        return undefined
    } else {
        return surnames
    }
}

let myCategory:Category = Category.Designer;

if(typeof getWorkersNamesByCategory(myCategory) === 'undefined') {
    console.log(`\nУ масиві немає робітників, які належать категорії ${myCategory}.`)
} else {
    console.log(`\nПрізвища робітників, які належать категорії ${Category[myCategory]}:`)

    var mySurnames:string[] = getWorkersNamesByCategory(myCategory)!
    for(var i in mySurnames) {
        console.log(mySurnames[i])
    }
}

// 3. Стрілочні функції.

// Виведення робітників, які належать категорії Developer
console.log(`\nІмена та прізвища робітників, які належать категорії Developer:`)

getAllworkers().forEach( worker => {
    if(worker.Category==1) {
        console.log(worker.Name, worker.surname)
    }
});

// Виведення робітника за його ID
let workerID:number = 1

function getWorkerByID(id:number) {
    let arrowFunc = getAllworkers().find(worker=>worker.id===id)
    return arrowFunc
}

if(typeof(getWorkerByID(workerID)) === 'undefined') {
    console.log(`\nУ масиві немає робітників за індексом ${workerID}.`)
} else {
    console.log(`\nРобітник за індексом ${workerID}:`)

    console.log(getWorkerByID(workerID))
}

// 4. Типи функцій. 
function createCustomerID(name:string, id:number):string {
    return name + " " + id;
}

let myID:string = createCustomerID("Ann", 10)

console.log(`\nФункція createCustomerID: ${myID}`)

let IDGenerator = (name:string,id:number) => name + " " + id;

console.log(`\nСтрілочна функція: ${IDGenerator("Ann", 10)}`)

// 5. Необхідні, додаткові та залишкові параметри
function createCustomer(name:string, age?:number, city?:string) {
    if(age && city) { 
        console.log(`${name}, ${age}, ${city}`)
    } else if(age) {
        console.log(`${name}, ${age}`)
    } else {
        console.log(`${name}`)
    }
}

// Виклик функції з одним параметром
console.log("\nВиклик функції одним параметром:")
createCustomer("Sam")

// Виклик функції з двома параметрами
console.log("\nВиклик функції з двома параметрами:")
createCustomer("Sam", 26)

// Виклик функції з трьома параметрами
console.log("\nВиклик функції з трьома параметрами:")
createCustomer("Sam", 26, "New Jersey")

// Виклик функції getWorkersNamesByCategory без параметра

console.log("\nВиклик функції getWorkersNamesByCategory без параметра:")

if(typeof getWorkersNamesByCategory() === 'undefined') {
    console.log(`\nУ масиві немає робітників, які належать категорії ${myCategory}.`)
} else {
    console.log(`\nПрізвища робітників, які належать категорії ${Category[myCategory]}:`)

    var mySurnames:string[] = getWorkersNamesByCategory()!
    for(var i in mySurnames) {
        console.log(mySurnames[i])
    }
}

// Виклик функції logFirstAvailable без параметра
logFirstAvailable()

// Створення функції сheckoutWorkers()
function checkoutWorkers(customer:string, workerIDs:number[]):any[] {
    
    var workers:any[] = []

    for (const i of workerIDs) {
        if(getWorkerByID(i)!.available === true) {
            workers.push(getWorkerByID(i))
        } 
    }

    console.log(`\nІм'я замовника: ${customer}`)
    return workers
}

// Результат виклику функції сheckoutWorkers()
var checkoutWorkerID = [1, 2, 4]
var myWorkers = checkoutWorkers('Ann', checkoutWorkerID)
myWorkers.forEach(worker => {
    console.log(worker)
});