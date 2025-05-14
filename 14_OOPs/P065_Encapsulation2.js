class Product {
    constructor(name, price) {
      this._name = name;
      this._price = price;
    }
  
    get name() {
      return this._name.toUpperCase();
    }
  
    set price(value) {
      if (value > 0) this._price = value;
    }
  }
  
  let p1 = new Product("Laptop", 40000);
  console.log(p1.name);  // LAPTOP
  p1.price = 45000;
  