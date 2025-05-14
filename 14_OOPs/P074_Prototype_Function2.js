function Student()
{
    this.name = "PM";
    this.age = 28;
}

let stu1 = new Student();
console.log(stu1.name, stu1.age);
stu1.salary = 100000;
console.log(stu1.name, stu1.age, stu1.salary); // PM 28 100000

let stu2 = new Student();
console.log(stu2.name, stu2.age, stu2.salary); // PM 28 undefined

Student.prototype.weight = 48;
console.log(stu1.name, stu1.age, stu1.weight); // PM 28 48
console.log(stu2.name, stu2.age, stu2.weight); // PM 28 48

