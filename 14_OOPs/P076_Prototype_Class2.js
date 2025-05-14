class Employee{

    constructor(eid, ename) {
        this.eid = eid;
        this.ename = ename;
    }
}

Employee.prototype.salary = 50000;

Employee.prototype.display = function(){
    console.log(this.eid, this.ename, this.salary)
}

let emp1 = new Employee(101, "Prachi");
emp1.display();

let emp2 = new Employee(102, "Priya")
emp2.display()
