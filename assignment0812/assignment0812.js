{
  var str = "lion";
  var upstr = str.toUpperCase();

  console.log(upstr);

  'use strict';

  var number = [1,2,3,4,5,6,7,8,9,10];
  var answer = 3;
  if(answer === number[2]){
    console.log('Good Work');
  }else{
    console.log('Not Matched');
  }

  var number = [1,2,3,4,5];
  number[0] = 100;
  number[1] = 200;
  number[2] = 300;
  number[3] = 400;
  number[4] = 500;
  console.log(number);

  var ary = [1,2,3,4,5];
  console.log(ary.reverse());

  var customers = [
    {
    name:'Shiho',
    email: 'shiho@ciccc.net',
    order: 'milk',
    price: 200,
  },
    {
    name:'Chiho',
    email:'chiho@ciccc.net',
    order: 'diamond',
    price: 100000,
  },
    {
    name: 'Yoshino',
    email: 'yoshino@ciccc.net',
    order: 'bread',
    price: 200,
  },
]
// function cost(price){
//   if(price>201){
//     return (customer.price);
//   }else{
//     return false;
//   }
//   };
//   console.log(cost);
// }
  var cost = customers.filter(customer=>{
    if(customer.price >= 201){
    return true;
  }else{
    return false;
  }
  });
  console.log(cost);}
