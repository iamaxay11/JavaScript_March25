let items = ["pen", "book", "pencil"];

items.forEach((item, index, arr) => {
  arr[index] = item.toUpperCase();
});

console.log(items);  // ["PEN", "BOOK", "PENCIL"]
