


function vowelFinder(string){
  let counter = 0;

  for(let character of string){
    if(character == 'a'||character == 'e'||character == 'i'||character == 'o'||character == 'u'||character == 'A'||character == 'E'||character == 'I'||character == 'O'||character == 'U'){
      counter = counter+1;
    }
  }
  console.log("The number of vowels in the string are : "+ counter);
  return counter
}

let words = "Hello there, my name is Sahas and this code calculates the number of vowels in a string.";
vowelFinder(words);
