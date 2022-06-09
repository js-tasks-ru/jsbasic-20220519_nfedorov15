function isEmpty(obj) {
  if( Object.keys( obj ).length > 0 ) {
     return false; 
  } return true;
  }

let schedule = {};

alert( isEmpty(schedule) ); 

schedule["8:30"] = "подъём";

alert( isEmpty(schedule) ); 
