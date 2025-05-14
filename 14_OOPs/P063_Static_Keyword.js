// Static varibales and methods belong to the class, not to objects.

class Test
{
    static a = 10;
           b = 20;

    static m1(){
            console.log("This is static Method")
    }

    m2(){
        console.log("This is Non-static Method")
    }
}

// We can directly access static variables and methods using class name
console.log(Test.a) // 10
// console.log(Test.b) // undefined

Test.m1() // This is static Method
// Test.m2(); // error

// We can access not-static variables and methods using objects
let t = new Test();
console.log(t.b); // 20
t.m2(); // This is Non-static Method

// We can change value of static variables
Test.a = 100;
console.log(Test.a)

