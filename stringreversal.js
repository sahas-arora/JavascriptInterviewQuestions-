

function reversal(string){
  let array = '';

  for(let character of string){
    array = character + array;
  }

  console.log("The reversed string is as follows : " + array);
  return array ;
}

let string1 = 'sagar';
let string2 = 'sahil';
let string3 = 'sahas';

reversal(string1);
reversal(string2);
reversal(string3);
