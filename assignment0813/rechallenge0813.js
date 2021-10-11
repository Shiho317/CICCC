var meals = [
  {
  name : 'pizza',
  price : 14,
  popularity : 'high'
},
{
  name : 'humberger',
  price : 8,
  popularity : 'low'
},
{
  name : 'sushi',
  price : 20,
  populality : 'high'
},
];
var addRowsToTable = (TableList) =>{
  var targetTableBody = document.querySelector('.js-tbody');
  console.log(targetTableBody);

  targetTableBody.innerHTML='';

  TableList.map((TableData)=>{

    var trElement = document.createElement('tr');

    var tdElementName = document.createElement('td');
    var tdElementPrice = document.createElement('td');
    var tdElementPopularity = document.createElement('td');

    tdElementName.innerText = TableData.name;
    tdElementPrice.innerText = TableData.price;
    tdElementPopularity.innerText = TableData.popularity;

    trElement.appendChild(tdElementName);
    trElement.appendChild(tdElementPrice);
    trElement.appendChild(tdElementPopularity);
    console.log(trElement);

    targetTableBody.appendChild(trElement);

  });
  
  document.querySelector('.table').addEventListener('mouseleave',()=>{
    console.log(leave);

    var targetTable = document.querySelector('.table');
    console.log(targetTable);
    targetTable.classList.remove('table-hover');
  });

  var button = document.getElementById('.submit');
  console.log(button);

  button.addEventListener('click',(event)=>{
    event.preventDefault();
    console.log('clicked!!');

    var inputfrombutton = valueInputfromButton();
    console.log(inputfrombutton);
    meals.push(inputfrombutton);

    alert(
      'name : ${inputfrombutton.name}, price ; ${inputfrombutton.price}, popularity : ${inputfrombutton.popularity}'
    );

    addRowsToTable(meals);

  });

  var getValuesFromInput = ()=>{

    var nameInput = document.getElementById('name');
    var nameFromvalueInput = nameInput.value;
    console.log('name',nameFromvalueInput);

    var priceInput = document.getElementById('price');
    var priceFromvalueInput = priceInput.value;
    console.log('price',priceFromvalueInput);

    var popularity = document.getElementById('popularity');
    var popularityFromvalueInput = popularity.value;
    console.log('popularity',popularityFromvalueInput);

    return{
      name: nameFromvalueInput,
      price: priceFromvalueInput,
      popularity: popularityFromvalueInput,

    };
  }
}


