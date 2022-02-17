class Employee {
    constructor(name, salary){
        this.name = name
        this.salary = salary
    }

    getName(){
        return this.name
    }
}


let x = new Employee('louis',5000)
console.log(x.getName())
