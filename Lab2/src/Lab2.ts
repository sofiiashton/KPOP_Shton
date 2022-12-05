// Категорії робітників
enum Category { 
    BusinessAnalyst, 
    Developer, 
    Designer, 
    QA, 
    ScrumMaster};

interface Worker {
    id:number;
    Name:string;
    surname:string;
    available:boolean;
    salary:number;
    Category:Category;
    markPrize?:PrizeLogger
}

function getAllworkers(): Worker[] {
    var workers:Worker[] = [
    {id: 1, Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, Category: Category.QA} as Worker,
    {id: 2, Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, Category: Category.BusinessAnalyst} as Worker,
    {id: 3, Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, Category: Category.Developer} as Worker,
    {id: 4, Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, Category: Category.Designer} as Worker
    ]
    return workers;
};

function getWorkerByID(id:number):Worker|undefined {
    let arrowFunc = getAllworkers().find(worker=>worker.id===id)
    if(arrowFunc) { 
        return arrowFunc
    } else {
        return undefined
    }
}

function printWorker(w:Worker) {
    console.log(`\n${w.Name} ${w.surname} got salary ${w.salary}`)
}

// 2.

printWorker(getWorkerByID(1)!)

interface PrizeLogger {
    prize:string
}

const logPrize = {prize:'Car'} as PrizeLogger

function getPrize(p:PrizeLogger) {
    console.log(p)
}

getPrize(logPrize)

// 3.
interface Person {
    name:string
    email:string
}

interface Author extends Person {
    numBooksPublished:number
}

interface Librarian extends Person {
    department:string
    assistCustomer:(custName:string) => void
}

type AuthorName = "J. R. R. Tolkien" | "Oscar Wilde"
let authorName:AuthorName = "J. R. R. Tolkien"

type AuthorEmail = "jrrtolkien@gmail.com" | "oscarwilde@gmail.com"
let authorEmail:AuthorEmail = "jrrtolkien@gmail.com"

type BooksPublished = 45 | 15
let booksPublished:BooksPublished = 45

const favoriteAuthor = {name:authorName, email:authorEmail, numBooksPublished:booksPublished} as Author

// type LibrarianName = "Petro Petrov" | "Vasyl Vasyliev"
// let librarianName:LibrarianName = "Petro Petrov"

// type LibrarianEmail = "ppetrov@gmail.com" | "vvasyliev@gmail.com"
// let librarianEmail:LibrarianEmail = "ppetrov@gmail.com"

// type Department = "Administration" | "Cataloging"
// let libraryDepartment:Department = "Administration"

// const favoriteLibrarian = {name:librarianName, email:librarianEmail, department:libraryDepartment, assistCustomer(custName:"Jean")} as Librarian

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
        console.log(`${this.name} is assisting ${custName}`)
    }
}

let favoriteLibrarian = {name:"Petro Petrov", email:"ppetrov@gmail.com", department: "Administration"} as Librarian

let myLibrarian: Librarian = new UniversityLibrarian(favoriteLibrarian.name,favoriteLibrarian.email,favoriteLibrarian.department)

myLibrarian.assistCustomer("Jean")

// 4.

abstract class ReferenceItem {
    // title:String;
    // year:Number;
    // constructor(newTitle:String,newYear:Number) {
    //     console.log("\nCreating a new ReferenceItem ...")

    //     this.title=newTitle;
    //     this.year=newYear
    // }

    static department:string = "High fantasy";

    private _publisher:string = "";

    public get publisher() {
        return (this._publisher).toUpperCase()
    }

    public set publisher(newPublisher:string) {
        this._publisher=newPublisher
    }

    constructor(public title:string, protected year:number) {
        this.title = title
        this.year=year
    }

    // ?? Цей метод повинен використовувати template string literal і виводити рядок «title was published in year» в консоль.
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