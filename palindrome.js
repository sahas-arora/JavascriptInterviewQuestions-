

function palindrome(string){
  let array = '';

  for(let character of string){
    array = character + array;
  }

  if(array == string){
    console.log("The name is a palindrome");
  }

  else{
    console.log("The name is not a palindrome");
  }

  return array;
}

let name1 = "sahas";
let name2 = palindrome(name1);
