function sortCarByYearDescendingly(cars) {
  
  const result = [...cars];

  // process iterarion
  for(let i=0; i < result.length; i++){

    // last element already have bigger value
    for(let j=0; j < result.length -i -1; j++){

      // check the value year
      // is less than next iterarion or not
      if(result[j].year < result[j+1].year){

         // process swap if condition true
        let save = result[j]
        result[j] = result[j+1]
        result[j+1] = save;
      }
    }
  }

  return result;
}
