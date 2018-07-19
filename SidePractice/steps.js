

function steps(number){
  for(let row=0; row<number; row++){

    let array = '';
    for(let column=0; column<number;column++){
      if(column<=row){
        array = array + "*";
      }
      else{
        array = array + " ";
      }
    }
    console.log(array);

  }

  return ;
}

steps(10);
