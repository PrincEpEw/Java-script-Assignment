let age = prompt('Enter the age')

var agecall=()=>{

if(age <=10){
  return `you are childern`;
}else if (age <=20 ){
  return `you are tennagers`;
}else if (age <=50 ){
  return `you are younger`
}else if (age <=100){
  return `you are old`
}

}

console.log(agecall(age));