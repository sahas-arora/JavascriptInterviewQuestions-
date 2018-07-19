

function intReversal(number){
  let array = number.toString().split('');
  let array2 = '';

  for(let character of array){
    array2 = character + array2;
  }

  return parseInt(array2) * Math.sign(number);
}

let num1 = 12345;
let num2 = -12345;

console.log("For " + num1 + " , reversed integer is " + intReversal(num1));
console.log("For " + num2 + " , reversed integer is " + intReversal(num2));
