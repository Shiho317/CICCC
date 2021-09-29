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
  if(exponent <= 0) return 1
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
  if(arry.length === 0)return 1;

  let product = arry[0];
  arry.shift();
  
  return product * productOfArray(arry);
  

}
console.log(productOfArray([1,2,3]));
console.log(productOfArray([1,2,3,10]));


/* 03-----------------------reverse---------------------------------------------------------------------
Write a recursive function called 'reverse' which accepts a string and returns 
a new string in reverse.
*/
// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

function reverse(array){
  const words = array.split('');
  if(words.length === 0) return '';
  console.log(words);

  const char = words[words.length - 1];
  console.log(char);
  words.pop();

  return char + reverse(words.join(''));
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

  return reverse(string) === string;
    
    // add whatever parameters you deem necessary - good luck!
}

console.log(isPalindrome('awesome'));
console.log(isPalindrome('foobar'));
console.log(isPalindrome('tacocat'));
console.log(isPalindrome('amanaplanacanalpanama'));
console.log(isPalindrome('amanaplanacanalpandemonium'));
