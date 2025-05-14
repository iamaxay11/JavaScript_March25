class Student
{
    className = "BE MECH"

    // stuDetails(){
    //     this.name = "John";
    //     this.age = 25 ;
    //     this.grade = "B"
    // }
    stuDetails(name, age, grade){
        this.name = name;
        this.age = age;
        this.grade = grade;
        
    }

    display(){
        console.log(this.name ,this.age, this.grade)
    }
}

let stu1 = new Student();
stu1.stuDetails("John", 30, "A")
stu1.display()

/*
// Class Features

Feature	        | Description
constructor()	| Method that runs when a new object is created
this keyword	| Refers to the current object
Methods	        | Functions defined inside the class
new keyword	    | Used to create a new object from a class
*/