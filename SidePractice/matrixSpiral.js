


function Spiral(number){
  let results = [];

  for(let i=0;i<number;i++){
    results.push([]);
  }

  let startRow = 0;
  let startColumn = 0;
  let endRow = number-1;
  let endColumn = number-1;
  let counter = 1;


  while(startRow<=endRow && startColumn<=endColumn){

  for(let i=startColumn; i<=endColumn; i++){
    results[startRow][i] = counter;
    counter++;
  }
  startRow++;

  for(let i=startRow; i<=endRow; i++){
    results[i][endColumn] = counter;
    counter++;
  }
  endColumn--;

  for(let i=endColumn; i>=startColumn; i--){
    results[endRow][i] = counter;
    counter++;
  }
  endRow--;

  for(let i=endRow; i>=startRow; i--){
    results[i][startColumn] = counter;
    counter++;
  }
  startColumn++;
}

console.log(results);
return results;
}

Spiral(4);
