class Employee{

    constructor(eid, ename) {
        this.eid = eid;
        this.ename = ename;
    }
}

Employee.prototype.salary = 50000;

let emp1 = new Employee(101, "Prachi");
console.log(emp1.eid, emp1.ename, emp1.salary)

let emp2 = new Employee(102, "Priya")
console.log(emp2.eid, emp2.ename, emp2.salary)
