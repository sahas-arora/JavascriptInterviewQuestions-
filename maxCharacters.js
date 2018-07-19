

function maxChar(string){
  let characters = {};
  let maximum = 0 ;
  let maxChar = '';

  for(let character of string){
    if(characters[character]){
      characters[character]++;
    }
    else{
      characters[character] = 1;
    }
  }

  for(let character in characters){
    if(characters[character]>maximum){
      maximum = characters[character];
      maxChar = character;
      console.log(maxChar + " : " + maximum);
    }
  }

  return maxChar;
}

let string1 = "Hellothere,mynameisSahasandthiscodecountsthemaximumrepeatingcharacetersinastring";
console.log("Maximum repeating character: " + maxChar(string1));
