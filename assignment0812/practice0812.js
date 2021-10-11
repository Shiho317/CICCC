{
var str = 'lion';
var upstr = str.toLocaleUpperCase();
console.log(upstr);

var number = [1,2,3,4,5,6,7,8,9,10];
var answer = 3;
if(answer === number[2]){
  console.log('Good Work');
}else{
  console.log('Not matched');
}

var number = [1,2,3,4,5];
number[0]=100;
number[1]=200;
number[2]=300;
number[3]=400;
number[4]=500;
console.log(number);

var ary = [1,2,3,4,5];
console.log(ary.reverse());

var customers = [
  {
  name: 'Shiho',
  email: 'Shiho@ciccc.net',
  order: 1000,
},
]

  var mostexpensive = customers.filter(customers=>{
    if(customers.order>=1000){
      return true;
    }else{
      return false;
    }
  });
  console.log(mostexpensive);
}
