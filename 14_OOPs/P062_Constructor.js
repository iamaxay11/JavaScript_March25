class Student
{
    className = "BE MECH"

    // stuDetails(){
    //     this.name = "John";
    //     this.age = 25 ;
    //     this.grade = "B"
    // }
    constructor(name, age, grade){
        this.name = name;
        this.age = age;
        this.grade = grade;
        
    }

    display(){
        console.log(this.name ,this.age, this.grade)
    }
}

let stu1 = new Student("John", 30, "A");
stu1.display()