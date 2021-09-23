// const a = function(x, y) {

//   console.dir(arguments);
//   console.log(Array.prototype.slice.call(arguments))

//   const args = Array.prototype.slice.call(arguments)

//   console.log(x, y, args[2], args[3]);
//   console.log(x + y + args[2] + args[3])
// }

// a(10,20,30,40)

// function Product(name, price) {
//   this.name = name;
//   this.price = price;
// }
// console.log(Product);

// function Food(name, price) {
//   Product.call(this, name, price);
//   this.category = 'food';
// }
// console.log(Food);

// console.log(new Food('cheese', 5).name);
// // expected output: "cheese"

var obj = {
  name: 'Bob',
  age: 30,
  defineThis: function(){
    function a(){
      console.log(this === obj);
    }
    a()
  },
}
obj.defineThis();