// reverse array 

let myVar = [1,3,4,5]

myVar.reverse();
//swap elements 
const swapMe = (array, first, second) => { 
  //create variable to store something
  temp = '';
  //take first variable and put it in stored variable
  temp = array[first];
  //take second variable and swap it with the fist 
  array[first] = array[second]
  //take second
  array[second] = temp

  console.log(array)
}

//Write a simple function (less than 160 characters) that 
//returns a boolean indicating whether or not a string is a palindrome.

//my shit doesnt work

let myVar = 'sssss'

const stringSplit = (obj) => {
  let objArray = obj.split("");
  let reverse = objArray.reverse()
  objArray = objArray.join("")
  reverse = reverse.join("")
  if(objArray === reverse) {console.log(1)}
  else 0
}

stringSplit(myVar)

//answer 
function isPalindrome(str) {
  str = str.replace(/\W/g, '').toLowerCase();
  return (str == str.split('').reverse().join(''));
}