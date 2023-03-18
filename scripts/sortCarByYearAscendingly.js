function sortCarByYearAscendingly(cars) {

  const result = [...cars];

  // process iteration
  for(let i=0; i < result.length; i++){

    // last element already have bigger value
    for(let j=0; j < result.length -i -1; j++){

      // check the value year
      // is greater than next iterarion or not
      if(result[j].year > result[j+1].year){

        // process swap if condition true
        let save = result[j];
        result[j] = result[j+1];
        result[j+1] = save;
      }
    }
  }

  // for(let i=0; i<result.length; i++){
  //   for(let j=i+1; j<result.length ; j++){
  //     if(result[i].year>result[j].year){
  //       let save = result[i]
  //       result[i] = result[j]
  //       result[j] = save;
  //     }
  //   }
  // }
  
  return result;
}
