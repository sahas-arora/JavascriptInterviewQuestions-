

function steps(number){
  for(let rows=0; rows<number; rows++){
    let stair = '';

    for(let columns=0; columns<number; columns++){
      if(columns<=rows){
        stair = stair + "*";
      }
      else{
        stair = stair + " ";
      }
    }
    console.log(stair);
  }
  return ;
}

steps(30);
module.exports = steps;
