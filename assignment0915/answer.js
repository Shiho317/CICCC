const students = [
{
  name:'John',
  score1:47,
  score2:46
},
{
  name:'Bob',
  score1:23,
  score2:24
},
{
  name:'Nick',
  score1:40,
  score2:35
},
{
  name:'Alex',
  score1:44,
  score2:45
},
]

console.log(students);

let degrees = ['A', 'B', 'C', 'D', 'E'];
console.log(degrees);

let limits = [91, 81, 71, 61, 51];
console.log(limits);

function calcSum(score1, score2){
  let sum;
  sum = score1 + score2;
  return sum;
}

function calcFinal(){
  for(let i = 0; i < students.length; i++){

    let sum = calcSum(students[i].score1, students[i].score2);

    if(sum >= 51){
      console.log(students[i].name + 'passed the exam.')

      for(let x = 0; x < limits.length; x++){

        if(sum >= limits[x]){
            console.log('He has ' + sum + ' points and he got a degree ' + degrees[x]);
            break;
        }
    }
}else{
    //fail
    console.log(students[i].name + ' failed the exam.')
}
}
}
calcFinal();


