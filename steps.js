

function steps(number){

  for(let row =0; row<number; row++){
    let stair = '';

    for(let column=0; column<number; column++){
      if(column<=row){
        stair = stair + "#";
      }
      else{
        stair = stair + " ";
      }
    }
    console.log(stair);
  }
  return;
}

steps(22);
