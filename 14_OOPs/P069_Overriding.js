// Overriding ->
// Method overriding occurs when a child class defines a method with the same name as a method in its parent class, 
// effectively replacing the parent’s method when called on the child object.

class Bank {
    roi(){
        return 6.5;
    }
}

class SBI extends Bank{
    roi(){
        return 8.75;
    }
}

class HDFC extends Bank{
    roi(){
        return 12;
    }
}

let hdfc = new HDFC()
console.log(hdfc.roi())