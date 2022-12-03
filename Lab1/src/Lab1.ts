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
    
// print all workers
console.log(`\nМасив робітників:`)

for(var w of getAllworkers()) {
        console.log(w)
}

function logFirstAvailable(arr:any[]) {
    
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

// 2. Enum
function getWorkersNamesByCategory(cat:Category) {

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

// 3. Стрілочні функції

console.log(`\nІмена та прізвища робітників, які належать категорії Developer:`)

getAllworkers().forEach( worker => {
    if(worker.Category==1) {
        console.log(worker.Name, worker.surname)
    }
});

let myID:number = 1

function getWorkerByID(id:number){

    let workerFound = getAllworkers().filter(function(worker) {
        return worker.id === myID;
    });

    return workerFound
}

if(typeof getWorkerByID(myID) === 'undefined') {
    console.log(`\nУ масиві немає робітників за індексом ${myID}.`)
} else {
    console.log(`\nРобітник за індексом ${myID}:`)

    var myWorker = getWorkerByID(myID)!
    console.log(myWorker)
}