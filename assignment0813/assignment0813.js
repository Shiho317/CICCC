{ 
  // function number(numb1,numb2){
  //   return numb1 + numb2;
  // };
  // var result = number(3,2);
  // console.log(result);// way2
    //1
    function number(numb1,numb2){
      var result = numb1 +numb2;
        return result;
    };
    console.log(number(2,3));
    //2
    function suuji(a){
      var result = ++a;
      return result;
    };
    console.log(suuji(2));
    //3
    function convert(min1){
      var result = min1 * 60;
      return result;
    };
    console.log(convert(6));


    // for (var multi = 1; multi<6; multi++){
    //   function mul(total){
    //     var result = (total * multi);
    //     return result;
    //   };
    //   console.log([mul(3)]);
    // } //way2
    
    //4
    function mul(total,multi){
    var numbers = [];
    for (var multi = 1; multi<=5; multi++){
        numbers.push(total * multi);
    }
        return numbers;
    };
      console.log(mul(3,5));

      5
      // var key = {
      //   name : 'Shiho',
      //   email : 'Shiho@email.com',
      //   grade : 'WMAD',
      // };
      //   console.log(Object.entries(key));

      var key = {
        name : 'Shiho',
        email : 'shiho@email.com',
        grade : 'WMAD',
      };

      function intro(obj){
        var last = Object.entries(obj);
        return last;
      }
      console.log(intro(key));

    }


