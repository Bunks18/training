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
}