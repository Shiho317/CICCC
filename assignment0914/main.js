  var lowerNum = 51;

  var obj1 = {
    name: 'Matt',
    score: 80,
  }

  var obj2 = {
    name: 'Simon',
    score: 45,
  }

  console.log(Object.values(obj1));
  console.log(Object.values(obj2));



  if(obj1.score >= lowerNum&&obj2.score>= lowerNum){
    console.log('Both of you passed!');
  }else if(obj1.score >= lowerNum||obj2.score >= lowerNum){
    console.log('Matt'+',you passed. Your score:'+Object.values(obj1)+'/'+Object.values(obj2));
  }else{
    console.log('Both of you failed.')
  }

  obj1.name = 'Simon'
  obj2.name = 'Matt'

  if(obj1.score>= lowerNum&&obj2.score>= lowerNum){
    console.log('Both of you passed!');
  }else if(obj1.score>= lowerNum||obj2.score >= lowerNum){
    console.log('Simon'+',you passed. Your score:'+Object.values(obj1)+'/'+Object.values(obj2));
  }else{
    console.log('Both of you failed.');
  }

  obj1.score = 80;
  obj2.score = 80;
  
  if(obj1.score>= lowerNum&&obj2.score>= lowerNum){
    console.log('Both of you passed! Your score:'+Object.values(obj1)+'/'+Object.values(obj2));
  }else if(obj1.score >= lowerNum||obj2.score >= lowerNum){
    console.log('You passed.');
  }else{
    console.log('Both of you failed.');
  }

  obj1.score = 45;
  obj2.score = 45;

  if(obj1.score>= lowerNum&&obj2.score>= lowerNum){
    console.log('Both of you passed!');
  }else if(obj1.score >= lowerNum||obj2.score >= lowerNum){
    console.log('You passed.');
  }else{
    console.log('Both of you failed. Your score:'+Object.values(obj1)+'/'+Object.values(obj2));
  }

