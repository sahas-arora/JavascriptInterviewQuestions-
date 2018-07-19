

function StringReversal(string){
  let array = '';

  for(let character of string){
    array = character + array;
  }
  console.log("This is your string: " + string);
  console.log("The reversed string is " + array);
  return array ;
}

let string1 = "I am sahas arora";

StringReversal(string1);
