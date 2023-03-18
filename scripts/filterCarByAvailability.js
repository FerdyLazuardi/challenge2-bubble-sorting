 function filterCarByAvailability(cars) {

  // null array
 const result =[];

//  process iteration 
  for(let i=0; i<cars.length; i++){
    if(cars[i].available){    // process checking available
      result.push(cars[i])    // push to null array
    }  
  }
  return result;
 }

 console.log(filterCarByAvailability(true))