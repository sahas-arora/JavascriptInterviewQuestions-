


function capitalize(string){
  let array = '' +string[0].toUpperCase();

  for(let i=1;i<string.length;i++){
    if(string[i-1]==' '){
      array = array + string[i].toUpperCase();
    }
    else{
      array = array + string[i];
    }
  }

  console.log(array);

  return array;
}

let words = "hello there, my name is sahas and this code capitalizes the first letter of every word in the sentece.";

capitalize(words);
