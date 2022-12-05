// Категорії робітників
enum Category { 
    BusinessAnalyst, 
    Developer, 
    Designer, 
    QA, 
    ScrumMaster};

// 1.1. Інтерфейс Worker
interface Worker {
    id:number;
    Name:string;
    surname:string;
    available:boolean;
    salary:number;
    Category:Category;
    markPrize?:PrizeLogger // використовує інтерфейс PrizeLogger
}

// 1.2. Функція getAllworkers() з використанням інтерфейсу Worker
function getAllworkers(): Worker[] {
    var workers:Worker[] = [
    {id: 1, Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, Category: Category.QA} as Worker,
    {id: 2, Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, Category: Category.BusinessAnalyst} as Worker,
    {id: 3, Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, Category: Category.Developer} as Worker,
    {id: 4, Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, Category: Category.Designer} as Worker
    ]
    return workers;
};

// 1.3. Функція getWorkerByID з використанням інтерфейсу Worker та об'єднанням типів undefined
function getWorkerByID(id:number):Worker|undefined {
    let arrowFunc = getAllworkers().find(worker=>worker.id===id)
    if(arrowFunc) { 
        return arrowFunc
    } else {
        return undefined
    }
}

// 1.4. Функція для виводу імені та зарплати робітника
function printWorker(w:Worker) {
    console.log(`\n${w.Name} ${w.surname} got salary ${w.salary}`)
}
printWorker(getWorkerByID(1)!)

// 2.1. Інтерфейс PrizeLogger
interface PrizeLogger {
    prize:string
}

// 2.3. 
const logPrize = {prize:'Car'} as PrizeLogger

function getPrize(p:PrizeLogger) {
    console.log(`\nPrize: ${p.prize}`)
}

getPrize(logPrize)

// 3.1. Інтерфейс Person
interface Person {
    name:string
    email:string
}

// 3.2. Інтерфейс Author на основі інтерфейсу Person
interface Author extends Person {
    numBooksPublished:number
}

// 3.3. Інтерфейс Librarian на основі інтерфейсу Person
interface Librarian extends Person {
    department:string
    assistCustomer:(custName:string) => void
}

// 3.4.
type AuthorName = "J. R. R. Tolkien" | "Oscar Wilde"
let authorName:AuthorName = "J. R. R. Tolkien"

type AuthorEmail = "jrrtolkien@gmail.com" | "oscarwilde@gmail.com"
let authorEmail:AuthorEmail = "jrrtolkien@gmail.com"

type BooksPublished = 45 | 15
let booksPublished:BooksPublished = 45

const favoriteAuthor = {name:authorName, email:authorEmail, numBooksPublished:booksPublished} as Author

// 3.5.

// type LibrarianName = "Petro Petrov" | "Vasyl Vasyliev"
// let librarianName:LibrarianName = "Petro Petrov"

// type LibrarianEmail = "ppetrov@gmail.com" | "vvasyliev@gmail.com"
// let librarianEmail:LibrarianEmail = "ppetrov@gmail.com"

// type Department = "Administration" | "Cataloging"
// let libraryDepartment:Department = "Administration"

// const favoriteLibrarian = {name:librarianName, email:librarianEmail, department:libraryDepartment, assistCustomer(custName:"Jean")} as Librarian

// 4.1. Клас UniversityLibrarian
class UniversityLibrarian implements Librarian {
    public name:string;
    public email:string;
    public department: string;

    constructor(name:string, email:string, department:string) {
        this.name=name;
        this.email=email;
        this.department=department;
    }

    assistCustomer(custName:string): void {
        console.log(`\n${this.name} is assisting ${custName}`)
    }
}

// 4.3.
let favoriteLibrarian = {name:"Petro Petrov", email:"ppetrov@gmail.com", department: "Administration"} as Librarian

let myLibrarian: Librarian = new UniversityLibrarian(favoriteLibrarian.name,favoriteLibrarian.email,favoriteLibrarian.department)

myLibrarian.assistCustomer("Jean")

// 5. Клас ReferenceItem
abstract class ReferenceItem {
    // title:String;
    // year:Number;
    // constructor(newTitle:String,newYear:Number) {
    //     console.log("\nCreating a new ReferenceItem ...")

    //     this.title=newTitle;
    //     this.year=newYear
    // }

    // Статична рядкова властивість department 
    static department:string = "High fantasy";

    // Приватна властивість _publisher
    private _publisher:string = "";

    public get publisher() {
        return (this._publisher).toUpperCase()
    }

    public set publisher(newPublisher:string) {
        this._publisher=newPublisher
    }

    // Створення властивостей через параметри конструктора
    constructor(public title:string, protected year:number) {
        this.title = title
        this.year=year
    }

    printItem():void {
        console.log(`\n${this.title} was published in ${this.year}`)

        // Вивід властивості department
        console.log(`\nDepartment: ${ReferenceItem.department}`)
    }

    abstract printCitation() : void
}

// let ref = new ReferenceItem("The Fellowship of the Ring", 1954)
// ref.printItem()

// ref.publisher = "Your publisher name goes here"
// console.log(`\n${ref.publisher}`)

// Клас Encyclopedia як нащадок класу ReferenceItem
class Encyclopedia extends ReferenceItem {
    constructor (title:string, year: number, public edition:number) {
        super(title, year)
    }

    printItem(): void {
        console.log(`\nEdition: ${this.edition}`)
    }

    printCitation(): void {
        console.log(`\nTitle: ${this.title}, year: ${this.year}`)
    }
}

let refBook = new Encyclopedia("Atlas of the World", 2003, 11)
refBook.printItem()
refBook.printCitation()