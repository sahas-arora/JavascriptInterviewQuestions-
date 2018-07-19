

function IntegerReversal(number){
  let array = number.toString().split('');
  let array2 = '';

  for(let character of array){
    array2 = character + array2;
  }
  console.log("The number you entered: " +number);
  console.log("The reversed integer: " + parseInt(array2) * Math.sign(number));
  return parseInt(array2) * Math.sign(number);
}

IntegerReversal(-312);
console.log(" ");
console.log(" ");
IntegerReversal(4324518);
