enum Category { 
    BusinessAnalyst, 
    Developer, 
    Designer, 
    QA, 
    ScrumMaster};

// 1. Базові типи
function getAllworkers() {
    let workers = [
    {Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, Category: Category.QA},
    {Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, Category: Category.BusinessAnalyst},
    {Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, Category: Category.Developer},
    {Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, Category: Category.Designer}
    ]
    return workers;
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
