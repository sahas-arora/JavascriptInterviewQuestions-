

function palandrome(string){
  let array = '';

  for(let character of string){
    array = character + array;
  }
  if(array==string){
    console.log(array + " :indeed a palandrome..sigh..");
  }
  else{
    console.log("The string you entered is not a palandrome..");
  }
  return array;
}

palandrome("sahasasahas");
palandrome("sasfagj");
palandrome("sahas");
