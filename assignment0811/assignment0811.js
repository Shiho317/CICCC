{
  var intro = document.getElementById('lion');
  var newNode1 = document.createElement('p');
  intro.appendChild(newNode1);
  newNode1.innerHTML = 'Lion';

  var second = document.getElementById('tiger');
  var newNode2 = document.createElement('p')
  intro.appendChild(newNode2);
  newNode2.innerHTML = 'Tiger';

  var third = document.getElementById('cheeter');
  var newNode3 = document.createElement('p');
  intro.appendChild(newNode3);
  newNode3.innerHTML = 'Cheeter';

  var forth = document.getElementById('dog');
  var newNode4 = document.createElement('p');
  intro.appendChild(newNode4);
  newNode4.innerHTML = 'Dog';

  var fifth = document.getElementById('cat');
  var newNode5 = document.createElement('p');
  intro.appendChild(newNode5);
  newNode5.innerHTML = 'Cat';

  var sixth = document.getElementById('equation');
  var newNode6 = document.createElement('p');
  intro.appendChild(newNode6);
  newNode6.innerHTML = 49+20-19;
  
  var seventh = document.getElementById('variables');
  var newNode7 = document.createElement('p');
  intro.appendChild(newNode7);
  newNode7.innerHTML = 30+20*10;
  
  var eighth = document.getElementById('operator');
  var newNode8 = document.createElement('p');
  intro.appendChild(newNode8);
  newNode8.innerHTML = 40+20-10;
}
