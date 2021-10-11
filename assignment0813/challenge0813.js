{
  var object = {
    meal : 'Chinese',
    name : 'Dumblin',
    price : 1000,
    populality : 50,
  }
  var object = {
    meal : 'Japanese',
    name : 'Sushi',
    price : 1500,
    populality : 20,
  }
  var object = {
    meal : 'Italian',
    name : 'Pasta',
    price : 800,
    populality : 100,
  }

  var addtable = (tabledatalist) =>{
    var targettablebody = document.querySelector('.js-tbody');
    console.log(targettablebody);

    targettablebody.innerHTML = '';//reset content

    tabledatalist.map((tabledata) => {
      var trElement = document.createElement('tr');//create tr element
      
      var tdElementMeal = document.createElement('td');

      var tdElementName = document.createElement('td');
      var tdElementPrice = document.createElement('td');
      var tdElementPopulality = document.createElement('td');
      //create td element

      tdElementMeal.innerText = tabledata.meal;
      tdElementName.innerText = tabledata.name;
      tdElementPrice,innerText = tabledata.price;
      tdElementPopulality.innerText = tabledata.populality;
      //add text to td tags

      trElement.appendChild(tdElementMeal);
      trElement.appendChild(tdElementName);
      trElement.appendChild(tdElementPrice);
      trElement.appendChild(tdElementPopulality);
      //add tds to tr

      targettablebody.appendChild(trElement);
      //add tr to table
    });
  };

      // addtable(meals);

      document.querySelector('.table').addEventListener('mouseover',()=>{
      console.log('hover');

      var targetTable = document.querySelector('.table');
      console.log(targetTable);
      targetTable.classList.add('table-hover');

    });
    
    document.querySelector('.table').addEventListener('mouseleave', ()=>{
      console.log('leave');

      //add class to table

      var targetTable = document.querySelector('.table');
      console.log(targetTable);
      targetTable.classList.remove('table--hover');
    });
    //remove class from table

    var submitButton = document.getElementById('submit');
    console.log('submitButton');

      submitButton.addEventListener('click',(event)=>{
      event.preventDefault();
      console.log('clicked!!');


      var userInputData = getValuesFromInput();
      console.log(userInputData);
      meals.push(userInputData);

      alert(
        'name: ${userInputData.name}, price: ${userInputData.price},populality: ${userInputData.populality}');
        
      addtable(meals);

    });

    var getValuesFromInput = ()=>{
      
      var mealInput = document.getElementById('meal');
      var valueFromMealInput = mealInput.value;
      console.log('meal',valueFromMealInput);

      var nameInput = document.getElementById('name');
      var valueFromNameInput = nameInput.value;
      console.log('name',valueFromNameInput);

      var priceInput = document.getElementById('price');
      var valueFromPriceInput = priceInput.value;
      console.log('price',valueFromPriceInput);

      var populalityInput = document.getElementById('populality');
      var valueFromPopulalityInput = populalityInput.value;
      console.log('name',valueFromPopulalityInput);

      return{
        meal: valueFromMealInput,
        name: valueFromNameInput,
        price: valueFromPriceInput,
        populality: valueFromPopulalityInput,
      };


    };
    //get values
    

    


}