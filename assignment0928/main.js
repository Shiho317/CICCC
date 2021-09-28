'use strict';

/* 01-----------------------Power---------------------------------------------------------------------
Write a function called power which accepts a base and an exponent. 
The function should return the power of the base to the exponent. 
This function should mimic the functionality of Math.pow()  
        - do not worry about negative bases and exponents.
*/
// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base, exponent){
    return Math.pow(base, exponent)
}
console.log(power(2, 0));
console.log(power(2, 2));
console.log(power(2, 4));


/* 02-----------------------productOfArray---------------------------------------------------------------------
Write a function called 'productOfArray' which takes in an array of numbers and 
returns the product of them all.
*/
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arry){
  let product = 1;
  for(let i = 0; i < arry.length; i++){
    product *= arry[i];
  }
  return product;
};

console.log(productOfArray([1,2,3]));
console.log(productOfArray([1,2,3,10]));


/* 03-----------------------reverse---------------------------------------------------------------------
Write a recursive function called 'reverse' which accepts a string and returns 
a new string in reverse.
*/
// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

function reverse(array){
  let str = '';
  const words = array.split('');
  console.log(words);

  const reversed = words.reverse();
  console.log(reversed);
  
  for(let i = 0; i < reversed.length; i++){
    str += reversed[i];
  }
  return str;
    // add whatever parameters you deem necessary - good luck!
}

console.log(reverse('awesome'));
console.log(reverse('rithmschool'));


/* 04-----------------------isPalindrome---------------------------------------------------------------------
Write a recursive function called 'isPalindrome' which returns true if the string 
passed to it is a palindrome (reads the same forward and backward). 
Otherwise it returns false.
*/
// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(string){
  let stReversed = '';
  
  const strings = string.split('');
  console.log(strings);

  const reversedStrings = strings.reverse();
  console.log(reversedStrings);
  
  for(let i = 0; i < reversedStrings.length; i++){
    stReversed += reversedStrings[i];
  }
  if(string === stReversed) return true;
  if(string !== stReversed) return false;
    
    // add whatever parameters you deem necessary - good luck!
}

console.log(isPalindrome('awesome'));
console.log(isPalindrome('foobar'));
console.log(isPalindrome('tacocat'));
console.log(isPalindrome('amanaplanacanalpanama'));
console.log(isPalindrome('amanaplanacanalpandemonium'));
