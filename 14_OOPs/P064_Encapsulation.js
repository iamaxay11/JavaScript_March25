// Encapsulation- Encapsulation is the concept of keeping data and related functions together in one unit (object) 
// while restricting direct access to some of the data.

/*
Why is Encapsulation Important?
1. Helps in data hiding.
2. Reduces complexity.
3. Enhances maintainability.
4. Protects object integrity by preventing unintended interference.
*/

class Student
{

    constructor(){

        let name, marks

    }

    getName(){
        return this.name 
    }
    setName(name){
        this.name = name;
    }

    getmarks(){
        return this.marks 
    }
    setMarks(marks){
        this.marks = marks;
    }
}

let stu1 = new Student();
stu1.setName("Prajakta");
stu1.setMarks(99)
console.log(stu1.getName(), stu1.getmarks())