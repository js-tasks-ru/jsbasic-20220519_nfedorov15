function isEmpty(obj) {
  for (let key in obj) {
  
  return true;
}
return false;
}

let schedule = {};

alert( isEmpty(schedule) ); 

schedule["8:30"] = "подъём";

alert( isEmpty(schedule) ); 
