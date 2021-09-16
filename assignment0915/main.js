const students = [];
students.push({name:'John', score1:47, score2:46});
students.push({name:'Bob', score1:23, score2:24});
students.push({name:'Nick', score1:40, score2:35});
students.push({name:'Alex', score1:44, score2:45});

console.log(students);


let degrees = ['A', 'B', 'C', 'D', 'E'];
console.log(degrees);

let limits = [91, 81, 71, 61, 51];
console.log(limits);

function totalScore (a,b,callback){
  const resultA = callback(a,b);
  console.log(resultA);
}
function total(a,b){
  return a + b;
}
totalScore(students[0].score1, students[0].score2, total);

function totalScore (a,b,callback){
  const resultB = callback(a,b);
  console.log(resultB);
}
function total(a,b){
  return a+b;
}
totalScore(students[1].score1, students[1].score2, total);

function totalScore (a,b,callback){
  const resultC = callback(a,b);
  console.log(resultC);
}
function total(a,b){
  return a+b;
}
totalScore(students[2].score1, students[2].score2, total);

function totalScore (a,b,callback){
  const resultD = callback(a,b);
  console.log(resultD);
}
function total(a,b){
  return a+b;
}
totalScore(students[3].score1, students[3].score2, total);

const examTotal = [];
examTotal.push({name:'John', result:93});
examTotal.push({name:'Bob', result:47});
examTotal.push({name:'Nick', result:75});
examTotal.push({name:'Alex', result:89});

console.log(examTotal);

for( let i = 0; i < examTotal.length; i++){
    // function gradeResult(){
      if(examTotal[i].result >= limits[0]){
        console.log(examTotal[i].name + ',your grade is A.');
      }else if(examTotal[i].result >= limits[1]){
        console.log(examTotal[i].name + ',your grade is B.');
      }else if(examTotal[i].result >= limits[2]){
        console.log(examTotal[i].name + ',your grade is C.');
      }else if(examTotal[i].result >= limits[3]){
        console.log(examTotal[i].name + ',your grade is D.');
      }else if(examTotal[i].result >= limits[4]){
        console.log(examTotal[i].name + ',your grade is E.');
      }else{
        console.log(examTotal[i].name + ',you failed.');
      }
    };